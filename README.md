# CE Fab Co - Custom Welding & Fabrication Website

A modern, sleek single-page website for CE Fab Co, showcasing custom welding and metal fabrication services.

## Features

- **Responsive Design** - Mobile-first approach that works on all devices
- **Modern Industrial Aesthetic** - Clean design with industrial color palette (dark grays/blacks with orange accents)
- **Smooth Scrolling Navigation** - Seamless navigation between sections
- **Project Portfolio Gallery** - Grid-based showcase with hover effects
- **Contact Options** - Easy access via phone and email
- **Fast Loading** - Optimized with lazy-loading images and minimal dependencies
- **Pure HTML/CSS/JS** - No frameworks required

## File Structure

```
Hayden_Website/
├── index.html          # Main HTML structure
├── styles.css          # All styling and responsive design
├── script.js           # Interactive features and animations
├── images/             # Project images folder
│   ├── project-1.jpg
│   ├── project-2.jpg
│   ├── project-3.jpg
│   ├── project-4.jpg
│   ├── project-5.jpg
│   └── project-6.jpg
└── README.md
```

## Setup & Usage

### Quick Start

1. **Open the website** - Simply double-click `index.html` or open it in any web browser
2. **No build process required** - This is a static HTML website

### Deploying to a Web Server

Upload all files to your web hosting via FTP/SFTP:
- index.html
- styles.css
- script.js
- images/ folder (with all contents)

### Local Development

To run locally with a development server:

```bash
# Using Python 3
cd ~/Developer/Hayden_Website
python3 -m http.server 8000

# Using Node.js (if you have http-server installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open `http://localhost:8000` in your browser.

## Customization Guide

### Update Contact Information

**In `index.html`:**
- Line 104: Update phone number link `href="tel:+15555551234"`
- Line 105: Update displayed phone number
- Line 112: Update email link `href="mailto:info@cefabco.com"`
- Line 113: Update displayed email
- Lines 183-184: Update footer contact info

**In `script.js`:**
- Line 94: Update email address in `mailto:info@cefabco.com`

### Change Color Scheme

**In `styles.css` (lines 13-20):**
```css
--primary-color: #F0682D;      /* Orange accent color */
--primary-dark: #D85A1F;       /* Darker orange for hovers */
--secondary-color: #2C3E50;    /* Dark blue-gray */
--dark-bg: #1A1A1A;            /* Dark background */
```

### Replace Placeholder Images

1. Replace the SVG placeholder files in the `images/` folder with real project photos
2. Recommended image dimensions: 800x600px or similar 4:3 aspect ratio
3. Optimize images for web (JPEG at 80-90% quality, max 500KB per image)
4. Keep the same filenames (project-1.jpg through project-6.jpg) or update references in `index.html`

### Add/Edit Company Logo

1. Save your logo file to the `images/` folder (e.g., `logo.png`)
2. In `index.html`, replace line 19:
   ```html
   <div class="nav-brand">CE FAB CO</div>
   ```
   with:
   ```html
   <div class="nav-brand"><img src="images/logo.png" alt="CE Fab Co"></div>
   ```
3. Add logo styling in `styles.css`:
   ```css
   .nav-brand img {
       height: 40px;
       width: auto;
   }
   ```

### Modify Services

Edit the services section in `index.html` (lines 40-59) to update:
- Service icons (emojis or replace with icon fonts)
- Service titles
- Service descriptions

### Update Portfolio Projects

Edit the portfolio section in `index.html` (lines 68-124):
- Update image paths
- Change project titles
- Modify project descriptions

## Color Palette

The website uses an industrial color scheme:

- **Primary Orange**: `#F0682D` - Accent color for CTAs and highlights
- **Dark Gray**: `#2C3E50` - Main text and secondary backgrounds
- **Black**: `#1A1A1A` - Dark backgrounds and footer
- **Light Gray**: `#F5F5F5` - Section backgrounds
- **Medium Gray**: `#7F8C8D` - Secondary text

## Typography

- **Headings**: Arial Black (bold, industrial feel)
- **Body Text**: System fonts stack (-apple-system, Segoe UI, Roboto, etc.)
- **Font Sizes**: Responsive, scaling from 2rem on mobile to 4.5rem on desktop for hero

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Lazy loading for images
- CSS transitions for smooth animations
- Minimal JavaScript footprint
- No external dependencies
- Optimized for fast loading

## Future Enhancements

Consider adding:
- Backend form submission (PHP, Node.js, or form service like Formspree)
- Additional pages (About, Services detail pages)
- Image lightbox/gallery viewer
- Customer testimonials section
- Google Maps integration for location
- Social media links
- Blog/news section
- Mobile hamburger menu (commented code available in script.js)

## Credits

Website designed and developed for CE Fab Co.
Design inspired by modern metal fabrication industry best practices.

## License

All rights reserved - CE Fab Co © 2024
