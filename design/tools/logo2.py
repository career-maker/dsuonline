import os
src = open(os.path.join(os.path.dirname(__file__), 'icons2.py')).read().split("strip = {")[0]
exec(src)
im = render((90, 9790, 520, 9890))
a = color_to_alpha(im, (255, 247, 235))
a = a.crop(a.getbbox())
a.save(r'D:\iss\dsu online\public\images\brand\logo-dark.png')
print(a.size)
