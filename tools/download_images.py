"""Download every image referenced by scraped content into public/content/ and rewrite src to local paths."""
import glob, hashlib, json, os, re, ssl, sys, urllib.request
from urllib.parse import quote, urlparse, unquote

ctx = ssl.create_default_context()
OUT = 'public/content'
os.makedirs(OUT, exist_ok=True)
cache = {}
if os.path.exists('content/image-map.json'): cache = json.load(open('content/image-map.json', encoding='utf-8'))

def local(url):
    if url in cache: return cache[url]
    p = urlparse(url)
    if p.scheme not in ('http', 'https'): return url
    base = unquote(os.path.basename(p.path)) or 'img'
    base = re.sub(r'[^A-Za-z0-9._-]+', '-', base)
    h = hashlib.sha1(url.encode()).hexdigest()[:8]
    name = f'{h}-{base}'
    path = os.path.join(OUT, name)
    if not os.path.exists(path):
        try:
            r = urllib.request.Request(quote(url, safe=":/%?=&+,@~!$()*;"), headers={'User-Agent': 'Mozilla/5.0'})
            data = urllib.request.urlopen(r, context=ctx, timeout=40).read()
            open(path, 'wb').write(data)
        except Exception as e:
            print('FAIL', url, e, flush=True)
            cache[url] = None
            return None
    cache[url] = '/content/' + name
    return cache[url]

files = glob.glob('content/pages/*.json') + glob.glob('content/blog/*.json')
for f in files:
    d = json.load(open(f, encoding='utf-8'))
    keep = []
    for b in d['blocks']:
        if b['t'] == 'img':
            l = local(b['src'])
            if not l: continue
            b['src'] = l
        keep.append(b)
    d['blocks'] = keep
    json.dump(d, open(f, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
posts = json.load(open('content/blogs.json', encoding='utf-8'))
for p in posts:
    if p['image']: p['image'] = local(p['image']) or ''
json.dump(posts, open('content/blogs.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
json.dump(cache, open('content/image-map.json', 'w', encoding='utf-8'), indent=1)
print('images', len([v for v in cache.values() if v]))
