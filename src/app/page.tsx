import { About } from '@/components/sections/home/About';
import { Blogs } from '@/components/sections/home/Blogs';
import { Careers } from '@/components/sections/home/Careers';
import { FacultyArticles } from '@/components/sections/home/FacultyArticles';
import { Faq } from '@/components/sections/home/Faq';
import { parseFaq } from '@/components/inner/parse';
import { loadPage } from '@/lib/content';
import { Hero } from '@/components/sections/home/Hero';
import { Learning } from '@/components/sections/home/Learning';
import { ProgramsBand } from '@/components/sections/home/ProgramsBand';
import { Recognitions } from '@/components/sections/home/Recognitions';
import { Testimonials } from '@/components/sections/home/Testimonials';
import { WhyChoose } from '@/components/sections/home/WhyChoose';

// every question/answer from the live home page (content/pages/home.json)
const homeFaqs = parseFaq(loadPage(['home'])?.blocks ?? []);

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
      <Faq items={homeFaqs} />
      <Blogs />
    </>
  );
}
