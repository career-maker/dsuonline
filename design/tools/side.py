import os, sys, json
import numpy as np
from PIL import Image
src = open(os.path.join(os.path.dirname(__file__), 'icons2.py')).read().split("strip = {")[0]
exec(src)
bg = (246, 184, 0)
im = render((1866, 735, 1920, 890))
print(im.getpixel((5, 5)))
a = np.asarray(im).astype(float)
# dark glyphs on yellow: alpha from darkness
lum = a.mean(axis=2)
alpha = np.clip((125 - lum) / 85, 0, 1)
out = np.dstack([np.full(lum.shape, 25), np.full(lum.shape, 25), np.full(lum.shape, 25), alpha * 255]).astype('uint8')
res = Image.fromarray(out, 'RGBA')
res.save(os.environ['TEMP'] + r'\claude\D--iss-dsu-online\ff93512b-5f7e-4188-abe6-eea922d18bff\scratchpad\side_all.png')
im.save(os.environ['TEMP'] + r'\claude\D--iss-dsu-online\ff93512b-5f7e-4188-abe6-eea922d18bff\scratchpad\side_raw.png')
print(im.size)
