"""Scrape the blog index (all pages) and every post into content/blogs.json + content/blog/<slug>.json"""
import json, os, re, sys, time
sys.path.insert(0, os.path.dirname(__file__))
import scrape
from bs4 import BeautifulSoup

os.makedirs('content/blog', exist_ok=True)
posts = []
page = 1
while True:
    u = 'https://dsuonline.com/resources/blogs/' + (f'page/{page}/' if page > 1 else '')
    try: h = scrape.get(u)
    except Exception as e:
        print('stop', page, e); break
    s = BeautifulSoup(h, 'lxml')
    items = s.select('div.blog-item')
    if not items: break
    for it in items:
        a = it.select_one('h3 a')
        img = it.select_one('img')
        date = it.select_one('.date-blog')
        ex = it.select_one('.blog-excerpt')
        slug = a['href'].rstrip('/').split('/')[-1]
        posts.append({'slug': slug, 'title': scrape.clean(a.get_text(' ')), 'date': scrape.clean(date.get_text()) if date else '',
                      'excerpt': scrape.clean(ex.get_text(' ')) if ex else '', 'image': (img.get('src') if img else ''),
                      'imageAlt': (img.get('alt') if img else ''), 'url': a['href']})
    print('page', page, len(items), flush=True)
    last = max([int(m) for m in re.findall(r'/page/(\d+)/', h)] or [1])
    if page >= last: break
    page += 1
    time.sleep(0.3)
json.dump(posts, open('content/blogs.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print('posts', len(posts))
for p in posts:
    out = f"content/blog/{p['slug']}.json"
    if os.path.exists(out) and '--force' not in sys.argv: continue
    try:
        d = scrape.extract(scrape.get(p['url']), p['url'])
        b = d['blocks']
        # cut site chrome before the post: start at the featured image / byline preceding the h1
        hi = next((i for i, x in enumerate(b) if x['t'] == 'h1'), 0)
        start = hi
        for j in range(hi - 1, max(-1, hi - 4), -1):
            if b[j]['t'] == 'img' or (b[j]['t'] == 'p' and b[j]['x'].startswith('By')): start = j
        d['blocks'] = [x for x in b[start:] if not (x['t'] == 'p' and x['x'] in ('Scroll to Top', 'YARPP Thumbnails', 'No related posts.')) and not (x['t'] == 'h3' and x['x'] == 'Related posts:')]
        json.dump(d, open(out, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        print('ok', p['slug'], len(d['blocks']), flush=True)
    except Exception as e:
        print('ERR', p['slug'], e, flush=True)
    time.sleep(0.3)
