import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Preloader } from '@/components/layout/Preloader';
import { TitleReveal } from '@/components/layout/TitleReveal';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { EnquiryProvider } from '@/components/layout/EnquiryProvider';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SideTabs } from '@/components/layout/SideTabs';
import './globals.scss';

const roboto = Roboto({
  variable: '--font-roboto',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

// Staging: block indexing. Flip to index/follow (and update public/robots.txt) before production launch.
export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    noarchive: true,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  title: {
    default: 'DSU Online | UGC-Entitled Online Degrees from Dayananda Sagar University',
    template: '%s | DSU Online',
  },
  description:
    'Earn a UGC-entitled online MBA, MCA, BBA, BCA or B.Com from Dayananda Sagar University. Learn anytime, anywhere at your own pace.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={roboto.variable}>
      <head>
        <link rel="preload" as="image" href="/images/hero/slide-1.webp" media="(min-width: 760px)" fetchPriority="high" />
        <link rel="preload" as="image" href="/images/hero/mobile-1.webp" media="(max-width: 759.98px)" fetchPriority="high" />
      </head>
      <body>
        <Preloader />
        <SmoothScroll />
        <TitleReveal />
        <EnquiryProvider>
          <Header />
          <main data-u>{children}</main>
          <Footer />
          <SideTabs />
        </EnquiryProvider>
      </body>
    </html>
  );
}
