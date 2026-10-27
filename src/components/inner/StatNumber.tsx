'use client';

import { Counter } from '@/components/ui/Counter';

/** "10,000+" -> animated count to 10,000 with the original prefix/suffix kept verbatim. */
export function StatNumber({ text }: { text: string }) {
  const m = text.match(/^(\D*)([\d,]+)(.*)$/);
  if (!m) return <>{text}</>;
  return (
    <>
      {m[1]}
      <Counter to={Number(m[2].replace(/,/g, ''))} />
      {m[3]}
    </>
  );
}
