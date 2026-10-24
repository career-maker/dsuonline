# vec2png.py x0 y0 x1 y1 out.png [scale]: re-draw only the PDF vector paths inside the box onto a transparent PNG
import sys, fitz
x0, y0, x1, y1 = map(float, sys.argv[1:5]); out = sys.argv[5]; sc = float(sys.argv[6]) if len(sys.argv) > 6 else 4
src = fitz.open(r'D:\iss\dsu online\design\Index.pdf')[0]
box = fitz.Rect(x0, y0, x1, y1)
doc = fitz.open(); pg = doc.new_page(width=box.width, height=box.height)
n = 0
for d in src.get_drawings():
    r = d['rect']
    if not box.contains(r) or r.width >= box.width * 0.99 and r.height >= box.height * 0.99: continue
    sh = pg.new_shape()
    for it in d['items']:
        k = it[0]; pts = [p - box.tl for p in it[1:] if isinstance(p, fitz.Point)]
        if k == 'l': sh.draw_line(*pts)
        elif k == 'c': sh.draw_bezier(*pts)
        elif k == 're': sh.draw_rect(it[1] - box.tl)
        elif k == 'qu': sh.draw_quad(it[1] - box.tl)
    sh.finish(fill=d.get('fill'), color=d.get('color'), width=d.get('width') or 0,
              fill_opacity=d.get('fill_opacity') or 1, stroke_opacity=d.get('stroke_opacity') or 1,
              even_odd=d.get('even_odd', False), closePath=d.get('closePath', False),
              lineCap=max(d.get('lineCap') or [0]) if isinstance(d.get('lineCap'), (list, tuple)) else (d.get('lineCap') or 0),
              lineJoin=d.get('lineJoin') or 0)
    sh.commit(); n += 1
pg.get_pixmap(matrix=fitz.Matrix(sc, sc), alpha=True).save(out)
print(out, n, 'paths')
