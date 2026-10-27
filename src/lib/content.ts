// Content loader for pages scraped from dsuonline.com (see tools/scrape*.py). Server-only: reads JSON at build time.
import fs from 'node:fs';
import path from 'node:path';

export type Block =
  | { t: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'; x: string }
  | { t: 'p'; x: string }
  | { t: 'q'; x: string }
  | { t: 'ul'; items: string[] }
  | { t: 'img'; src: string; alt: string; w?: number; h?: number }
  | { t: 'table'; rows: string[][] }
  | { t: 'a'; x: string; href: string }
  | { t: 'iframe'; src: string };

export type PageData = { title: string; description: string; url: string; blocks: Block[] };

export type BlogPost = { slug: string; title: string; date: string; excerpt: string; image: string; imageAlt: string; url: string; w?: number; h?: number };

const root = path.join(process.cwd(), 'content');
const readJson = <T,>(rel: string): T | null => {
  try {
    return JSON.parse(fs.readFileSync(path.join(root, rel), 'utf-8')) as T;
  } catch {
    return null;
  }
};

/** "online-mba/mba-electives/IT&Systems-Management" -> "online-mba__mba-electives__IT&Systems-Management" */
const fileKey = (segments: string[]) => segments.map((s) => decodeURIComponent(s)).join('__');

export function loadPage(segments: string[]): PageData | null {
  return readJson<PageData>(`pages/${fileKey(segments)}.json`);
}

// Embed-code notes pasted into the live blog posts by their authors; they are instructions, not article copy.
const BLOG_NOISE = /^(add this in the <head> section of your html|table container with .*(font|border).*|add this in the <body>.*)$/i;

export function loadBlogPost(slug: string): PageData | null {
  const d = readJson<PageData>(`blog/${slug}.json`);
  if (!d) return d;
  return { ...d, blocks: d.blocks.filter((b) => !((b.t === 'p' || b.t === 'q') && BLOG_NOISE.test(b.x.trim()))) };
}

let blogCache: BlogPost[] | null = null;
export function loadBlogs(): BlogPost[] {
  return (blogCache ??= readJson<BlogPost[]>('blogs.json') ?? []);
}

export const BLOGS_PER_PAGE = 6;

/** "Why Choose Dayananda Sagar University Online?" points with their full text and photo (live /about). */
export function loadAboutWhy(): { t: string; d: string; img: string | null; w?: number; h?: number }[] {
  return readJson('about-why.json') ?? [];
}

/** Every content page path (as segment arrays) except the homepage and blogs (handled separately). */
export function allPageSegments(): string[][] {
  return fs
    .readdirSync(path.join(root, 'pages'))
    .filter((f) => f.endsWith('.json') && f !== 'home.json' && !f.startsWith('resources__'))
    .map((f) => f.replace(/\.json$/, '').split('__'));
}

/** Turn an absolute dsuonline.com link into a local route; keep external links as-is. */
export function localHref(href: string): string {
  try {
    const u = new URL(href);
    if (u.hostname === 'dsuonline.com' || u.hostname === 'www.dsuonline.com') {
      if (/\.[a-z0-9]{2,5}$/i.test(u.pathname)) return href; // documents/files stay on the live site
      const p = u.pathname.replace(/\/$/, '') || '/';
      return p + u.search + u.hash;
    }
  } catch {
    /* relative or tel/mailto */
  }
  return href;
}
