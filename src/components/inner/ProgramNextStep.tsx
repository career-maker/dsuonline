import { ArrowLink } from '@/components/ui/ArrowLink';
import { site } from '@/data/site';
import s from './ProgramNextStep.module.scss';

/** closing banner under the FAQ: one line of copy and the Apply Now button */
export function ProgramNextStep({ name, dual }: { name: string; dual: boolean }) {
  return (
    <div className={s.banner}>
      <div>
        <h2>Take the next step with DSU Online.</h2>
        <p>
          Explore the programme and begin your Online {name} admission journey{dual ? ' and choose your dual specialisation' : ''}.
        </p>
      </div>
      <ArrowLink href={site.apply} external variant="outline">
        Apply Now
      </ArrowLink>
    </div>
  );
}
