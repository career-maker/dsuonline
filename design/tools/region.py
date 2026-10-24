import json,sys
y0,y1=float(sys.argv[1]),float(sys.argv[2])
print('--TEXT'); 
for l in open('text-layout-v3.txt',encoding='utf-8'):
    try:
        y=float(l.split()[0])
    except: continue
    if y0<=y<=y1: print(l.rstrip()[:110])
print('--DRAW')
for d in json.load(open('drawings-v3.json')):
    if y0<=d['y0']<=y1 and (d['x1']-d['x0'])>8:
        f=d['fill'];s=d['stroke']
        hx=lambda c:'#'+''.join(f'{round(v*255):02x}' for v in c) if c else '-'
        print(f"{d['x0']:.1f},{d['y0']:.1f} {d['x1']-d['x0']:.1f}x{d['y1']-d['y0']:.1f} fill{hx(f)}@{d['fo']} stroke{hx(s)} {d['sw']}")
print('--IMG')
for i in json.load(open('images-v3.json')):
    if y0<=i['y']<=y1 or y0<=i['y']+i['dh']<=y1: print(i)
