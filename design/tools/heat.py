import os, sys
import numpy as np
from PIL import Image, ImageFilter
sp = os.environ['TEMP'] + r'\claude\D--iss-dsu-online\ff93512b-5f7e-4188-abe6-eea922d18bff\scratchpad'
D = Image.open(sp + r'\full.png').convert('L')
M = Image.open(sp + r'\site_1920.png').convert('L')
h = min(D.height, M.height)
D = D.crop((0, 0, 1920, h)).filter(ImageFilter.GaussianBlur(1.2)); M = M.crop((0, 0, 1920, h)).filter(ImageFilter.GaussianBlur(1.2))
a = np.abs(np.asarray(D).astype(int) - np.asarray(M).astype(int))
cell = 80
rows = []
for y in range(0, h - cell, cell):
    for x in range(0, 1920 - cell, cell):
        rows.append((a[y:y+cell, x:x+cell].mean(), x, y))
rows.sort(reverse=True)
for s, x, y in rows[:40]:
    print(f'{s:5.1f} x{x:4} y{y:5}')
