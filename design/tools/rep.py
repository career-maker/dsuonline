import json,sys
lo=float(sys.argv[1]) if len(sys.argv)>1 else 2.5
y0=int(sys.argv[2]) if len(sys.argv)>2 else 0
y1=int(sys.argv[3]) if len(sys.argv)>3 else 99999
r=json.load(open('diff.json'))
bad=[x for x in r if (abs(x['dy'])>lo or abs(x['dx'])>lo+1 or abs(x['fs']-x['sz'])>0.6) and abs(x['dx'])<300 and abs(x['dy'])<60 and y0<=x['y']<=y1]
print(len(bad),'of',len(r))
for x in sorted(bad,key=lambda x:x['y']):
    print(f"{x['y']:5} {x['t']:26} dx{x['dx']:+} dy{x['dy']:+} dw{x['dw']}")
