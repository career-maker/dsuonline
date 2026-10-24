import fitz, os
d = fitz.open(r'D:\iss\dsu online\design\Index.pdf')
p = d[0]
out = r'D:\iss\dsu online\design\raw'
os.makedirs(out, exist_ok=True)
seen = set()
for im in p.get_image_info(xrefs=True):
    x = im['xref']
    if not x or x in seen or im['width'] < 100:
        continue
    seen.add(x)
    try:
        pm = fitz.Pixmap(d, x)
        info = d.extract_image(x)
        sm = info.get('smask')
        if sm:
            mask = fitz.Pixmap(d, sm)
            if pm.n - pm.alpha >= 4:
                pm = fitz.Pixmap(fitz.csRGB, pm)
            pm = fitz.Pixmap(pm, mask)
        elif pm.n - pm.alpha >= 4:
            pm = fitz.Pixmap(fitz.csRGB, pm)
        pm.save(os.path.join(out, f'{x}.png'))
        print(x, pm.width, pm.height, pm.alpha)
    except Exception as e:
        print('ERR', x, e)
