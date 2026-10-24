import sys, os
from PIL import Image
sp = os.environ['TEMP'] + r'\claude\D--iss-dsu-online\ff93512b-5f7e-4188-abe6-eea922d18bff\scratchpad'
which, x0, y0, x1, y1 = sys.argv[1], *map(int, sys.argv[2:6])
scale = float(sys.argv[6]) if len(sys.argv) > 6 else 1
src = sp + (r'\full.png' if which == 'd' else r'\site_1920.png')
im = Image.open(src).convert('RGB').crop((x0, y0, x1, y1))
if scale != 1:
    im = im.resize((int(im.width * scale), int(im.height * scale)), Image.LANCZOS)
im.save(sp + r'\crop_%s.png' % which)
