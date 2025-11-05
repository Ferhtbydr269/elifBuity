# 🌸 Elif Akil Beauty - Website

A luxury beauty salon website for **Elif Akil Beauty**, located in Orhangazi, Bursa, Türkiye.

## 📋 Project Overview

This is a modern, responsive, single-page website designed to showcase the services and elegance of Elif Akil Beauty salon. The website features a clean and sophisticated design with smooth animations, intuitive navigation, and a focus on user experience.

## ✨ Features

- **Fully Responsive Design** - Optimized for desktop, tablet, and mobile devices
- **Modern UI/UX** - Elegant and luxurious design aesthetic
- **Smooth Animations** - AOS (Animate On Scroll) library integration
- **Interactive Gallery** - Lightbox functionality for image viewing
- **Contact Form** - Functional form with validation
- **Google Maps Integration** - Embedded location map
- **SEO Optimized** - Proper meta tags and semantic HTML
- **Accessibility Features** - Skip links and keyboard navigation support
- **Performance Optimized** - Lazy loading and debounced scroll events

## 🎨 Design System

### Color Palette
- **Primary Colors:**
  - Primary Color: `#d4a5a5`
  - Secondary Color: `#f5e6e8`
  - Accent Color: `#c89595`
  
- **Accent Colors:**
  - Rose Gold: `#b76e79`
  - Dark Pink: `#a67c8a`
  - Light Nude: `#f8f4f1`

- **Neutrals:**
  - Text Dark: `#333333`
  - Text Light: `#666666`
  - Pure White: `#ffffff`

### Typography
- **Headings:** Playfair Display (Serif)
- **Body Text:** Poppins (Sans-serif)

## 📂 File Structure

```
.
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Main stylesheet with luxury aesthetics
├── js/
│   └── main.js            # JavaScript functionality and interactions
├── assets/
│   ├── logo.jpg           # Salon logo
│   └── gallery/           # Gallery images (24 photos)
├── picture/               # Original gallery images
├── insta_picture/         # Instagram showcase images
├── elifakilbeautyLogo.jpg # Original logo file
└── README.md              # This file
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone or download the repository**
2. **Open the project folder**
3. **Launch the website:**
   - **Option 1:** Double-click `index.html` to open in your default browser
   - **Option 2:** Use a local development server:
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Node.js (with http-server)
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

4. **Access the website** at `http://localhost:8000` (if using a local server)

## 🔧 Customization

### Changing Colors
Edit the CSS variables in `css/style.css`:
```css
:root {
    --primary-color: #d4a5a5;
    --secondary-color: #f5e6e8;
    --rose-gold: #b76e79;
    /* ... other colors ... */
}
```

### Updating Content
- **Text Content:** Edit directly in `index.html`
- **Images:** Replace files in `assets/gallery/` folder
- **Logo:** Replace `assets/logo.jpg`
- **Hero Background:** Update image path in CSS or use images from `insta_picture/`

### Adding/Removing Services
In `index.html`, locate the services section and add/remove service cards:
```html
<div class="service-card" data-aos="fade-up">
    <div class="service-icon">
        <i class="fas fa-icon-name"></i>
    </div>
    <h3 class="service-title">Service Name</h3>
    <p class="service-description">Description...</p>
</div>
```

## 📱 Responsive Breakpoints

- **Mobile:** 375px - 768px
- **Tablet:** 768px - 1024px
- **Desktop:** 1024px and above

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📦 Dependencies

- **AOS.js** (v2.3.1) - Animate On Scroll library
- **Font Awesome** (v6.4.0) - Icons
- **Google Fonts** - Playfair Display, Poppins, Cormorant Garamond

All dependencies are loaded via CDN, no installation required.

## 🎯 Sections

1. **Hero** - Eye-catching landing section with call-to-action
2. **Hakkımızda (About)** - Information about the salon
3. **Hizmetlerimiz (Services)** - Detailed service offerings
4. **Galeri (Gallery)** - Image showcase with lightbox
5. **İletişim & Randevu (Contact)** - Contact form and location map
6. **Footer** - Quick links and social media

## 📞 Contact Information

**Elif Akil Beauty**
- **Address:** Camiikebir Mah. İstiklal Cad. No:22 K:4 No:404, Elbir Plaza, Orhangazi / Bursa
- **Phone:** [0552 944 92 75](tel:+905529449275)
- **Hours:** Monday - Saturday: 09:00 - 19:00 | Sunday: Closed

## 🛠️ Development

### Technologies Used
- HTML5
- CSS3 (Flexbox, Grid, Custom Properties)
- Vanilla JavaScript (ES6+)
- AOS.js for animations
- Font Awesome for icons

### Best Practices Implemented
- Semantic HTML structure
- Mobile-first responsive design
- Accessible navigation and forms
- Optimized images and lazy loading
- Clean, maintainable code
- Performance optimization techniques

## 📈 Future Enhancements

- [ ] Backend integration for contact form
- [ ] Booking system integration
- [ ] Multi-language support (English/Turkish)
- [ ] Blog section for beauty tips
- [ ] Online payment integration
- [ ] Customer testimonials section
- [ ] Before/after photo comparison slider
- [ ] Social media feed integration

## 🐛 Known Issues

None at this time. Please report any issues you encounter.

## 📄 License

© 2025 Elif Akil Beauty. All rights reserved.

## 👨‍💻 Developer

**Ferhat Baydır**

Developed with ❤️ for Elif Akil Beauty

---

## 🙏 Credits

- Design & Development: Claude Sonnet 4.5
- Icons: Font Awesome v6.4.0
- Fonts: Google Fonts (Playfair Display, Poppins)
- Animations: AOS.js v2.3.1

---

**Last Updated:** November 2025

