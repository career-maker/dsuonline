import os, json
import numpy as np
from PIL import Image
OUT = r'D:\iss\dsu online\public\icons'
f = r'D:\iss\dsu online\src\data\icon-sizes.ts'
txt = open(f).read()
sizes = json.loads(txt.split('= ', 1)[1].rstrip().rstrip(';'))
for n in ['career-2', 'career-3', 'career-4', 'career-5', 'career-detail']:
    a = np.asarray(Image.open(f'{OUT}\\{n}.png').convert('RGBA')).copy()
    a[..., :3] = 255
    name = 'career-1-white' if n == 'career-detail' else n + '-white'
    Image.fromarray(a).save(f'{OUT}\\{name}.png')
    sizes[name] = sizes[n]
open(f, 'w').write(txt.split('= ', 1)[0] + '= ' + json.dumps(sizes, indent=2) + ';\n')
print([k for k in sizes if 'white' in k])
