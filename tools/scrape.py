"""Scrape dsuonline.com pages into structured content blocks (content/pages/*.json). Run: python tools/scrape.py"""
import json, os, re, ssl, sys, time, urllib.request
from urllib.parse import urljoin, urlparse
from bs4 import BeautifulSoup, NavigableString

ctx = ssl.create_default_context()
BLOCK = {'div', 'section', 'article', 'header', 'main', 'aside', 'figure', 'ul', 'ol', 'table', 'form', 'li', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'blockquote', 'details', 'summary'}

def get(u):
    r = urllib.request.Request(u, headers={'User-Agent': 'Mozilla/5.0'})
    return urllib.request.urlopen(r, context=ctx, timeout=40).read().decode('utf-8', 'replace')

def clean(t):
    return re.sub(r'\s+', ' ', t.replace('\xa0', ' ')).strip()

JUNK_P = ('custom previous button', 'custom next button', 'scroll down', 'sidebar', 'content area', 'semester buttons', 'elective buttons',
          'apply now (utm', 'enquire now (npf', 'call', 'html', 'head', 'body')

def T(el):
    """get_text that rejoins letter-by-letter <span> headings ("A d v a n c e" -> "Advance")."""
    spans = el.find_all('span')
    if len(spans) >= 4 and sum(1 for s in spans if len(s.get_text(strip=True)) <= 1) >= len(spans) * 0.8:
        return el.get_text('')
    return el.get_text(' ')

JUNK_RE = re.compile(r'^(CARD \d+$|BUTTON INSTEAD|SEMESTER-WISE|ANNUAL TABLE|.*Navigation Buttons$|.*its own navigation$|Certificate Modal|NPF WIDGET|Left Column|Right Column|#content$|ast-container$|Scroll to Top$|\+91 9880147004 Follow us)', re.I)

def tidy(blocks):
    out, seen = [], set()
    for b in blocks:
        t = b['t']
        if t == 'q':
            out.append(b)
            continue
        if t == 'p':
            x = b['x']
            if re.fullmatch(r'\(?(?:\S ){3,}\S\)?', x): continue  # decorative letter-spaced text
            if JUNK_RE.match(x) or 'Follow us on Quick Links' in x: continue
            if x.startswith('<') or '</' in x or x.lower() in JUNK_P or x.lower().startswith(('custom ', 'sidebar')): continue
            b = {'t': 'p', 'x': x}
            key = ('p', x)
            if len(x) > 40 and key in seen: continue
            seen.add(key)
        elif t == 'img':
            if re.search(r'swiper-cus-btn|logo\.(webp|png)|newlogo|/favicon', b['src']) or b['alt'] in ('Prev', 'Next'): continue
            key = ('img', b['src'])
            if key in seen: continue
            seen.add(key)
        elif t in ('table',):
            key = ('table', json.dumps(b['rows']))
            if key in seen: continue
            seen.add(key)
        if out and out[-1] == b: continue
        out.append(b)
    return out

def extract(html, base):
    s = BeautifulSoup(html, 'lxml')
    # accordion questions live in <button>s: keep them as 'q' markers before buttons are dropped
    for b in s.find_all('button'):
        if any('accordion-button' in c for c in b.get('class', [])):
            txt = b.select_one('[class*=button__text]') or b
            for n in b.select('[class*=button__number]'): n.decompose()
            q = clean(txt.get_text(' '))
            if q:
                m = s.new_tag('p'); m['data-q'] = '1'; m.string = q
                b.replace_with(m)
    # animated counters render as "0" until JS runs: use the target value
    for c in s.select('[data-target]'):
        if (c.get('data-target') or '').isdigit():
            plus = '+' if any('plus' in k for k in c.get('class', [])) else ''
            c.string = f"{int(c['data-target']):,}{plus}"
    for t in s(['script', 'style', 'noscript', 'svg', 'form', 'button', 'input', 'select', 'textarea', 'nav']):
        t.decompose()
    root = s.select_one('main#mainContent')
    if root is None or len(root.get_text(strip=True)) < 300: root = s.body
    inner = root.find('body')
    if inner: root = inner
    blocks, stop = [], [False]
    def img(e):
        src = e.get('data-src') or e.get('src') or ''
        if src and not src.startswith('data:'):
            blocks.append({'t': 'img', 'src': urljoin(base, src), 'alt': clean(e.get('alt', ''))})
    def walk(e):
        if stop[0]: return
        for c in e.children:
            if stop[0]: return
            if isinstance(c, NavigableString): continue
            n = c.name
            if n in ('h1', 'h2', 'h3', 'h4', 'h5', 'h6'):
                x = clean(c.get_text(' '))
                if x == 'Quick Links': stop[0] = True; return
                if x: blocks.append({'t': n, 'x': x})
            elif n == 'p':
                x = clean(T(c))
                if x: blocks.append({'t': 'q' if c.get('data-q') else 'p', 'x': x})
                for i in c.find_all('img'): img(i)
            elif n in ('ul', 'ol'):
                items = [clean(li.get_text(' ')) for li in c.find_all('li', recursive=False)]
                items = [i for i in items if i]
                if items and any(li.find(['h2', 'h3', 'h4', 'p', 'ul']) for li in c.find_all('li', recursive=False)):
                    walk(c)  # complex list: descend
                elif items: blocks.append({'t': 'ul', 'items': items})
            elif n == 'table':
                rows = [[clean(td.get_text(' ')) for td in tr.find_all(['th', 'td'])] for tr in c.find_all('tr')]
                rows = [r for r in rows if any(r)]
                if rows: blocks.append({'t': 'table', 'rows': rows})
            elif n == 'img': img(c)
            elif n == 'iframe':
                if c.get('src'): blocks.append({'t': 'iframe', 'src': c['src']})
            elif n == 'a' and not c.find(['h1', 'h2', 'h3', 'h4', 'p', 'div']):
                x = clean(c.get_text(' '))
                if x and c.get('href') and not c['href'].startswith(('#', 'javascript')):
                    blocks.append({'t': 'a', 'x': x, 'href': urljoin(base, c['href'])})
            elif n in BLOCK or n == 'a':
                kids = [k for k in c.children if getattr(k, 'name', None) in BLOCK or getattr(k, 'name', None) in ('img', 'a', 'iframe', 'table')]
                if not kids:
                    x = clean(T(c))
                    if x: blocks.append({'t': 'p', 'x': x})
                    for i in c.find_all('img'): img(i)
                else:
                    # direct text mixed with blocks
                    for k in c.children:
                        if isinstance(k, NavigableString) and clean(str(k)): blocks.append({'t': 'p', 'x': clean(str(k))})
                        elif getattr(k, 'name', None) and k.name not in BLOCK and k.name not in ('img', 'a', 'iframe', 'table'):
                            x = clean(k.get_text(' '))
                            if x: blocks.append({'t': 'p', 'x': x})
                    walk(c)
            else:
                x = clean(c.get_text(' '))
                if x and c.name in ('span', 'strong', 'b', 'em'): blocks.append({'t': 'p', 'x': x})
    walk(root)
    out = tidy(blocks)
    title = clean(s.title.get_text()) if s.title else ''
    desc = (s.find('meta', attrs={'name': 'description'}) or {}).get('content', '') if s else ''
    return {'title': title, 'description': desc, 'blocks': out}

def cfmail(h):
    k = int(h[:2], 16)
    return ''.join(chr(int(h[i:i + 2], 16) ^ k) for i in range(2, len(h), 2))

def decode_mail(s):
    # Cloudflare obfuscates addresses as /cdn-cgi/l/email-protection#HEX and shows '[email protected]'
    return re.sub(r'(?:https://dsuonline\.com)?/cdn-cgi/l/email-protection#([0-9a-f]+)', lambda m: 'mailto:' + cfmail(m.group(1)), s)

def slugify(u):
    p = urlparse(u).path.strip('/')
    return re.sub(r'[^A-Za-z0-9_&-]+', '__', p) or 'home'

if __name__ == '__main__':
    urls = [l.split('\t') for l in open('content/urls.txt', encoding='utf-8').read().splitlines() if l.strip()]
    for slug, u in urls:
        out = f'content/pages/{slug}.json'
        if os.path.exists(out) and '--force' not in sys.argv: continue
        try:
            d = extract(get(u), u); d['url'] = u
            if slug == 'mandatory-disclosures':  # card index numbers and popup-form dev notes are not content
                d['blocks'] = [b for b in d['blocks'] if not (b['t'] == 'p' and re.match(r'^(\d{2}|(Start|End):\s*PO?pup Form)$', b['x'], re.I))]
            d = json.loads(decode_mail(json.dumps(d, ensure_ascii=False)))
            for b in d['blocks']:
                if b['t'] == 'a' and b['href'].startswith('mailto:') and 'protected' in b['x']: b['x'] = b['href'][7:]
            json.dump(d, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
            print('ok', slug, len(d['blocks']), flush=True)
        except Exception as e:
            print('ERR', slug, e, flush=True)
        time.sleep(0.3)
