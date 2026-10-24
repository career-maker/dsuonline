import os, json, re
from PIL import Image
sp = os.environ['TEMP'] + r'\claude\D--iss-dsu-online\ff93512b-5f7e-4188-abe6-eea922d18bff\scratchpad'
im = Image.open(sp + r'\side_all.png')
OUT = r'D:\iss\dsu online\public\icons'
f = r'D:\iss\dsu online\src\data\icon-sizes.ts'
txt = open(f).read()
sizes = json.loads(txt.split('= ', 1)[1].rstrip().rstrip(';'))
for name, (y0, y1) in {'side-facts': (0, 200), 'side-cert': (215, 405), 'side-faq': (420, 620)}.items():
    c = im.crop((40, y0, 180, y1))
    c = c.crop(c.getbbox())
    c.save(f'{OUT}\\{name}.png')
    sizes[name] = [round(c.width / 4, 1), round(c.height / 4, 1)]
    print(name, c.size)
head = txt.split('= ', 1)[0]
open(f, 'w').write(head + '= ' + json.dumps(sizes, indent=2) + ';\n')
