import Link from 'next/link';
import s from './status.module.scss';

export default function NotFound() {
  return (
    <section className={s.status}>
      <p className={s.code}>404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has moved.</p>
      <Link href="/" className={s.btn}>
        Back to home
      </Link>
    </section>
  );
}
