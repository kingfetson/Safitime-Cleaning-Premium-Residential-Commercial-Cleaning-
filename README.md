# Safitime-Cleaning-Premium-Residential-Commercial-Cleaning-

A premium, responsive website for Safitime Cleaning Services, a professional residential and commercial cleaning company based in Nairobi, Kenya.

## 📋 Overview

This is a modern, fully responsive website designed to showcase Safitime Cleaning's services, build trust with potential clients, and generate leads through a clean, professional interface.

**Live Demo:** [https://kingfetson.github.io/Safitime-Cleaning-Premium-Residential-Commercial-Cleaning-Nairobi/](https://kingfetson.github.io/Safitime-Cleaning-Premium-Residential-Commercial-Cleaning-Nairobi/)

## 📁 Project Structure

```
safitime-cleaning/
├── index.html          # Main HTML structure
├── styles.css          # All CSS styles
├── script.js           # All JavaScript functionality
├── config.js           # Centralized configuration
├── README.md           # This file
└── assets/             # Images, fonts, and other media
```

## 🚀 Quick Start

### Option 1: Open Locally
1. Download or clone this repository
2. Open `index.html` in your web browser

### Option 2: Host on GitHub Pages
1. Create a new GitHub repository
2. Upload all files to the repository
3. Go to Settings > Pages
4. Select the main branch as the source
5. Your site will be live at `https://yourusername.github.io/repository-name/`

### Option 3: Host on Netlify/Vercel
1. Drag and drop the entire folder to Netlify Drop or Vercel
2. Your site will be live instantly

## 🛠️ Customization Guide

### 📝 Updating Business Information
Edit `config.js` to update:
- Company name, phone, email, address
- Social media links
- WhatsApp number
- SEO metadata


// Example: Update phone number
const CONFIG = {
    company: {
        phone: "0724810237",  // Change this to your number
        // ...
    }
};


### 🎨 Changing Colors
Edit the `:root` variables in `styles.css`:


:root {
    --primary: #0F766E;     /* Main brand color */
    --secondary: #14B8A6;   /* Secondary color */
    --accent: #F59E0B;      /* Accent color */
    --gold: #D4A843;        /* Gold accent */
}

### 📄 Updating Content
- **Hero section:** Edit lines 45-75 in `index.html`
- **Services:** Edit the service cards in the "Our Expertise" section
- **Testimonials:** Edit the testimonial cards in the "Reviews & Feedback" section
- **Pricing:** Edit the pricing cards in the "Choose Your Plan" section
- **FAQ:** Edit the FAQ items in the "Frequently Asked Questions" section

### 📸 Replacing Images
1. Add your images to the `assets/images/` folder
2. Update the `src` attributes in `index.html`:


<!-- Before -->
<img src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop" alt="Sofa and Carpet Cleaning" loading="lazy" />

<!-- After (replace with your local image) -->
<img src="assets/images/sofa-cleaning.jpg" alt="Sofa and Carpet Cleaning" loading="lazy" />


## 📱 Responsive Design

The website is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Features

- ✅ Fully responsive design
- ✅ Glassmorphism navigation bar
- ✅ Interactive before/after slider
- ✅ Animated statistics counter
- ✅ FAQ accordion with smooth animations
- ✅ Contact form with validation
- ✅ WhatsApp floating button
- ✅ Scroll-to-top button
- ✅ Mobile bottom CTA (Call, WhatsApp, Quote)
- ✅ Preloader animation
- ✅ Scroll progress indicator
- ✅ SEO optimized
- ✅ Schema.org structured data
- ✅ Open Graph / Twitter Cards support

## 📄 License

This website template is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Support

For support, email: [info@safitimecleaning.co.ke](mailto:info@safitimecleaning.co.ke) or call: 0724 810 237

---

**Built with ❤️ for Safitime Cleaning Services**
