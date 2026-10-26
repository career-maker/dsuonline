import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BlogIndex, BlogPost } from '@/components/inner/Blog';
import type { Crumb } from '@/components/inner/InnerPage';
import { ContentPage } from '@/components/inner/Page';
import { programs, specializationHref } from '@/data/programs';
import { allPageSegments, BLOGS_PER_PAGE, loadBlogPost, loadBlogs, loadPage, type PageData } from '@/lib/content';

type Params = { slug: string[] };

export function generateStaticParams(): Params[] {
  const pages = allPageSegments().map((slug) => ({ slug }));
  const blogs = loadBlogs();
  const pageCount = Math.max(1, Math.ceil(blogs.length / BLOGS_PER_PAGE));
  return [
    ...pages,
    { slug: ['resources', 'blogs'] },
    ...Array.from({ length: pageCount - 1 }, (_, i) => ({ slug: ['resources', 'blogs', 'page', String(i + 2)] })),
    ...blogs.map((b) => ({ slug: ['resources', 'blogs', b.slug] })),
  ];
};

type Resolved =
  | { kind: 'blogIndex'; page: number }
  | { kind: 'post'; data: PageData; slug: string }
  | { kind: 'page'; data: PageData; crumbs: Crumb[]; programLinks?: { name: string; href: string }[]; withFacts: boolean };

function resolve(segments: string[]): Resolved | null {
  const seg = segments.map((s) => decodeURIComponent(s));
  if (seg[0] === 'resources' && seg[1] === 'blogs') {
    if (seg.length === 2) return { kind: 'blogIndex', page: 1 };
    if (seg[2] === 'page' && seg.length === 4) {
      const n = Number(seg[3]);
      return Number.isInteger(n) && n >= 1 ? { kind: 'blogIndex', page: n } : null;
    }
    if (seg.length === 3) {
      const data = loadBlogPost(seg[2]);
      return data ? { kind: 'post', data, slug: seg[2] } : null;
    }
    return null;
  }
  const data = loadPage(seg);
  if (!data) return null;
  const prog = programs.find((p) => p.href === `/${seg[0]}`);
  if (prog && seg.length === 1) {
    return {
      kind: 'page',
      data,
      crumbs: [{ label: 'Home', href: '/' }, { label: `Online ${prog.name}` }],
      programLinks: prog.specializations.map((sp) => ({ name: sp.name, href: specializationHref(prog, sp) })),
      withFacts: true,
    };
  }
  if (prog && seg.length === 3) {
    const sp = prog.specializations.find((x) => x.slug === seg[2]);
    return {
      kind: 'page',
      data,
      crumbs: [{ label: 'Home', href: '/' }, { label: `Online ${prog.name}`, href: prog.href }, { label: sp?.name ?? seg[2] }],
      withFacts: true,
    };
  }
  return { kind: 'page', data, crumbs: [{ label: 'Home', href: '/' }, { label: data.title.split(/\s[|:–-]\s/)[0] || seg[0].replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase()) }], withFacts: false };
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const r = resolve(slug);
  if (!r) return {};
  if (r.kind === 'blogIndex') return { title: 'Blogs', description: 'Latest blogs and insights from DSU Online.' };
  return { title: r.data.title, description: r.data.description || undefined };
}

export default async function InnerRoute({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const r = resolve(slug);
  if (!r) notFound();
  if (r.kind === 'blogIndex') return <BlogIndex page={r.page} />;
  if (r.kind === 'post') return <BlogPost data={r.data} slug={r.slug} />;
  return <ContentPage slug={slug.join('/')} crumbs={r.crumbs} blocks={r.data.blocks} programLinks={r.programLinks} withFacts={r.withFacts} />;
}
