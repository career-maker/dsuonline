import fitz, sys
from PIL import Image
out = sys.argv[1]
d = fitz.open(r'D:\iss\dsu online\design\Index.pdf'); p = d[0]
H = p.rect.height
im = Image.new('RGB', (1920, int(H)))
y = 0
while y < H:
    h = min(600, H - y)
    pm = p.get_pixmap(clip=fitz.Rect(0, y, 1920, y + h), matrix=fitz.Matrix(1, 1), alpha=False)
    im.paste(Image.frombytes('RGB', (pm.width, pm.height), pm.samples), (0, int(y)))
    y += h
    print(int(y), flush=True)
im.save(out)
print('done', flush=True)
