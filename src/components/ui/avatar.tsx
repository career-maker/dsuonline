import Image from 'next/image';
import type { HTMLAttributes } from 'react';
import s from './shadcn.module.scss';

// shadcn/ui Avatar API (Avatar, AvatarImage, AvatarFallback) on the site's SCSS tokens
export const Avatar = ({ className, ...p }: HTMLAttributes<HTMLSpanElement>) => <span className={[s.avatar, className].filter(Boolean).join(' ')} {...p} />;
export const AvatarImage = ({ src, alt, sizes = '48px', style }: { src: string; alt: string; sizes?: string; style?: React.CSSProperties }) => (
  <Image src={src} alt={alt} fill sizes={sizes} style={{ objectFit: 'cover', objectPosition: '50% 18%', ...style }} />
);
export const AvatarFallback = ({ children }: { children: React.ReactNode }) => <span className={s.fallback}>{children}</span>;
