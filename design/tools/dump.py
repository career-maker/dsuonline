import fitz
d = fitz.open(r'D:\iss\dsu online\design\Index.pdf')
p = d[0]
out = []
for b in p.get_text('dict')['blocks']:
    for l in b.get('lines', []):
        t = ''.join(s['text'] for s in l['spans'])
        if t.strip():
            s = l['spans'][0]
            bb = [round(x) for x in l['bbox']]
            out.append((bb[1], bb[0], f"{bb[0]:5} {bb[1]:5} {bb[2]:5} {bb[3]:5} sz{s['size']:.0f} | {t}"))
out.sort()
open(r'D:\iss\dsu online\design\text-layout.txt', 'w', encoding='utf-8').write('\n'.join(o[2] for o in out))
print(len(out))
