/** Programme brochure PDFs (public/docs). Programme code = mba | mca | bba | bca | bcom. */
export const brochureHref = (code?: string) => (code && /^(mba|mca|bba|bca|bcom)$/.test(code) ? `/docs/dsu-online-${code}-brochure.pdf` : '/docs/dsu-online-mba-brochure.pdf');
