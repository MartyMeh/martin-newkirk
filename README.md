# Martin Newkirk - Personal Website

A clean, minimal personal website showcasing CV, professional background, and product metrics for Photonik and Clean Energy Reviews.

## Project Overview

This is a static multi-page website built with vanilla HTML, CSS, and JavaScript. No framework needed—optimized for simplicity, fast loading, and easy deployment. Currently deployed on Netlify at [martinnewkirk.online](https://martinnewkirk.online).

## Project Structure

```
/
├── index.html                  # Landing page with intro video
├── cv.html                     # CV page with PDF download
├── photonik-metrics.html       # Combined Photonik & CER metrics
├── uber-carshare.html          # Uber Carshare/Car Next Door details
├── newkirk-solar.html          # Newkirk Solar Services details
├── community.html               # Community page (placeholder)
├── images/
│   ├── profile.jpg             # Professional photo
│   ├── profile2.jpg             # Alternative profile photo
│   └── intro.mp4               # Intro video
├── _redirects                   # Netlify redirects for clean URLs
├── netlify.toml                 # Netlify configuration
└── README.md
```

## Design Principles

- **Minimal but intentional**: Clean typography, generous whitespace, blue accent color (#5496b3) with secondary color (#cb8e41)
- **Mobile responsive**: Works on all screen sizes with responsive navigation
- **Fast loading**: No heavy frameworks, optimized assets
- **Print-friendly**: CV page generates clean PDFs (fits on 3 pages)
- **Professional but approachable**: Founder vibe, not corporate
- **SEO**: Noindex, nofollow meta tags (public but not searchable)

## Technical Stack

- **HTML5**: Semantic markup, inline styles for simplicity
- **CSS3**: Custom styling, no frameworks (intentionally minimal)
- **Chart.js**: For metrics visualization (loaded from CDN)
- **html2pdf.js**: For PDF generation from HTML (loaded from CDN)
- **Vanilla JavaScript**: For interactivity, PDF generation, and video lightbox

## Key Features

### index.html (Landing Page)
- Sticky navigation bar
- Intro video embedded
- Video script text
- CTA buttons to CV and Photonik Metrics
- Download PDF CV button in navigation

### cv.html (CV Page)
- Sticky navigation bar
- Professional header with contact info and links
- Summary section with profile photo (225px × 225px)
- Experience section with links to company pages
- Education, Community & Interests, Skills, Languages sections
- "View Intro Video" button (opens lightbox)
- Download PDF CV button (generates PDF from HTML)
- PDF optimized for 3 pages with controlled page breaks

### photonik-metrics.html (Combined Metrics)
- Sticky navigation bar
- Photonik section:
  - All-time metrics: Jobs Created, Proposals Created, Installer Sign-ups, Avg Proposals per Installer
  - Top 10 countries pie chart
- Clean Energy Reviews section:
  - All-time metrics: Visits (10.2M), Unique Visitors (8.3M), Pageviews (14.1M), Revenue (A$194k)
  - Top 10 countries pie chart (by visit percentage)
- Chart.js visualizations with blue/amber color scheme

### uber-carshare.html & newkirk-solar.html
- Detailed pages about specific work experiences
- Links from CV Experience section
- Consistent styling with rest of site

### community.html
- Placeholder page for community involvement
- Links from CV Community & Interests section

## Styling Guidelines

### Colors
- **Primary accent**: #5496b3 (blue)
- **Primary hover**: #447a91 (darker blue)
- **Secondary accent**: #cb8e41 (amber/gold)
- **Secondary hover**: #b88035 (darker amber)
- **Text primary**: #1a1a1a
- **Text secondary**: #555
- **Text muted**: #7f8c8d
- **Borders/dividers**: #ecf0f1
- **Background**: #ffffff

### Typography
- **Font stack**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif
- **Headings**: Bold, tight letter spacing, uppercase for section headers
- **Body**: 14-15px, comfortable line height (1.6-1.7)

### Layout
- **Max width**: 850px centered
- **Padding**: 50px 60px on desktop
- **Responsive**: Reduces padding and adjusts grid on mobile
- **Sticky navigation**: Fixed at top when scrolling

## Navigation

Sticky navigation bar on all pages:
- Home (index.html)
- CV
- Photonik & CER (renamed from "Photonik Metrics")
- Uber Carshare
- Newkirk Solar
- Community
- Download PDF CV (button)

All navigation links use clean URLs (no .html extension) via Netlify redirects.

## PDF Generation

The CV page includes client-side PDF generation using html2pdf.js:
- Generates PDF from HTML content
- Excludes navigation bar and buttons
- Resizes profile photo for PDF (150px)
- Automatically scrolls to top before generation
- Page breaks:
  - Page 1 ends after Photonik/CER section
  - Content flows naturally on pages 2-3
- Reduced top margin (5mm) for better fit
- Fits comfortably on 3 pages

## Charts Configuration

Chart.js (loaded from CDN) for metrics visualization:
- Pie charts for geographic distribution
- Blue and amber color scheme
- Responsive and mobile-friendly
- Data clearly labeled in JavaScript variables for easy updates

## Deployment

Currently deployed on **Netlify** via GitHub:
- Repository: https://github.com/MartyMeh/martin-newkirk
- Domain: martinnewkirk.online
- Auto-deployment on git push
- Clean URLs via `_redirects` file and `netlify.toml`

No build process required—just push to GitHub.

## Key Features Implemented

✅ Landing page with intro video
✅ Complete CV page with PDF generation
✅ Combined Photonik & CER metrics page
✅ Detailed company pages (Uber Carshare, Newkirk Solar)
✅ Sticky navigation on all pages
✅ Video lightbox on CV page
✅ Community & Interests section
✅ Company links in CV Experience section
✅ Download PDF CV button on all pages (navigates to CV page)
✅ Mobile responsive design
✅ SEO meta tags (noindex, nofollow)
✅ Clean URLs (no .html extension)

## Brand Voice

Professional but not stuffy. Confident but not arrogant. Technical but accessible. This is a founder who ships products, not a consultant who makes slides.

The site should feel like: "I built this quickly because I know how to prioritize what matters. Now let's talk about what we could build together."

## Notes

- All styles are inline in each HTML file for simplicity
- No external CSS/JS files (except CDN libraries)
- PDF generation uses html2pdf.js with html2canvas
- Video is embedded directly (images/intro.mp4)
- Color scheme reflects blue from profile photo
- Secondary color used for accents (CTA buttons, external links, charts)