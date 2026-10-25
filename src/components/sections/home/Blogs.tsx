import { loadBlogs } from '@/lib/content';
import { BlogSlider, type Slide } from './BlogSlider';
import s from './Blogs.module.scss';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const ord = (d: number) => (d % 10 === 1 && d !== 11 ? 'st' : d % 10 === 2 && d !== 12 ? 'nd' : d % 10 === 3 && d !== 13 ? 'rd' : 'th');

/** Home slider shows the newest posts straight from the blog list (same source as /resources/blogs). */
export function Blogs() {
  const slides: Slide[] = loadBlogs()
    .slice(0, 9)
    .map((b) => {
      const [dd, mm, yy] = b.date.split('/').map(Number); // content dates are DD/MM/YYYY
      return {
        slug: b.slug,
        day: String(dd),
        ord: ord(dd),
        month: `${MONTHS[(mm || 1) - 1]} ${yy}`,
        title: b.title,
        excerpt: b.excerpt,
        image: b.image,
        alt: b.imageAlt,
        w: b.w ?? 1024,
        h: b.h ?? 625,
      };
    });
  return (
    <section className={s.section}>
      <div className={s.inner}>
        <BlogSlider slides={slides} />
      </div>
    </section>
  );
}
