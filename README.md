# Paco.Inks — Tattoo Artist Portfolio Website

## Quick Start
Open `index.html` in a browser to preview the site.

## How to Add Real Photos

### Portfolio Images
In `index.html`, find the portfolio section. Replace the placeholder divs with actual images:

```html
<!-- Replace this: -->
<div class="portfolio-placeholder">
    <span>Tattoo 1</span>
</div>

<!-- With this: -->
<img src="images/tattoo-1.jpg" alt="Realism tattoo by Paco.Inks">
```

Drop all tattoo photos into the `images/` folder.

### Artist Photo
In the About section, replace the placeholder div with:
```html
<img src="images/paco-portrait.jpg" alt="Paco - Tattoo Artist">
```

### Flash Designs
Same process — replace placeholder divs in the Flash section with actual images.

## How to Update Content

### Social Links
Search for `instagram.com/paco.inks` and `tiktok.com/@paco.inks` to update URLs.

### Contact Email
In `script.js`, find `paco.inks@email.com` and replace with the actual email address.

### Add/Remove Portfolio Items
Copy a portfolio item block and change the `data-category` to match:
- `realism` — Realism pieces
- `blackgrey` — Black & Grey pieces
- `portrait` — Portrait work
- Combine them: `realism portrait` for a realistic portrait

### Flash Designs
Change `available` to `claimed` class when a flash design is taken.

## Deployment Options
1. **GitHub Pages** — free, push to a repo and enable Pages
2. **Netlify** — free, drag and drop the folder
3. **Vercel** — free, connect to GitHub
4. **Custom domain** — buy a domain like pacoinks.com and point it to any of the above

## File Structure
```
paco-inks-website/
├── index.html      ← Main page
├── styles.css      ← All styling
├── script.js       ← Interactions & form
├── images/         ← Drop photos here
└── README.md       ← This file
```
