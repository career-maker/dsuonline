from playwright.sync_api import sync_playwright
import sys, json
sel=sys.argv[1:]
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':1920,'height':1080}); import os; pg.goto(os.environ.get('URL','http://localhost:3112/'),wait_until='networkidle')
    for s in sel:
        r=pg.evaluate("""(s)=>[...document.querySelectorAll(s)].slice(0,12).map(e=>{const b=e.getBoundingClientRect();return [Math.round(b.left),Math.round(b.top+scrollY),Math.round(b.width),Math.round(b.height),(e.textContent||'').trim().slice(0,28)]})""",s)
        print(s); [print('  ',x) for x in r]
    b.close()
