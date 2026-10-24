import fitz, os, io, shutil
from PIL import Image

RAW = r'D:\iss\dsu online\design\raw'
OUT = r'D:\iss\dsu online\public'
d = fitz.open(r'D:\iss\dsu online\design\Index.pdf')
p = d[0]

# ---- photos / logos from original xref images -> webp (png for logos w/ alpha) ----
photos = {
    'hero/hero-bg': 1068, 'brand/logo': 436, 'brand/naac': 488, 'brand/ugc': 802, 'brand/legacy': 582,
    'about/about-left': 1146, 'about/about-right': 1128,
    'programs/mca': 954, 'programs/mba': 1112, 'programs/bba': 894, 'programs/bca': 942, 'programs/bcom': 1064,
    'programs/cta': 1136,
    'learn/learn-your-way': 1018, 'learn/live-classes': 1014, 'learn/recorded-lectures': 962,
    'learn/mobile-learning': 908, 'learn/assignments': 958, 'learn/projects': 1022,
    'learn/discussion-forums': 904, 'learn/online-exams': 878,
    'why/why-bg': 854,
    'career/handshake': 798,
    'partners/ey': 898, 'partners/anz': 862, 'partners/capgemini': 946, 'partners/csb': 874,
    'partners/cub': 888, 'partners/deloitte': 788, 'partners/dxc': 882, 'partners/aditya-birla': 936,
    'awards/iirf': 834, 'awards/careers360': 822, 'awards/naac': 830, 'awards/edu-excellence': 818,
    'awards/ksurf': 814, 'awards/siliconindia': 826, 'awards/emerging': 810,
    'faculty/prashant-raman': 778,
    'testimonials/featured': 950, 'testimonials/chinmaya': 758, 'testimonials/rahul': 978,
    'testimonials/priya': 986, 'testimonials/arjun': 974, 'testimonials/neha': 970,
    'testimonials/vivek': 982, 'testimonials/rohan': 982, 'testimonials/anjaly': 966,
    'blog/blog-1': 1026, 'blog/blog-2': 748, 'blog/blog-3': 744,
    'faq/cta': 794,
}
LOGO_PNG = {'brand/', 'partners/', 'awards/'}
for name, x in photos.items():
    im = Image.open(os.path.join(RAW, f'{x}.png'))
    path = os.path.join(OUT, 'images', name)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    if any(name.startswith(k) for k in LOGO_PNG):
        im.save(path + '.png', optimize=True)
    else:
        im.convert('RGB').save(path + '.webp', quality=82, method=5)

# ---- icons: composite raster fragments inside a window onto transparent canvas ----
blocks = [b for b in p.get_text('dict')['blocks'] if b['type'] == 1]
icons = {
    'strip-degree': (770, 1015, 865, 1095), 'strip-curriculum': (1050, 1015, 1145, 1095),
    'strip-online': (1345, 1015, 1440, 1095), 'strip-recognized': (1640, 1015, 1745, 1095),
    'about-ugc': (720, 1720, 775, 1780), 'about-industry': (1038, 1720, 1090, 1782),
    'about-alumni': (716, 1848, 776, 1908), 'about-flexible': (1033, 1848, 1095, 1910),
    'mini-online': (414, 2500, 444, 2530), 'mini-years': (414, 2530, 444, 2559), 'mini-fee': (414, 2559, 444, 2589),
    'why-flexible': (1083, 4370, 1140, 4432), 'why-faculty': (1425, 4368, 1473, 4425),
    'why-placement': (1085, 4492, 1136, 4548), 'why-digital': (1425, 4499, 1476, 4549),
    'career-1': (110, 5226, 165, 5284), 'career-2': (112, 5340, 160, 5392), 'career-3': (112, 5450, 162, 5500),
    'career-4': (110, 5557, 162, 5612), 'career-5': (112, 5666, 162, 5724), 'career-detail': (496, 5248, 548, 5302),
    'check': (498, 5558, 521, 5581),
    'tile-learn': (1280, 3615, 1345, 3675), 'tile-live': (1570, 3615, 1630, 3668),
    'tile-assign': (106, 3930, 170, 3995), 'tile-projects': (400, 3930, 464, 3995),
    'tile-forums': (694, 3930, 758, 3995), 'tile-exams': (988, 3930, 1052, 3995),
    'tile-mobile': (1280, 3930, 1344, 3995), 'tile-recorded': (1570, 3930, 1634, 3995),
    'badge-menu-search': (1000, 20, 1060, 80),
    'enquire-icons': (1900, 500, 1920, 700),
}
os.makedirs(os.path.join(OUT, 'icons'), exist_ok=True)
S = 2
for name, (x0, y0, x1, y1) in icons.items():
    canvas = Image.new('RGBA', ((x1 - x0) * S, (y1 - y0) * S), (0, 0, 0, 0))
    n = 0
    for b in blocks:
        bx0, by0, bx1, by1 = b['bbox']
        if (bx1 - bx0) > 260 or (by1 - by0) > 260:
            continue
        cx, cy = (bx0 + bx1) / 2, (by0 + by1) / 2
        if not (x0 <= cx <= x1 and y0 <= cy <= y1):
            continue
        try:
            fr = Image.open(io.BytesIO(b['image'])).convert('RGBA')
        except Exception:
            continue
        w = max(1, round((bx1 - bx0) * S)); h = max(1, round((by1 - by0) * S))
        fr = fr.resize((w, h), Image.LANCZOS)
        canvas.alpha_composite(fr, (max(0, round((bx0 - x0) * S)), max(0, round((by0 - y0) * S))))
        n += 1
    bbox = canvas.getbbox()
    if bbox:
        canvas = canvas.crop(bbox)
    canvas.save(os.path.join(OUT, 'icons', name + '.png'))
    print(name, n, canvas.size)
