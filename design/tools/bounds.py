from playwright.sync_api import sync_playwright
import sys
w=int(sys.argv[1]) if len(sys.argv)>1 else 1920
with sync_playwright() as p:
    b=p.chromium.launch(); pg=b.new_page(viewport={'width':w,'height':1080}); import os; pg.goto(os.environ.get('URL','http://localhost:3112/'),wait_until='networkidle')
    r=pg.evaluate("""()=>[...document.querySelectorAll('main > section, footer')].map(e=>{const b=e.getBoundingClientRect();return [e.className.split(' ')[0].replace(/_/g,' ').slice(0,28), Math.round(b.top+scrollY), Math.round(b.bottom+scrollY)]})""")
    for x in r: print(x)
    b.close()
