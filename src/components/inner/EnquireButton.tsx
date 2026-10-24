'use client';

import { ArrowLink } from '@/components/ui/ArrowLink';
import { useEnquiry } from '@/components/layout/EnquiryProvider';

export function EnquireButton({ variant = 'dark', children = 'Enquire Now' }: { variant?: 'solid' | 'dark' | 'outline' | 'ghost'; children?: string }) {
  const { open } = useEnquiry();
  return (
    <ArrowLink variant={variant} type="button" onClick={open}>
      {children}
    </ArrowLink>
  );
}
