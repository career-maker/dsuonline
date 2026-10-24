import os, sys
from PIL import Image
sp = os.environ['TEMP'] + r'\claude\D--iss-dsu-online\ff93512b-5f7e-4188-abe6-eea922d18bff\scratchpad'
y0, y1 = int(sys.argv[1]), int(sys.argv[2])
off = int(sys.argv[3]) if len(sys.argv) > 3 else 0   # mine = design + off
s = float(sys.argv[4]) if len(sys.argv) > 4 else 0.6
x0, x1 = (int(sys.argv[5]), int(sys.argv[6])) if len(sys.argv) > 6 else (0, 1920)
d = Image.open(sp + r'\full.png').convert('RGB').crop((x0, y0, x1, y1))
m = Image.open(sp + r'\site_1920.png').convert('RGB').crop((x0, y0 + off, x1, y1 + off))
w, h = d.size
out = Image.new('RGB', (w, h * 2 + 6), (255, 0, 255))
out.paste(d, (0, 0)); out.paste(m, (0, h + 6))
out = out.resize((int(out.width * s), int(out.height * s)), Image.LANCZOS)
out.save(sp + r'\cmp.png')
