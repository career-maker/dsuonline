import fitz, json, sys, re
from playwright.sync_api import sync_playwright

d = fitz.open(r'D:\iss\dsu online\design\Index.pdf')
p = d[0]
lines = []
for b in p.get_text('dict')['blocks']:
    for l in b.get('lines', []):
        t = ''.join(s['text'] for s in l['spans']).strip()
        if len(t) < 2:
            continue
        x0, y0, x1, y1 = l['bbox']
        lines.append(dict(t=t, x0=x0, y0=y0, x1=x1, y1=y1, sz=round(l['spans'][0]['size']), base=l['spans'][0]['origin'][1], ox=l['spans'][0]['origin'][0]))

JS = """
(lines) => {
  const norm = s => s.replace(/\\s+/g,' ').trim().toLowerCase();
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  const nodes = [];
  while (walker.nextNode()) { const n = walker.currentNode; if (norm(n.textContent).length) nodes.push(n); }
  const out = [];
  for (const L of lines) {
    const key = norm(L.t).slice(0, 22);
    const full = norm(L.t);
    let hit = null;
    for (const n of nodes) {
      const tc = n.textContent;
      const lc = tc.toLowerCase().replace(/\\s+/g,' ');
      const i = lc.indexOf(key);
      if (i < 0) continue;
      // map index back to original (collapse whitespace differences ignored: use direct search on lowercase original)
      const j = tc.toLowerCase().indexOf(key.split(' ')[0]);
      const r = document.createRange();
      let start = tc.toLowerCase().indexOf(key);
      if (start < 0) start = j;
      if (start < 0) continue;
      r.setStart(n, start); r.setEnd(n, Math.min(tc.length, start + key.length));
      const rects = r.getClientRects();
      if (!rects.length) continue;
      const b = rects[0];
      const el = n.parentElement;
      const cs = getComputedStyle(el);
      if (b.width === 0) continue;
      // full-line width if text fits one rect
      let w = null;
      const r2 = document.createRange(); r2.setStart(n, start); r2.setEnd(n, Math.min(tc.length, start + full.length));
      const rr = r2.getClientRects();
      if (rr.length === 1) w = rr[0].width;
      hit = { x: b.left, cy: b.bottom - 0.2441*parseFloat(cs.fontSize) + scrollY, w, fs: parseFloat(cs.fontSize), fw: cs.fontWeight, ls: cs.letterSpacing };
      // prefer a hit whose y is close to the design y
      if (Math.abs(hit.cy - L.base) < 120) break;
    }
    out.push({ t: L.t, hit });
  }
  return out;
}
"""

with sync_playwright() as pw:
    b = pw.chromium.launch()
    pg = b.new_page(viewport={'width': 1920, 'height': 1080})
    import os; pg.goto(os.environ.get('URL','http://localhost:3112/'), wait_until='networkidle')
    pg.add_style_tag(content='*{animation:none!important;transition:none!important}')
    for y in range(0, 12000, 700):
        pg.evaluate(f'window.scrollTo(0,{y})'); pg.wait_for_timeout(80)
    pg.evaluate('window.scrollTo(0,0)')
    pg.wait_for_timeout(500)
    res = pg.evaluate(JS, lines)
    b.close()

rows = []
miss = []
for L, R in zip(lines, res):
    h = R['hit']
    if not h:
        miss.append(L['t'][:40]); continue
    dcy = L['base']
    dx = h['x'] - L['ox']
    dy = h['cy'] - dcy
    dw = (h['w'] - (L['x1'] - L['x0'])) if h['w'] else None
    rows.append(dict(t=L['t'][:34], y=round(L['base']), sz=L['sz'], fs=h['fs'], fw=h['fw'], dx=round(dx, 1), dy=round(dy, 1), dw=None if dw is None else round(dw, 1), ox=L['ox'], x1=L['x1'], hx=h['x'], hcy=h['cy'], hw=h['w']))
json.dump(rows, open(sys.argv[1] if len(sys.argv) > 1 else 'diff.json', 'w'))
print('matched', len(rows), 'missed', len(miss))
print('MISS:', miss[:60])
