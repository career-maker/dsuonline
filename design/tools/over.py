from playwright.sync_api import sync_playwright
import sys
with sync_playwright() as p:
    b=p.chromium.launch()
    for w in map(int,sys.argv[1:]):
        pg=b.new_page(viewport={'width':w,'height':900}); pg.goto('http://localhost:3111/',wait_until='networkidle')
        r=pg.evaluate("""(w)=>{const out=[];document.querySelectorAll('main *, header *, footer *').forEach(e=>{const b=e.getBoundingClientRect();if(b.right>w+2&&b.width>0){let c=e.closest('[class*=marquee],[class*=viewport],[class*=ticker]');if(!c)out.push([e.tagName,(e.className||'').toString().slice(0,40),Math.round(b.left),Math.round(b.right)])}});return out.slice(0,12)}""",w)
        print(w,len(r)); [print('  ',x) for x in r]
    b.close()
