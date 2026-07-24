/**
 * Safitime Cleaning - Website Configuration
 * Edit this file to update global website settings
 */

const CONFIG = {
    // Business Information
    company: {
        name: "Safitime Cleaning Services",
        tagline: "Premium Residential & Commercial Cleaning Nairobi",
        phone: "0724810237",
        email: "info@safitimecleaning.co.ke",
        address: "Nairobi, Kenya",
        workingHours: "Monday – Saturday: 8:00 AM – 6:00 PM",
        year: new Date().getFullYear()
    },

    // Social Media Links
    social: {
        facebook: "#",
        instagram: "#",
        twitter: "#",
        linkedin: "#"
    },

    // WhatsApp Settings
    whatsapp: {
        number: "254724810237",
        message: "Hello Safitime Cleaning, I would like to inquire about your services."
    },

    // SEO & Metadata
    seo: {
        title: "Safitime Cleaning · Premium Residential & Commercial Cleaning Nairobi",
        description: "Safitime Cleaning is Nairobi's premier eco-friendly cleaning company. Experience spotless homes and offices with our certified professionals.",
        canonical: "https://kingfetson.github.io/Safitime-Cleaning-Premium-Residential-Commercial-Cleaning-Nairobi/",
        ogImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop"
    },

    // Colors (for consistency)
    colors: {
        primary: "#0F766E",
        secondary: "#14B8A6",
        accent: "#F59E0B",
        gold: "#D4A843"
    }
};

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
