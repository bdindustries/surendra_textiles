# Surendra Textiles — SEO-first website

This package is a multi-page static website for Surendra Textiles in Jhalukpara, Dibrugarh, Assam, with product pages for mattresses, foams, blinds and furnishings plus a dedicated Assam/Northeast wholesale page.

## What has been updated

- The supplied Surendra Textiles logo style is now used in the header and footer.
- Separate product images are included as compressed WebP files in `assets/products/`.
- Homepage and product pages are now image-led while keeping the important SEO copy as crawlable HTML text.
- Wallpaper/PVC and sofa/dining furnishing visuals are included on both the homepage and furnishings page.
- Important hero images use eager/high-priority loading; below-the-fold images use lazy loading.
- Every content image has descriptive alt text, fixed dimensions and `decoding="async"` where appropriate.
- The UI uses the navy/gold/cream brand direction without external font dependencies.
- Local/business content remains focused on Dibrugarh, Assam and legitimate Northeast wholesale intent.

## Critical before publishing

### 1. Replace the placeholder domain

The HTML, sitemap and structured data still use:

`https://surendratextiles.in`

Replace that value everywhere with the real HTTPS domain before the site is indexed. This is essential because canonical URLs and structured-data IDs must point to the live domain.

### 2. Keep business details consistent

Current website details:

- Surendra Textiles
- Jhalukpara, Shani Mandir Road, Opposite Marwari School, Dibrugarh, Assam 786001
- +91 97066 11936
- pankajkejriwal23@gmail.com
- Monday–Saturday: 10:00 AM–8:00 PM

Use the same name, address, phone and opening hours on the live website, Google Business Profile and relevant directories.

### 3. Replace illustrative imagery with real store/product photos when available

The current WebP product visuals are illustrative. They are suitable for the website layout, but genuine photographs of the storefront, stock, projects, mattresses, foams, blinds and hospitality supplies will be stronger for local trust and long-term local SEO.

## SEO architecture

- `/` — Dibrugarh mattress, foam and furnishing supplier intent
- `/mattresses.html` — mattress dealer / hotel mattress / mattress wholesale intent
- `/foams.html` — PU, HR, memory, latex and acoustic foam intent
- `/blinds.html` — roller, zebra and vertical blind intent
- `/furnishings.html` — hotel bedsheets, wallpaper, PVC carpet, sofa cloth and dining furnishing intent
- `/wholesale-northeast.html` — Assam and Northeast wholesale/distribution intent
- `/contact.html` — local contact and location intent

The site intentionally uses one substantive Northeast wholesale page rather than duplicating near-identical city/state landing pages.

## Local SEO launch checklist

- Verify the Google Business Profile.
- Add the final website URL and exact same NAP details to the profile.
- Add real storefront and product photos to the Business Profile.
- Verify the domain in Google Search Console and submit `/sitemap.xml`.
- Add the final Google Maps / Business Profile URL to the contact page once confirmed.
- Earn genuine customer reviews; do not create or import fake reviews.
- Maintain consistent citations on legitimate business/local directories.
- Publish useful product and hospitality procurement content that links naturally to the relevant category pages.
- Do not create doorway pages or bulk low-value location pages.

## Technical SEO included

- Semantic HTML and one primary H1 per page
- Unique page titles and descriptions
- Canonical tags
- Crawlable internal navigation
- LocalBusiness/HomeGoodsStore and WebSite structured data on the homepage
- Service and Breadcrumb structured data on the regional wholesale page
- Breadcrumb structured data on inner pages
- Responsive mobile navigation
- WebP product images with descriptive filenames
- Width/height attributes to reduce layout shift
- Lazy loading below the fold
- Click-to-call and click-to-WhatsApp
- WhatsApp enquiry form with no backend dependency
- `robots.txt`, `sitemap.xml`, `404.html`
- No external font dependency
- No hidden keyword blocks or fake review schema

## Product image assets

- `assets/products/hotel-mattress-dibrugarh.webp`
- `assets/products/spring-mattress.webp`
- `assets/products/coir-foam-latex-mattress.webp`
- `assets/products/pu-hr-memory-foam.webp`
- `assets/products/acoustic-foam.webp`
- `assets/products/roller-zebra-blinds.webp`
- `assets/products/vertical-blinds.webp`
- `assets/products/hotel-bedsheets.webp`
- `assets/products/wallpaper-pvc.webp`
- `assets/products/sofa-dining-furnishings.webp`

All are 1200×900 WebP files sized for web use.


## Retail + wholesale search architecture
- `index.html` is retail-first for Dibrugarh while still introducing wholesale capability.
- `store-dibrugarh.html` is the dedicated physical retail outlet landing page for local store/shop intent.
- Product pages support retail shoppers and category-specific local searches.
- `wholesale-northeast.html` is kept focused on regional wholesale/distributor/bulk intent across Assam and Northeast India.
- Before launch, replace every `surendratextiles.in` canonical/schema/sitemap URL with the real production domain.
