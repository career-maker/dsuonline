import os, sys
from playwright.sync_api import sync_playwright
from PIL import Image
sp = os.environ['TEMP'] + r'\claude\D--iss-dsu-online\ff93512b-5f7e-4188-abe6-eea922d18bff\scratchpad'
w = int(sys.argv[1]) if len(sys.argv) > 1 else 1920
url = sys.argv[2] if len(sys.argv) > 2 else 'http://localhost:3111/'
with sync_playwright() as p:
    b = p.chromium.launch()
    pg = b.new_page(viewport={'width': w, 'height': 1080}, reduced_motion='reduce')
    msgs = []
    pg.on('console', lambda m: msgs.append(f'{m.type}: {m.text}') if m.type in ('error', 'warning') else None)
    pg.on('requestfailed', lambda r: msgs.append('REQFAIL ' + r.url))
    pg.on('response', lambda r: msgs.append(f'HTTP {r.status} {r.url}') if r.status >= 400 else None)
    pg.goto(url, wait_until='networkidle')
    for y in range(0, 26000, 600):
        pg.evaluate(f'window.scrollTo(0,{y})'); pg.wait_for_timeout(120)
    pg.evaluate('window.scrollTo(0,0)')
    pg.add_style_tag(content='*{animation:none!important;transition:none!important}')
    pg.wait_for_timeout(800)
    h = pg.evaluate('document.documentElement.scrollHeight')
    sw = pg.evaluate('document.documentElement.scrollWidth')
    print('height', h, 'scrollWidth', sw)
    pg.screenshot(path=f'{sp}\\site_{w}.png', full_page=True)
    for m in msgs[:20]:
        print(m)
    b.close()
im = Image.open(f'{sp}\\site_{w}.png')
H = 1000
i = 0
y = 0
while y < im.height:
    c = im.crop((0, y, im.width, min(y + H, im.height)))
    c = c.resize((int(c.width * 0.7 * 1920 / im.width) if False else int(c.width * 0.7), int(c.height * 0.7)))
    c.save(f'{sp}\\t{i:02d}.png')
    i += 1
    y += H
print(i)
