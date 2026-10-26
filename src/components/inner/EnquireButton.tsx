'use client';

import { ArrowLink } from '@/components/ui/ArrowLink';
import { useEnquiry } from '@/components/layout/EnquiryProvider';

export function EnquireButton({
  variant = 'dark',
  children = 'Enquire Now',
  programme,
  className,
}: {
  variant?: 'solid' | 'dark' | 'outline' | 'ghost';
  children?: string;
  programme?: string;
  className?: string;
}) {
  const { open } = useEnquiry();
  return (
    <ArrowLink variant={variant} type="button" className={className} onClick={() => open(programme)}>
      {children}
    </ArrowLink>
  );
}
