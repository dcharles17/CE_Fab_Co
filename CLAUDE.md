# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CE Fab Co is a single-page static website for a custom welding and metal fabrication company. Built with pure HTML, CSS, and vanilla JavaScript with no frameworks or build tools required.

## Architecture

### File Structure
- **[index.html](index.html)** - Complete HTML structure with semantic sections (hero, services, portfolio, contact)
- **[styles.css](styles.css)** - All styles using CSS custom properties for theming, mobile-first responsive design
- **[script.js](script.js)** - Interactive features: smooth scrolling, scroll animations, active nav highlighting, form handling
- **images/** - Project portfolio images (SVG placeholders currently)

### Key Design Patterns

**CSS Architecture:**
- CSS custom properties defined in `:root` ([styles.css:11-38](styles.css#L11-L38)) for theming
- Mobile-first responsive design with breakpoints at 768px and 480px
- Grid-based layouts throughout (services, portfolio, contact, footer)
- Industrial color scheme: orange accent (#F0682D) on dark gray/black backgrounds

**JavaScript Architecture:**
- Intersection Observer API for scroll-triggered animations ([script.js:123-176](script.js#L123-L176))
- Smooth scrolling navigation with offset for fixed navbar ([script.js:5-20](script.js#L5-L20))
- Active navigation link highlighting based on scroll position ([script.js:46-69](script.js#L46-L69))
- Form submission creates mailto link (no backend) ([script.js:75-114](script.js#L75-L114))

## Development Workflow

### Local Development Server

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000`

### No Build Process

This is a static site with no compilation, bundling, or preprocessing. Changes to HTML/CSS/JS are immediately visible on browser refresh.

## Common Modifications

### Contact Information Updates

Contact info appears in multiple locations and must be updated consistently:
- Phone: [index.html:142](index.html#L142), [index.html:194](index.html#L194)
- Email: [index.html:150](index.html#L150), [index.html:195](index.html#L195), [script.js:103](script.js#L103)

### Color Scheme

All colors defined as CSS custom properties in [styles.css:11-21](styles.css#L11-L21). Primary orange accent is `--primary-color: #F0682D`.

### Adding/Removing Portfolio Items

Portfolio uses a 3-column responsive grid ([styles.css:317-321](styles.css#L317-L321)). Add/remove `.portfolio-item` divs in [index.html:72-127](index.html#L72-L127). Images should be ~800x600px (4:3 ratio), optimized for web.

### Modifying Services

Services use 4-column auto-fit grid ([styles.css:273-277](styles.css#L273-L277)). Edit service cards in [index.html:42-63](index.html#L42-L63). Currently uses emoji icons but can be replaced with icon fonts or SVGs.

## Technical Notes

### Form Submission
The contact form ([index.html:156-171](index.html#L156-L171)) currently opens the user's email client via mailto link ([script.js:103-107](script.js#L103-L107)). For server-side form handling, replace the submit handler with an API call to a backend endpoint or third-party service (Formspree, EmailJS, etc.).

### Image Lazy Loading
Portfolio images use native lazy loading (`loading="lazy"` attribute) with Intersection Observer fallback ([script.js:182-202](script.js#L182-L202)) that adds placeholder backgrounds for missing images.

### Navigation Behavior
Fixed navbar ([styles.css:165-174](styles.css#L165-L174)) stays at top. Smooth scroll navigation accounts for navbar height to prevent content being hidden behind it ([script.js:11-12](script.js#L11-L12)).

### Animation System
Entry animations use Intersection Observer to trigger CSS transitions when elements scroll into view. Portfolio items and service cards animate sequentially with staggered delays ([script.js:155-176](script.js#L155-L176)).

## Browser Compatibility

Supports modern browsers (Chrome, Firefox, Safari, Edge - latest versions). Uses:
- CSS Grid and Flexbox
- CSS Custom Properties
- Intersection Observer API
- Native lazy loading

No polyfills or transpilation. Does not support IE11.
