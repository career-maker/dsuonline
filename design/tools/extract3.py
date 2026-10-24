import fitz, os, json
d = fitz.open(r'D:\iss\dsu online\design\Index.pdf'); p = d[0]
out = r'D:\iss\dsu online\design\raw3'; os.makedirs(out, exist_ok=True)
info = []
seen = set()
for im in p.get_image_info(xrefs=True):
    x = im['xref']; t = im['transform']
    if x == 0 or (im['width'] == 1443 and im['height'] == 8192): continue
    info.append(dict(xref=x, w=im['width'], h=im['height'], x=round(t[4],1), y=round(t[5],1), dw=round(t[0],1), dh=round(t[3],1)))
    if x in seen or im['width'] < 100: continue
    seen.add(x)
    try:
        pm = fitz.Pixmap(d, x); inf = d.extract_image(x); sm = inf.get('smask')
        if sm:
            mask = fitz.Pixmap(d, sm)
            if pm.n - pm.alpha >= 4: pm = fitz.Pixmap(fitz.csRGB, pm)
            pm = fitz.Pixmap(pm, mask)
        elif pm.n - pm.alpha >= 4: pm = fitz.Pixmap(fitz.csRGB, pm)
        pm.save(os.path.join(out, f'{x}.png'))
    except Exception as e: print('ERR', x, e, flush=True)
json.dump(info, open(r'D:\iss\dsu online\design\images-v3.json', 'w'))
dr = []
for g in p.get_drawings():
    r = g['rect']
    if r.width < 3 and r.height < 3: continue
    dr.append(dict(x0=round(r.x0,1), y0=round(r.y0,1), x1=round(r.x1,1), y1=round(r.y1,1), fill=g.get('fill'), fo=g.get('fill_opacity'), stroke=g.get('color'), sw=g.get('width'), so=g.get('stroke_opacity')))
json.dump(dr, open(r'D:\iss\dsu online\design\drawings-v3.json', 'w'))
print('done', len(info), len(dr), flush=True)
