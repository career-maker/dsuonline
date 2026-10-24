import fitz
from PIL import Image
d=fitz.open(r'D:\iss\dsu online\design\Index.pdf');p=d[0]
def px(x,y):
    pm=p.get_pixmap(clip=fitz.Rect(x,y,x+1,y+1),matrix=fitz.Matrix(1,1),alpha=False)
    return '#%02x%02x%02x'%tuple(pm.samples[:3])
pts={'topbar l':(10,20),'topbar mid':(960,20),'topbar r':(1900,20),'apply btn':(125,880),'apply btn r':(190,880),'explore btn':(260,880),'know more':(750,1985),'strip bg':(30,1100),'about bg':(30,1500),'programs bg':(30,2300),'career bg':(30,5200),'dark bg':(30,6300),'testi bg':(30,7300),'faq bg':(30,9300),'footer bg':(30,10100),'footer card':(110,10400),'footer bar':(30,10860),'tag':(150,7456),'badge bg':(1000,7620),'sidebar enq':(1910,520),'sidebar apply':(1910,700),'sidebar facts':(1910,820),'chip':(130,2700),'card ctrl':(1000,4400)}
for k,v in pts.items(): print(k,v,px(*v))
