# Uniforma - Clothing Production Company Website

A pixel-perfect, fully functional, responsive website for Uniform, a large-scale clothing production company providing uniforms and custom wear for schools and organizations.

## Features

- **5 Main Pages:**
  - Home - Hero section, product range, testimonials, stats
  - About Us - Company history, core capabilities, quality showcase
  - Contact - Quote request form, contact information, WhatsApp integration
  - Portfolio (Our Work) - Client success stories, partner showcase
  - Category Page - Product listings (School Uniform Polos)

- **Fully Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern CSS Architecture** - Design tokens, utility classes, component library
- **Interactive Elements** - Form validation, mobile menu, smooth scrolling, animated stats
- **SEO Optimized** - Meta tags, semantic HTML, proper heading hierarchy

## Tech Stack

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, Flexbox, Grid
- **Vanilla JavaScript** - No frameworks, pure JS for interactions
- **Design System** - CSS variables for consistent theming

## Project Structure

```
cherish-world/
├── index.html              # Home page
├── about.html             # About Us page
├── contact.html           # Contact page with form
├── portfolio.html         # Our Work/Portfolio page
├── category-polos.html    # Product category page
├── css/
│   ├── variables.css      # Design tokens & CSS custom properties
│   ├── base.css          # Reset, typography, utilities
│   ├── components.css    # Reusable UI components
│   └── pages.css         # Page-specific styles
├── js/
│   ├── navigation.js     # Mobile menu & nav functionality
│   ├── forms.js          # Form validation & submission
│   └── animations.js     # Scroll animations & interactions
├── images/               # Product & content images
└── README.md
```

## Getting Started

### View Locally

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Or use a local server:

```bash
# Using Python 3
python -m http.server 8000

# Using Node.js (http-server)
npx http-server -p 8000

# Using PHP
php -S localhost:8000
```

4. Navigate to `http://localhost:8000`

### No Typescript Build Required

This is a vanilla HTML/CSS/JS project - no build process needed! Just open the HTML files in your browser.

## Pages Overview

### Home Page (`index.html`)
- Hero section with call-to-action buttons
- Product range showcase (School Uniforms, Corporate Wear, Sportswear)
- Trusted institutions logos
- Client testimonials
- Company stats (100+ institutions, 500k+ garments, etc.)

### About Us (`about.html`)
- Company history and values
- Core capabilities (Design & Prototyping, Large-Scale Production, Quality Assurance)
- Quality in Action photo gallery

### Contact (`contact.html`)
- Quote request form with validation
- Contact information (phone, email, address, hours)
- WhatsApp integration button
- Embedded Google Map

### Portfolio (`portfolio.html`)
- Company stats
- Partner logos grid
-Client success stories with filtering (All, Education, Corporate, Healthcare)

### Category Page (`category-polos.html`)
- Breadcrumb navigation
- Product grid with pricing
- Bulk order CTA

## Design System

### Color Palette
- Primary Orange: `#F9A825`
- Dark Navy: `#1E3A5F`
- White & Off-white backgrounds
- Semantic colors for success, error states

### Typography
- Modern sans-serif font stack
- Responsive font scaling
- Clear hierarchy

### Spacing & Layout
- Consistent spacing scale
- Max content width: 1200px
- Responsive breakpoints: 1200px, 768px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Customization

### Updating Colors
Edit `css/variables.css` to change the color scheme:

```css
:root {
  --color-primary: #F9A825;  
  --color-navy: #1E3A5F;     
  /* ... */
}
```

## License

This project is proprietary and confidential.

## Contact

For questions or support regarding this website:
- Email: amoskelvintoluwalope2021@gmail.com
- Phone: +234 905 8014 835

---

