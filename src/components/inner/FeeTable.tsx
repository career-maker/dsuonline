import s from './FeeTable.module.scss';

const dash = (c: string) => (c === String.fromCharCode(0xfffd) ? '–' : c);

/** Fee structure table: titled block, light header with a highlighted Total column, navy "Total Fees" bar. */
export const feeTitle = (head: string[]) => {
  const first = head[0] ?? '';
  return /sem/i.test(first) ? 'Semester-wise Fees' : /year/i.test(first) ? 'Year-wise Fees' : first;
};

export function FeeTable({ rows, bare = false }: { rows: string[][]; bare?: boolean }) {
  const head = rows[0];
  const body = rows.slice(1).filter((r) => r.length >= head.length);
  const sums = rows.slice(1).filter((r) => r.length < head.length);
  const first = head[0] ?? '';
  const title = /sem/i.test(first) ? 'Semester-wise Fees' : /year/i.test(first) ? 'Year-wise Fees' : first;
  const last = head.length - 1;
  return (
    <div className={s.block}>
      {!bare && (
        <h3 className={s.cap}>
          <span>{title}</span>
          <i aria-hidden="true" />
        </h3>
      )}
      <div className={s.card}>
        <table>
          <thead>
            <tr>
              {head.map((h, j) => (
                <th key={j} className={j === last ? s.totalHead : undefined}>
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((r, i) => (
              <tr key={i}>
                {r.map((c, j) => (
                  <td key={j} className={j === last ? s.totalCell : undefined}>
                    {dash(c)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {sums.map((r, i) => (
        <div key={i} className={s.bar}>
          <span>{r[0]}</span>
          <b>{r.slice(1).join(' ')}</b>
        </div>
      ))}
    </div>
  );
}
