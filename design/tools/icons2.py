import fitz, os
import numpy as np
from PIL import Image, ImageDraw
OUT = r'D:\iss\dsu online\public\icons'
d = fitz.open(r'D:\iss\dsu online\design\Index.pdf')
p = d[0]
Z = 4

def render(rect):
    pm = p.get_pixmap(clip=fitz.Rect(*rect), matrix=fitz.Matrix(Z, Z), alpha=False)
    return Image.frombytes('RGB', (pm.width, pm.height), pm.samples)

def color_to_alpha(im, bg):
    a = np.asarray(im).astype(float)
    bgc = np.array(bg, float)
    # alpha = max over channels of how far pixel is from bg towards the extreme away from bg
    alpha = np.zeros(a.shape[:2])
    for c in range(3):
        away = np.where(a[..., c] < bgc[c], (bgc[c] - a[..., c]) / max(bgc[c], 1), (a[..., c] - bgc[c]) / max(255 - bgc[c], 1))
        alpha = np.maximum(alpha, away)
    alpha = np.clip(alpha, 0, 1)
    col = np.where(alpha[..., None] > 0.02, (a - bgc * (1 - alpha[..., None])) / np.maximum(alpha[..., None], 0.02), 0)
    col = np.clip(col, 0, 255)
    out = np.dstack([col, alpha * 255]).astype('uint8')
    return Image.fromarray(out, 'RGBA')

def white_key(im, lo=170, hi=235):
    a = np.asarray(im).astype(float)
    m = a.min(axis=2)
    alpha = np.clip((m - lo) / (hi - lo), 0, 1)
    out = np.dstack([np.full_like(m, 255), np.full_like(m, 255), np.full_like(m, 255), alpha * 255]).astype('uint8')
    return Image.fromarray(out, 'RGBA')

def save(name, im):
    bb = im.getbbox()
    if bb:
        im = im.crop(bb)
    im.save(os.path.join(OUT, name + '.png'))
    print(name, im.size)

strip = {
    'strip-degree': (770, 1015, 865, 1095), 'strip-curriculum': (1050, 1015, 1145, 1095),
    'strip-online': (1345, 1015, 1440, 1095), 'strip-recognized': (1640, 1015, 1745, 1095),
}
for n, r in strip.items():
    save(n, color_to_alpha(render(r), (250, 250, 250)))

tiles = {
    'tile-learn': (1280, 3615, 1345, 3675), 'tile-live': (1570, 3615, 1630, 3668),
    'tile-assign': (106, 3930, 170, 3995), 'tile-projects': (400, 3930, 464, 3995),
    'tile-forums': (694, 3930, 758, 3995), 'tile-exams': (988, 3930, 1052, 3995),
    'tile-mobile': (1280, 3930, 1344, 3995), 'tile-recorded': (1570, 3930, 1634, 3995),
}
for n, r in tiles.items():
    save(n, white_key(render(r)))

# career-1 = white recolour of the orange detail icon
src = Image.open(os.path.join(OUT, 'career-detail.png')).convert('RGBA')
arr = np.asarray(src).copy()
arr[..., :3] = 255
Image.fromarray(arr).save(os.path.join(OUT, 'career-1-white.png'))

# contact sheet
names = sorted(f for f in os.listdir(OUT) if f.endswith('.png'))
sheet = Image.new('RGB', (1400, 140 * ((len(names) + 6) // 7)), (90, 90, 120))
dr = ImageDraw.Draw(sheet)
for i, n in enumerate(names):
    im = Image.open(os.path.join(OUT, n)).convert('RGBA')
    im.thumbnail((120, 100))
    x, y = (i % 7) * 200, (i // 7) * 140
    sheet.paste(im, (x + 5, y + 20), im)
    dr.text((x + 5, y + 5), n, fill=(255, 255, 255))
sheet.save(os.environ['TEMP'] + r'\claude\D--iss-dsu-online\ff93512b-5f7e-4188-abe6-eea922d18bff\scratchpad\icons.png')
