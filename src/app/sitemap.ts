import type { MetadataRoute } from 'next';
import { allPageSegments, BLOGS_PER_PAGE, loadBlogs } from '@/lib/content';

const base = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dsuonline.com').replace(/\/$/, '');

/** Served at /sitemap.xml: every route the app pre-renders (pages, blog index + pages, posts). */
export default function sitemap(): MetadataRoute.Sitemap {
  const blogs = loadBlogs();
  const pageCount = Math.max(1, Math.ceil(blogs.length / BLOGS_PER_PAGE));
  const paths = [
    '/',
    '/international-learners',
    '/sitemap',
    ...allPageSegments().map((seg) => '/' + seg.map(encodeURIComponent).join('/')),
    '/resources/blogs',
    ...Array.from({ length: pageCount - 1 }, (_, i) => `/resources/blogs/page/${i + 2}`),
    ...blogs.map((b) => `/resources/blogs/${encodeURIComponent(b.slug)}`),
  ];
  return [...new Set(paths)].map((p) => ({ url: base + p }));
}
