/**
 * Turns the live curriculum tables of a programme page into two clean lists:
 *  - semesters (core courses + credits per semester)
 *  - electives (real elective names, with the courses and the semester they are taken in)
 * Everything is read from the page's own tables; only the elective names are matched against the programme's real specialisation names.
 */
export type CurRow = { sem?: string; code: string; title: string; credits?: string };
export type CurSem = { label: string; rows: CurRow[]; total?: string };
export type CurElective = { name: string; note?: string; rows: CurRow[] };
export type CurData = { sems: CurSem[]; electives: CurElective[]; totalCredits?: string };

const ROMAN = ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII'];
const bad = String.fromCharCode(0xfffd);
const fix = (x: string) => x.split(bad).join('-').trim();
const norm = (x: string) => x.toLowerCase().replace(/[^a-z]/g, '');
const title = (x: string) => x.toLowerCase().replace(/\b\w/g, (m) => m.toUpperCase()).replace(/\bIt\b/g, 'IT').replace(/\bAi\b/g, 'AI').replace(/\bHr\b/g, 'HR');
const semOf = (code: string) => /OL(\d)/i.exec(code)?.[1];
const roman = (n?: string) => (n ? ROMAN[Number(n) - 1] : undefined);

/** BBA / B.Com list one course per specialisation in every elective slot; the letter in the course code says which specialisation */
const LETTERS: Record<string, Record<string, RegExp>> = {
  bba: { D: /digital|market/i, S: /supply/i, A: /analytic/i },
  bcom: { F: /fin/i, S: /supply/i, A: /analytic/i },
};

export function buildCurriculum(tables: string[][][], specNames: string[], code: string): CurData {
  const isCore = (t: string[][]) => /^course code$/i.test(t[0]?.[0] ?? '') && /credits/i.test(t[0]?.[2] ?? '');
  const core = tables.filter(isCore);
  const other = tables.filter((t) => !isCore(t));

  let grand: string | undefined;
  const sems: CurSem[] = core.map((t, i) => {
    let total: string | undefined;
    const rows: CurRow[] = [];
    for (const r of t.slice(1)) {
      if (/^total credits$/i.test(r[0] ?? '')) total = r[1];
      else if (/^(grand total|total program credits)$/i.test(r[0] ?? '')) grand = r[1];
      else if (r.length >= 3) rows.push({ code: fix(r[0]), title: fix(r[1]), credits: r[2] });
    }
    if (!total) {
      const nums = rows.map((x) => Number(x.credits));
      if (nums.length && nums.every((n) => !Number.isNaN(n))) total = String(nums.reduce((a, b) => a + b, 0));
    }
    return { label: `Semester ${ROMAN[i] ?? i + 1}`, rows, total };
  });
  if (!grand) {
    const nums = sems.map((x) => Number(x.total));
    if (nums.length && nums.every((n) => !Number.isNaN(n))) grand = String(nums.reduce((a, b) => a + b, 0));
  }

  const real = (raw: string) => {
    const n = norm(raw.replace(/^elective\s*[-:]\s*/i, '').replace(/\s*\(\w+\)\s*$/, ''));
    return specNames.find((s) => norm(s).includes(n) || n.includes(norm(s)));
  };

  const electives: CurElective[] = [];
  const byLetter = new Map<string, CurRow[]>();
  let headless = 0;
  for (const t of other) {
    const head = t[0] ?? [];
    const body = t.slice(1);
    const rowsOf = (cIdx: number, tIdx: number, cr?: number): CurRow[] =>
      body.filter((r) => r[cIdx]).map((r) => ({ sem: roman(semOf(r[cIdx])) ?? roman(r[0]), code: fix(r[cIdx]), title: fix(r[tIdx]), credits: cr !== undefined ? r[cr] : undefined }));

    if (/^sem$/i.test(head[0] ?? '') && head.length >= 4) {
      const rows = rowsOf(1, 2, 3);
      if (/^course title$/i.test(head[2])) {
        // BBA style: group the rows by specialisation letter
        for (const r of rows) {
          const l = /OL\d([A-Z])/i.exec(r.code)?.[1]?.toUpperCase();
          if (l) byLetter.set(l, [...(byLetter.get(l) ?? []), r]);
        }
      } else {
        const raw = head[2].replace(/^elective\s*[-:]\s*/i, '').replace(/\s*\(\w+\)\s*$/, '');
        electives.push({ name: real(head[2]) ?? title(raw), rows });
      }
    } else if (/^code$/i.test(head[0] ?? '') && /^course title$/i.test(head[1] ?? '')) {
      // B.Com style: no semester / credits columns
      for (const r of rowsOf(0, 1)) {
        const l = /OL\d([A-Z])/i.exec(r.code)?.[1]?.toUpperCase();
        if (l) byLetter.set(l, [...(byLetter.get(l) ?? []), r]);
      }
    } else if (/^code$/i.test(head[0] ?? '')) {
      // BCA style: one table per elective slot ("ELECTIVE - 1"), options listed as courses
      const rows = rowsOf(0, 1);
      electives.push({ name: title(fix(head[1] ?? '').replace(/\s*-\s*/, ' ')), note: rows[0]?.sem ? `Semester ${rows[0].sem}` : undefined, rows });
    } else if (/^course code$/i.test(head[0] ?? '')) {
      // MCA style: slot tables without a heading, numbered in order
      const rows = rowsOf(0, 1);
      electives.push({ name: `Elective ${ROMAN[headless++] ?? headless}`, note: rows[0]?.sem ? `Semester ${rows[0].sem}` : undefined, rows });
    }
  }

  const map = LETTERS[code];
  if (map) {
    for (const [l, rows] of byLetter) {
      const spec = specNames.find((s) => map[l]?.test(s));
      electives.push({ name: spec ?? `Specialisation ${l}`, rows: rows.sort((a, b) => ROMAN.indexOf(a.sem ?? '') - ROMAN.indexOf(b.sem ?? '')) });
    }
  }
  return { sems, electives, totalCredits: grand };
}
