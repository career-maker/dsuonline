# inkdiff.py diff.json full.png site.png [y0 y1] : compare ink extents of every matched text line
import json, sys, numpy as np
from PIL import Image
rows = json.load(open(sys.argv[1]))
D = np.asarray(Image.open(sys.argv[2]).convert('L')).astype(int)
M = np.asarray(Image.open(sys.argv[3]).convert('L')).astype(int)
y0 = float(sys.argv[4]) if len(sys.argv) > 4 else 0
y1 = float(sys.argv[5]) if len(sys.argv) > 5 else 1e9

def ink(a, x0, x1, base, sz):
    x0, x1 = int(max(0, x0)), int(min(a.shape[1], x1))
    t, b = int(base - sz * 0.78), int(base + sz * 0.05)   # cap height band, no descenders
    r = a[t:b, x0:x1]
    if r.size == 0: return None
    edge = np.concatenate([a[t - 3, x0:x1], a[b + 3, x0:x1]]) if t > 3 else r[0]
    bg = np.median(edge)
    m = np.abs(r - bg) > 70
    xs = np.nonzero(m.any(0))[0]
    if len(xs) == 0: return None
    # cut at gaps wider than 1.2em (next text block on same row)
    gaps = np.nonzero(np.diff(xs) > sz * 1.2)[0]
    if len(gaps): xs = xs[:gaps[0] + 1]
    return x0 + xs[0], x0 + xs[-1]

out = []
for r in rows:
    if 'ox' not in r or not (y0 <= r['y'] <= y1): continue
    w = r['x1'] - r['ox']
    d = ink(D, r['ox'] - 6, r['x1'] + 6, r['y'], r['sz'])
    m = ink(M, r['hx'] - 6, r['hx'] + w + 6, r['hcy'], r['sz'])
    if not d or not m: continue
    out.append((r['y'], r['t'], d[0], m[0] - d[0], (m[1] - m[0]) - (d[1] - d[0]), d[1] - d[0], r['hcy'] - r['y']))
for y, t, dx0, dx, dw, w, dy in out:
    flag = '  <<' if abs(dw) > 2 or abs(dx) > 2 or abs(dy) > 1.5 else ''
    print(f'{y:6} {t[:30]:30} x{dx0:5} dx{dx:+4} dw{dw:+4} (w{w:4}) dy{dy:+5.1f}{flag}')
