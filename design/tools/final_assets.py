import os, json, sys
import numpy as np
from PIL import Image
src = open(os.path.join(os.path.dirname(__file__), 'icons2.py')).read().split("strip = {")[0]
exec(src)
RAW = r'D:\iss\dsu online\design\raw'
PUB = r'D:\iss\dsu online\public'
for n, x in {'hero-bg-2': 700, 'hero-bg-3': 858}.items():
    Image.open(os.path.join(RAW, f'{x}.png')).convert('RGB').save(os.path.join(PUB, 'images/hero', n + '.webp'), quality=82, method=5)

# Inter Smart logo (footer bottom bar, on #fff3e0)
save_dir = OUT
im = render((1690, 10640, 1830, 10680))
a = color_to_alpha(im, (255, 243, 224))
bb = a.getbbox(); a = a.crop(bb)
a.save(os.path.join(PUB, 'images/brand/intersmart.png'))
print('intersmart', a.size)

sizes = {}
for f in sorted(os.listdir(OUT)):
    if f.endswith('.png'):
        w, h = Image.open(os.path.join(OUT, f)).size
        sizes[f[:-4]] = [round(w / 4, 1), round(h / 4, 1)]
ts = "// generated from design/Index.pdf — natural CSS px size of each icon in public/icons\nexport const iconSize: Record<string, [number, number]> = " + json.dumps(sizes, indent=2) + ";\n"
os.makedirs(r'D:\iss\dsu online\src\data', exist_ok=True)
open(r'D:\iss\dsu online\src\data\icon-sizes.ts', 'w').write(ts)
print(len(sizes))
