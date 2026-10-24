"""Add width/height to img blocks (from files in public/content) so pages render without layout shift."""
import glob, json
from PIL import Image
sz = {}
def dims(src):
    if src not in sz:
        try:
            with Image.open('public' + src) as im: sz[src] = im.size
        except Exception: sz[src] = None
    return sz[src]
for f in glob.glob('content/pages/*.json') + glob.glob('content/blog/*.json'):
    d = json.load(open(f, encoding='utf-8'))
    for b in d['blocks']:
        if b['t'] == 'img' and b['src'].startswith('/content/'):
            r = dims(b['src'])
            if r: b['w'], b['h'] = r
    json.dump(d, open(f, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
posts = json.load(open('content/blogs.json', encoding='utf-8'))
for p in posts:
    if p['image'].startswith('/content/'):
        r = dims(p['image'])
        if r: p['w'], p['h'] = r
json.dump(posts, open('content/blogs.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
