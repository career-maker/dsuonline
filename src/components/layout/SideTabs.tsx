'use client';

import Image from 'next/image';
import { site } from '@/data/site';
import { useEnquiry } from './EnquiryProvider';
import s from './SideTabs.module.scss';

export function SideTabs() {
  const { open } = useEnquiry();
  return (
    <aside className={s.tabs} aria-label="Quick actions">
      <button type="button" className={`${s.tab} ${s.enquire}`} onClick={open}>
        <span>Enquire Now</span>
      </button>
      <a href={site.apply} className={`${s.tab} ${s.apply}`} target="_blank" rel="noopener noreferrer">
        <span>Apply Now</span>
      </a>
      <a href={`tel:${site.phone}`} className={`${s.ico} ${s.call}`} aria-label="Call us">
        <Image src="/icons/side-call.png" alt="" width={50} height={50} />
      </a>
      <a href={`mailto:${site.admissionsEmail}`} className={`${s.ico} ${s.mail}`} aria-label="Email admissions">
        <Image src="/icons/side-mail.png" alt="" width={50} height={50} />
      </a>
      <a href={`https://wa.me/${site.phone.replace('+', '')}`} className={`${s.ico} ${s.wa}`} aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
        <Image src="/icons/side-wa.png" alt="" width={50} height={50} />
      </a>
    </aside>
  );
}
