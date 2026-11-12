import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import { Preloader } from '@/components/layout/Preloader';
import { TitleReveal } from '@/components/layout/TitleReveal';
import { FactsDrawer } from '@/components/layout/FactsDrawer';
import { SmoothScroll } from '@/components/layout/SmoothScroll';
import { EnquiryProvider } from '@/components/layout/EnquiryProvider';
import { Footer } from '@/components/layout/Footer';
import { Header } from '@/components/layout/Header';
import { SideTabs } from '@/components/layout/SideTabs';
import './globals.scss';

const fontMain = Plus_Jakarta_Sans({
  variable: '--font-main',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
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
    default: 'DSU Online | UGC-Entitled Online Programs from Dayananda Sagar University',
    template: '%s | DSU Online',
  },
  description:
    'Earn a UGC-entitled online MBA, MCA, BBA, BCA or B.Com from Dayananda Sagar University. Learn anytime, anywhere at your own pace.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={fontMain.variable} suppressHydrationWarning>
      <head>
        <script
          // first-load preloader: min 1.7s, hide on load, failsafe 5.3s; skipped for reduced motion; absent without JS
          dangerouslySetInnerHTML={{
            __html: "(function(d){if(matchMedia('(prefers-reduced-motion:reduce)').matches)return;var h=d.documentElement,t=Date.now(),f;h.classList.add('is-loading');function o(){if(f)return;f=1;h.classList.add('is-leaving');setTimeout(function(){h.classList.remove('is-loading','is-leaving')},700)}function g(){setTimeout(o,Math.max(0,1700-(Date.now()-t)))}d.readyState=='complete'?g():addEventListener('load',g);setTimeout(o,5300)})(document)",
          }}
        />
      </head>
      <body>
        <Preloader />
        <SmoothScroll />
        <FactsDrawer />
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
