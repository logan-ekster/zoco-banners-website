# Zoco Banners Website

**Live site:** [zocobanners.com](https://www.zocobanners.com/)

A hand-coded, mobile-responsive website for Zoco Banners, a small business in Gastonia and McAdenville, NC that makes custom hand-drawn kraft paper party banners.

## Pages

| Page | Purpose |
| --- | --- |
| `index.html` | Home: intro, maker bio, quick links |
| `work.html` | Portfolio of recent banners |
| `pricing.html` | Four sizes, drawn to scale from data in JavaScript |
| `order.html` | Step-by-step ordering process |
| `plan.html` | Interactive order planner |
| `pickup.html` | Pick-up and shipping details |

## Features

- **Interactive order planner** (`plan.html` + `script.js`): customers pick a size, event, wording, theme, and date. JavaScript builds a ready-to-send order message live, shows the price, flags past or rush dates, and copies the message to the clipboard (with a fallback) for pasting into an Instagram DM.
- **Data-driven pricing**: banner sizes and prices live in one JavaScript array that renders both the pricing page and the planner.
- **Responsive design** in plain CSS, with no framework.
- **Local SEO**: meta descriptions, Open Graph tags, `sitemap.xml`, and `robots.txt` targeting Gastonia and McAdenville searches.
- **Decorative SVG bunting**, generated in JavaScript.

## Built with

HTML, CSS, and vanilla JavaScript. No build step, so it can be hosted anywhere static. Developed with AI pair programming (Claude).
