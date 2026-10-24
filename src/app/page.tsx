import { About } from '@/components/sections/home/About';
import { Blogs } from '@/components/sections/home/Blogs';
import { Careers } from '@/components/sections/home/Careers';
import { FacultyArticles } from '@/components/sections/home/FacultyArticles';
import { Faq } from '@/components/sections/home/Faq';
import { Hero } from '@/components/sections/home/Hero';
import { Learning } from '@/components/sections/home/Learning';
import { ProgramsBand } from '@/components/sections/home/ProgramsBand';
import { Recognitions } from '@/components/sections/home/Recognitions';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { WhyChoose } from '@/components/sections/home/WhyChoose';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Testimonials />
      <About />
      <ProgramsBand />
      <Learning />
      <WhyChoose />
      <Careers />
      <FacultyArticles />
      <Recognitions />
      <Faq />
      <Blogs />
    </>
  );
}
