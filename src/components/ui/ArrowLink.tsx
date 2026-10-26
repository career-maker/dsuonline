import Link from 'next/link';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { DotsIcon } from './icons';
import s from './ArrowLink.module.scss';

type Variant = 'solid' | 'dark' | 'outline' | 'ghost';

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  download?: string | boolean;
} & ({ href: string; external?: boolean; onClick?: never; type?: never } | ({ href?: undefined; external?: never } & ButtonHTMLAttributes<HTMLButtonElement>));

/** The design's CTA: label + small dotted glyph. Renders a link when `href` is given, otherwise a button. */
export function ArrowLink(props: Props) {
  const { children, variant = 'solid', className } = props;
  const cls = `${s.btn} ${s[variant]} ${className ?? ''}`;
  const inner = (
    <>
      <span>{children}</span>
      <DotsIcon className={s.dots} />
    </>
  );
  if (props.href === undefined) {
    const rest = { ...props } as Record<string, unknown>;
    for (const k of ['variant', 'className', 'children', 'href', 'external', 'download']) delete rest[k];
    return (
      <button className={cls} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
        {inner}
      </button>
    );
  }
  if (props.download) {
    return (
      <a
        href={props.href}
        download={props.download === true ? '' : props.download}
        className={cls}
      >
        {inner}
      </a>
    );
  }
  return props.external ? (
    <a href={props.href} className={cls} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link href={props.href} className={cls}>
      {inner}
    </Link>
  );
}
