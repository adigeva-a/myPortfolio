# Adi Geva — PM Portfolio

A static portfolio site showcasing product management case studies across fintech, payments, and regulated platforms.

## Site Structure

```
/index.html                         Home page (case study card grid)
/case-studies/payoneer-funnel.html   CS01 — Payoneer Registration Funnel
/case-studies/verification.html      CS02 — Phone Verification Fix
/case-studies/etoro.html             CS03 — eToro Banking & Payments
/case-studies/finastra.html          CS04 — Finastra Open Banking Platform
/assets/styles.css                   Shared design system
/assets/main.js                      Scroll-reveal animations
```

## Run Locally

No build step or server required — just open the files in a browser:

```bash
# Option 1: Open directly
open index.html

# Option 2: Use a local static server (recommended for consistent behavior)
npx serve .
# or
python3 -m http.server 8000
```

Then visit `http://localhost:8000` (or whichever port your server uses).

## Deploy to GitHub Pages

1. Push this repo to GitHub
2. Go to **Settings → Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose `main` branch and `/ (root)` folder
5. Click **Save**

The site will be live at `https://<username>.github.io/<repo-name>/` within a few minutes.

## Tech Stack

- **Pure HTML/CSS/JS** — no frameworks, no build tools
- **Fonts**: Fraunces (serif), Outfit (sans-serif), JetBrains Mono (monospace) via Google Fonts
- **Responsive**: mobile / tablet / desktop breakpoint at 800px
- **Accessibility**: skip-to-content link, semantic HTML, ARIA labels, visible focus states, keyboard-navigable

## Assumptions & Known Limitations

- Google Fonts loaded from CDN — requires internet connection on first visit (fonts are cached after)
- No JavaScript framework — animations use IntersectionObserver (supported in all modern browsers)
- All paths are relative, so the site works both at the root and in subdirectories on GitHub Pages
- No image assets currently used — all visuals are CSS-based
