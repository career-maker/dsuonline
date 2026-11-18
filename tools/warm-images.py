"""Warm the server's Next image cache after a deploy so no visitor waits for first-time image encoding.
Usage: python tools/warm-images.py https://dsuonline.intersmarthosting.in [paths...]
Fetches each page, then requests every /_next/image URL it references (webp, as a browser would)."""
import re, sys, html, urllib.request
from concurrent.futures import ThreadPoolExecutor

base = sys.argv[1].rstrip('/')
pages = sys.argv[2:] or ['/', '/online-mba', '/online-mca', '/online-bba', '/online-bca', '/online-bcom', '/about', '/academics-at-dsu', '/admission', '/student-testimonials', '/international-learners', '/contact-us']

def get(url, accept='*/*'):
    req = urllib.request.Request(url, headers={'Accept': accept, 'User-Agent': 'image-warmer'})
    with urllib.request.urlopen(req, timeout=90) as r:
        return r.read()

urls = set()
for p in pages:
    try:
        t = get(base + p, 'text/html').decode('utf8', 'ignore')
    except Exception as e:
        print('page failed', p, e); continue
    for m in re.findall(r'(/_next/image\?[^"\s\,]+)', t):
        urls.add(html.unescape(m))
print(len(urls), 'image urls')

def warm(u):
    try:
        get(base + u, 'image/webp,*/*'); return None
    except Exception as e:
        return (u, e)

with ThreadPoolExecutor(4) as ex:
    bad = [r for r in ex.map(warm, sorted(urls)) if r]
print('failed:', len(bad))
for u, e in bad[:20]: print(' ', u, e)
