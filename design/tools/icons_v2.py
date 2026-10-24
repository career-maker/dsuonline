import fitz, os, json
import numpy as np
from PIL import Image
OUT = r'D:\iss\dsu online\public\icons'
d = fitz.open(r'D:\iss\dsu online\design\Index.pdf'); p = d[0]
Z = 4
def render(r):
    pm = p.get_pixmap(clip=fitz.Rect(*r), matrix=fitz.Matrix(Z, Z), alpha=False)
    return Image.frombytes('RGB', (pm.width, pm.height), pm.samples)
def color_to_alpha(im, bg):
    a = np.asarray(im).astype(float); b = np.array(bg, float); al = np.zeros(a.shape[:2])
    for c in range(3):
        away = np.where(a[..., c] < b[c], (b[c]-a[..., c])/max(b[c],1), (a[..., c]-b[c])/max(255-b[c],1))
        al = np.maximum(al, away)
    al = np.clip(al, 0, 1)
    col = np.where(al[..., None] > .02, (a - b*(1-al[..., None]))/np.maximum(al[..., None], .02), 0)
    return Image.fromarray(np.dstack([np.clip(col,0,255), al*255]).astype('uint8'), 'RGBA')
def red_key(im):
    a = np.asarray(im).astype(float)
    red = a[..., 0] - (a[..., 1] + a[..., 2]) / 2
    al = np.clip((red - 45) / 90, 0, 1)
    out = np.dstack([np.full(red.shape, 200), np.full(red.shape, 15), np.full(red.shape, 45), al*255])
    return Image.fromarray(out.astype('uint8'), 'RGBA')
def white_key(im, lo=170, hi=235):
    a = np.asarray(im).astype(float); m = a.min(axis=2)
    al = np.clip((m-lo)/(hi-lo), 0, 1)
    return Image.fromarray(np.dstack([np.full(m.shape,255)]*3+[al*255]).astype('uint8'), 'RGBA')
sizes = {}
def save(name, im):
    bb = im.getbbox()
    if bb: im = im.crop(bb)
    im.save(os.path.join(OUT, name + '.png')); sizes[name] = [round(im.width/4,1), round(im.height/4,1)]
    print(name, im.size)
W = (255,255,255)
dk = {  # window, bg
 'strip-degree': ((770,1015,865,1095),(250,250,250)), 'strip-curriculum': ((1050,1015,1145,1095),(250,250,250)),
 'strip-online': ((1345,1015,1440,1095),(250,250,250)), 'strip-recognized': ((1640,1015,1745,1095),(250,250,250)),
 'about-ugc': ((720,1720,775,1780),W), 'about-industry': ((1038,1720,1090,1782),W),
 'about-alumni': ((716,1848,776,1908),W), 'about-flexible': ((1033,1848,1095,1910),W),
 'mini-online': ((414,2500,444,2530),W), 'mini-years': ((414,2530,444,2559),W), 'mini-fee': ((414,2559,444,2589),W),
 'career-2': ((112,5546,160,5598),W), 'career-3': ((112,5656,162,5706),W), 'career-4': ((110,5763,162,5818),W),
 'career-5': ((112,5872,162,5930),W), 'career-detail': ((496,5454,548,5508),W), 'career-1': ((110,5432,165,5490),W),
 'check': ((498,5764,521,5787),W),
}
for n,(r,bg) in dk.items():
    save(n, color_to_alpha(render(r), bg))
for n,r in {'why-chat':(92,4655,146,4720),'why-faculty':(388,4655,440,4720),'why-placement':(92,4795,142,4860),'why-digital':(388,4795,442,4860),
            'out-promo':(1135,4440,1200,4515),'out-switch':(1390,4440,1450,4515),'out-entre':(1640,4440,1700,4515),'out-placed':(1255,4685,1320,4765),'out-salary':(1500,4685,1570,4765)}.items():
    save(n, red_key(render(r)))
for n,r in {'bar-ann':(90,6,120,34),'bar-facts':(1668,6,1698,34),'bar-faq':(1765,6,1792,34)}.items():
    save(n, white_key(render(r), 150, 230))
# white variants for active tab icons
for n in ['career-1','career-2','career-3','career-4','career-5']:
    a = np.asarray(Image.open(os.path.join(OUT,n+'.png'))).copy(); a[...,:3]=255
    Image.fromarray(a).save(os.path.join(OUT,n+'-white.png')); sizes[n+'-white']=sizes[n]
f=r'D:\iss\dsu online\src\data\icon-sizes.ts'
old=json.loads(open(f,encoding='utf-8').read().split('= ',1)[1].rstrip().rstrip(';'))
old.update(sizes)
open(f,'w',encoding='utf-8').write("// generated from design/Index.pdf - natural CSS px size of each icon in public/icons\nexport const iconSize: Record<string, [number, number]> = "+json.dumps(old,indent=2)+";\n")
