import type { HTMLAttributes } from 'react';
import s from './shadcn.module.scss';

// shadcn/ui Card API (Card, CardContent, CardFooter) on the site's SCSS tokens
const cx = (...c: (string | false | undefined)[]) => c.filter(Boolean).join(' ');
type P = HTMLAttributes<HTMLDivElement>;

export const Card = ({ className, ...p }: P) => <div className={cx(s.card, className)} {...p} />;
export const CardContent = ({ className, ...p }: P) => <div className={cx(s.content, className)} {...p} />;
export const CardFooter = ({ className, ...p }: P) => <div className={cx(s.footer, className)} {...p} />;
