import os, sys
sys.path.insert(0, os.path.dirname(__file__))
import numpy as np
from PIL import Image
exec(open(os.path.join(os.path.dirname(__file__), 'icons2.py')).read().split("strip = {")[0])

for junk in ['badge-menu-search', 'enquire-icons', 'career-1', 'career-1-white']:
    f = os.path.join(OUT, junk + '.png')
    if os.path.exists(f):
        os.remove(f)

def orange_key(im):
    a = np.asarray(im).astype(float)
    rb = a[..., 0] - a[..., 2]
    alpha = np.clip((rb - 70) / 110, 0, 1)
    out = np.dstack([a[..., 0], a[..., 1], a[..., 2], alpha * 255]).astype('uint8')
    return Image.fromarray(out, 'RGBA')

white = {
    'about-ugc': (720, 1720, 775, 1780), 'about-industry': (1038, 1720, 1090, 1782),
    'about-alumni': (716, 1848, 776, 1908), 'about-flexible': (1033, 1848, 1095, 1910),
    'mini-online': (414, 2500, 444, 2530), 'mini-years': (414, 2530, 444, 2559), 'mini-fee': (414, 2559, 444, 2589),
    'career-2': (112, 5340, 160, 5392), 'career-3': (112, 5450, 162, 5500),
    'career-4': (110, 5557, 162, 5612), 'career-5': (112, 5666, 162, 5724), 'career-detail': (496, 5248, 548, 5302),
    'check': (498, 5558, 521, 5581),
}
for n, r in white.items():
    save(n, color_to_alpha(render(r), (255, 255, 255)))
dark = {
    'why-flexible': (1083, 4370, 1140, 4432), 'why-faculty': (1425, 4368, 1473, 4425),
    'why-placement': (1085, 4492, 1136, 4548), 'why-digital': (1425, 4499, 1476, 4549),
}
for n, r in dark.items():
    save(n, orange_key(render(r)))

src = Image.open(os.path.join(OUT, 'career-detail.png')).convert('RGBA')
arr = np.asarray(src).copy()
arr[..., :3] = 255
Image.fromarray(arr).save(os.path.join(OUT, 'career-1-white.png'))
exec(open(os.path.join(os.path.dirname(__file__), 'icons2.py')).read().split("# contact sheet")[1].join(["# contact sheet", ""]) if False else "")

names = sorted(f for f in os.listdir(OUT) if f.endswith('.png'))
from PIL import ImageDraw
sheet = Image.new('RGB', (1400, 140 * ((len(names) + 6) // 7)), (90, 90, 120))
dr = ImageDraw.Draw(sheet)
for i, n in enumerate(names):
    im = Image.open(os.path.join(OUT, n)).convert('RGBA')
    im.thumbnail((120, 100))
    x, y = (i % 7) * 200, (i // 7) * 140
    sheet.paste(im, (x + 5, y + 20), im)
    dr.text((x + 5, y + 5), n, fill=(255, 255, 255))
sheet.save(os.environ['TEMP'] + r'\claude\D--iss-dsu-online\ff93512b-5f7e-4188-abe6-eea922d18bff\scratchpad\icons.png')
