"""Remap ad-hoc font-size declarations in SCSS to the site type scale (--t-* vars in globals.scss).

Each declaration is bucketed by its design size: the 1920-design value for u()/px()/fs()/clamp(u)
forms, the plain px value for fixed sizes (those mostly live in phone/tablet media queries).
Skipped: lines marked `type:keep`, em/rem/inherit, svh-fitted hero text, display sizes (>36 design px),
tiny sizes (<11px) and excluded files. Run with --dry to only print the plan.
"""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parent.parent / 'src'
EXCLUDE = {'Hero.module.scss', 'ProgramHero.module.scss', 'Preloader.module.scss', 'SideTabs.module.scss',
           'Header.module.scss', 'NavProgress.module.scss', '_mixins.scss', '_tokens.scss', 'globals.scss'}

# (upper bound exclusive, token) for 1920-design values and for fixed px values
DESIGN = [(11, None), (14.5, 'xs'), (17, 'sm'), (19, 'body'), (21, 'lead'), (23, 'h4'), (28, 'h3'), (37, 'h3l')]
FIXED = [(11, None), (13, 'xs'), (14.5, 'sm'), (16, 'body'), (17.5, 'lead'), (19.5, 'h4'), (23, 'h3'), (31, 'h3l')]


def bucket(v, table):
    for hi, tok in table:
        if v < hi:
            return tok
    return None


def classify(val):
    v = val.replace(' ', '')
    if any(x in v for x in ('svh', 'em', 'inherit', 'var(--t-')):
        return None
    m = (re.fullmatch(r'(?:u|px)\(([\d.]+)\)', v) or re.fullmatch(r'fs\(([\d.]+),[\d.]+px\)', v)
         or re.fullmatch(r'clamp\([\d.]+px,#\{u\(([\d.]+)\)\},[\d.]+px\)', v)
         or re.fullmatch(r'max\([\d.]+px,calc\(var\(--u\)\*([\d.]+)\)\)', v))
    if m:
        return bucket(float(m.group(1)), DESIGN)
    m = re.fullmatch(r'clamp\([\d.]+px,[\d.]+vw,([\d.]+)px\)', v)
    if m:
        return bucket(float(m.group(1)), DESIGN)
    m = re.fullmatch(r'([\d.]+)px', v)
    if m:
        return bucket(float(m.group(1)), FIXED)
    return None


def main(dry):
    total = 0
    for f in sorted(ROOT.rglob('*.scss')):
        if f.name in EXCLUDE:
            continue
        lines = f.read_text(encoding='utf-8').split('\n')
        n = 0
        for i, ln in enumerate(lines):
            m = re.match(r'^(\s*font-size:\s*)([^;]+?)(\s*!important)?;(.*)$', ln)
            if not m or 'type:keep' in ln:
                continue
            tok = classify(m.group(2))
            if not tok:
                continue
            lines[i] = f'{m.group(1)}var(--t-{tok}){m.group(3) or ""};{m.group(4)}'
            if dry:
                print(f'{f.relative_to(ROOT)}:{i + 1}  {m.group(2)} -> {tok}')
            n += 1
        if n and not dry:
            f.write_text('\n'.join(lines), encoding='utf-8')
        total += n
    print('remapped', total)


if __name__ == '__main__':
    main('--dry' in sys.argv)
