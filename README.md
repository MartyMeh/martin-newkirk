# Martin Newkirk - Personal CV Website

A clean, minimal personal website showcasing CV, professional background, and product metrics for Photonik and Clean Energy Reviews.

## Project Overview

This is a static 3-page website built with vanilla HTML, CSS, and JavaScript. No framework needed—optimized for simplicity, fast loading, and easy deployment.

## Project Structure

```
/
├── index.html              # Main CV page
├── photonik.html           # Photonik product metrics
├── cer.html               # Clean Energy Reviews metrics
├── css/
│   └── styles.css         # Shared styles across all pages
├── js/
│   └── charts.js          # Chart.js configurations for metrics
├── images/
│   ├── profile.jpg        # Professional photo
│   ├── photonik-screenshot.png
│   └── cer-screenshot.png
└── README.md
```

## Design Principles

- **Minimal but intentional**: Clean typography, generous whitespace, one accent color (green #2ecc71)
- **Mobile responsive**: Works on all screen sizes
- **Fast loading**: No heavy frameworks, optimized assets
- **Print-friendly**: CV page should print cleanly to PDF
- **Professional but approachable**: Founder vibe, not corporate

## Technical Stack

- **HTML5**: Semantic markup
- **CSS3**: Custom styling, no frameworks (intentionally minimal)
- **Chart.js**: For metrics visualization (loaded from CDN)
- **Vanilla JavaScript**: Minimal JS for chart rendering

## Key Features

### index.html (CV Page)
- Professional header with contact info and links
- Summary section highlighting founder credentials and AI-assisted building
- Experience section with emphasis on Photonik and Uber Carshare journey
- Education, Skills, Languages
- Professional photo section
- Download PDF button
- Navigation to Photonik and CER metrics pages

### photonik.html (Photonik Metrics)
- Overview of product (professional solar design software)
- Key metrics displayed with charts:
  - Total users (2,000+)
  - Monthly active users
  - Growth trajectory
  - Features shipped timeline
  - Geographic distribution
- "Built solo using AI-assisted development" narrative
- Screenshots/visuals of the product

### cer.html (Clean Energy Reviews Metrics)
- Overview of platform (independent solar advice)
- Key metrics:
  - Monthly visitors
  - Content pieces published
  - User engagement metrics
  - Geographic reach
- Impact story

## Styling Guidelines

### Colors
- **Primary accent**: #2ecc71 (green - clean energy theme)
- **Text primary**: #1a1a1a
- **Text secondary**: #555
- **Text muted**: #7f8c8d
- **Borders/dividers**: #ecf0f1
- **Background**: #ffffff

### Typography
- **Font stack**: -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif
- **Headings**: Bold, tight letter spacing
- **Body**: 14-15px, comfortable line height (1.6-1.7)

### Layout
- **Max width**: 850px centered
- **Padding**: 50px 60px on desktop
- **Responsive**: Reduces padding on mobile

## Navigation

Simple top navigation bar on all pages:
- Home (CV)
- Photonik Metrics
- Clean Energy Reviews Metrics
- Download PDF (links to static PDF file)

## Charts Configuration

Use Chart.js (loaded from CDN) for all metrics visualization:
- Line charts for growth over time
- Bar charts for categorical comparisons
- Minimal styling to match overall design
- Responsive and print-friendly

## Content Placeholders

When building, use these placeholders:
- `[YOUR_PHOTO]` - Professional photo
- `[PHOTONIK_METRICS]` - Actual user numbers, growth rates
- `[CER_METRICS]` - Traffic numbers, engagement stats
- `[PDF_URL]` - Link to downloadable PDF CV

## Deployment

Deploy as static site to:
- **GitHub Pages** (recommended - free, easy)
- **Netlify** (drag and drop)
- **Vercel** (git integration)

No build process required—just upload files.

## Current Status

✅ Base CV HTML created with styling
⏳ Need to add: navigation, metrics pages, charts, photo section, responsive design

## Next Steps for Cursor Agent

1. **Create shared navigation component** that can be included on all three pages
2. **Build photonik.html** with placeholder metrics and chart configurations
3. **Build cer.html** with placeholder metrics and chart configurations
4. **Add photo section to index.html** (professional photo + download PDF button)
5. **Create charts.js** with Chart.js configurations for all metrics
6. **Ensure mobile responsiveness** across all pages
7. **Test print styling** for CV page

## Notes for AI Agent

- Keep JavaScript minimal—only what's needed for charts
- Reuse CSS patterns from index.html for consistency
- Make charts configurable so Martin can easily update numbers
- Ensure all links between pages work correctly
- Add meta tags for SEO (title, description)
- Make sure the site tells a coherent story: "Solo founder building in clean energy using AI tools"

## Brand Voice

Professional but not stuffy. Confident but not arrogant. Technical but accessible. This is a founder who ships products, not a consultant who makes slides.

The site should feel like: "I built this quickly because I know how to prioritize what matters. Now let's talk about what we could build together."