import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/icons/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/content/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/:path*",
        headers: [
          // Next injects inline bootstrap scripts, so script-src needs 'unsafe-inline' until nonces are wired in.
          {
            key: "Content-Security-Policy",
            value:
              "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' data:; frame-src https://www.youtube.com https://www.youtube-nocookie.com https://www.google.com https://maps.google.com; connect-src 'self'; object-src 'none'; base-uri 'self'; frame-ancestors 'self'",
          },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Robots-Tag", value: "noindex, nofollow, noarchive, nosnippet" },
        ],
      },
    ];
  },
  turbopack: {
    resolveAlias: {
      '../build/polyfills/polyfill-module': './src/empty.js',
      'next/dist/build/polyfills/polyfill-module': './src/empty.js',
    },
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '../build/polyfills/polyfill-module': path.resolve(process.cwd(), 'src/empty.js'),
        'next/dist/build/polyfills/polyfill-module': path.resolve(process.cwd(), 'src/empty.js'),
      };
    }
    return config;
  },
  sassOptions: {
    loadPaths: [path.join(process.cwd(), "src/styles")],
  },
};

export default nextConfig;
