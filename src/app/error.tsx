'use client';

import s from './status.module.scss';

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <section className={s.status}>
      <p className={s.code}>Oops</p>
      <h1>Something went wrong</h1>
      <p>Please try again. If the problem continues, contact our helpdesk.</p>
      <button type="button" className={s.btn} onClick={reset}>
        Try again
      </button>
    </section>
  );
}
