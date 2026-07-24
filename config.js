/**
 * Safitime Cleaning - Website Configuration
 * Edit this file to update global website settings
 * All changes here will automatically reflect across the entire site
 */

const CONFIG = {
    // ============================================================
    // BUSINESS INFORMATION
    // ============================================================
    company: {
        name: "Safi Cleaning Services",
        shortName: "SAFI CLEANING",
        tagline: "Premium Residential & Commercial Cleaning Nairobi",
        description: "Safi Cleaning Services is Nairobi's trusted residential and commercial cleaning provider. Committed to delivering spotless environment transformations through safe eco-friendly practices.",
        phone: "0724810237",
        phoneFormatted: "0724 810 237",
        email: "info@safitimecleaning.co.ke",
        address: "Nairobi, Kenya",
        workingHours: "Monday – Saturday: 8:00 AM – 6:00 PM",
        year: new Date().getFullYear(),
        priceRange: "$$"
    },

    // ============================================================
    // SOCIAL MEDIA LINKS
    // ============================================================
    social: {
        facebook: "https://facebook.com/safitimecleaning",
        instagram: "https://instagram.com/safitimecleaning",
        twitter: "https://twitter.com/safitimeclean",
        linkedin: "https://linkedin.com/company/safitimecleaning"
    },

    // ============================================================
    // WHATSAPP SETTINGS
    // ============================================================
    whatsapp: {
        number: "254724810237",
        message: "Hello Safitime Cleaning, I would like to inquire about your services."
    },

    // ============================================================
    // HERO SECTION
    // ============================================================
    hero: {
        title: "Reliable Cleaning Services — Fast & Affordable",
        subtitle: "Fully Insured & Certified Cleaning Company.",
        description: "Trusted residential and commercial cleaning experts delivering spotless results using eco-friendly products and certified professionals.",
        ctaPrimary: "Get Free Quote",
        ctaSecondary: "Call Now"
    },

    // ============================================================
    // TRUST BADGES (Hero Section)
    // ============================================================
    trustBadges: [
        { icon: "star", label: "5.0 Google Rating" },
        { icon: "users", label: "1000+ Happy Clients" },
        { icon: "leaf", label: "Eco-Friendly Products" },
        { icon: "clock", label: "Same-Day Service" },
        { icon: "shield-check", label: "Licensed & Insured" }
    ],

    // ============================================================
    // FLOATING STATS (Hero Section)
    // ============================================================
    floatingStats: [
        { value: "10+", label: "Years Experience" },
        { value: "98%", label: "Satisfaction Rate" },
        { value: "50+", label: "Professional Team" }
    ],

    // ============================================================
    // STATISTICS SECTION
    // ============================================================
    statistics: [
        { target: 1000, label: "Homes Cleaned", suffix: "+" },
        { target: 500, label: "Businesses Served", suffix: "+" },
        { target: 10, label: "Years Experience", suffix: "+" },
        { target: 98, label: "Customer Satisfaction", suffix: "%" }
    ],

    // ============================================================
    // SERVICES
    // ============================================================
    services: [
        {
            id: "sofa-carpet",
            title: "Sofa & Carpet Cleaning",
            description: "Deep extraction, stain elimination, and steam sanitization for all fabric and leather upholstery.",
            image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=600&auto=format&fit=crop",
            icon: "armchair",
            price: "KES 2,500",
            features: [
                "Deep Steam Extraction",
                "Allergen & Dust Mite Removal",
                "Rapid Dry System"
            ]
        },
        {
            id: "post-construction",
            title: "Post-Construction Cleaning",
            description: "Removing fine drywall dust, paint overspray, mortar, and construction residue post-renovation.",
            image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?w=600&auto=format&fit=crop",
            icon: "hard-hat",
            price: "KES 10,000",
            features: [
                "Paint & Grout Residue Removal",
                "Detailed Surface Scrubbing",
                "Ready-for-Occupancy Finish"
            ]
        },
        {
            id: "move-in-out",
            title: "Move In / Move Out Cleaning",
            description: "Top-to-bottom detail cleaning ensuring seamless tenant transitions and full deposit refunds.",
            image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&auto=format&fit=crop",
            icon: "truck",
            price: "KES 6,000",
            features: [
                "Inside Cabinet & Appliance Cleaning",
                "Full Bathroom & Kitchen Scrub",
                "Window Tracks & Baseboards"
            ]
        },
        {
            id: "commercial-office",
            title: "Commercial Office Cleaning",
            description: "Recurring and daily office maintenance designed to promote workplace health and corporate image.",
            image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&auto=format&fit=crop",
            icon: "building",
            price: "Custom Quote",
            features: [
                "Custom Maintenance Schedules",
                "Desk & Electronics Sanitization",
                "Trash Management & Washrooms"
            ]
        },
        {
            id: "wooden-floor",
            title: "Wooden Floor Sanding & Polish",
            description: "Restoring hardwood, parquet, and bamboo floors to eliminate scratches and reinstate high-gloss brilliance.",
            image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&auto=format&fit=crop",
            icon: "layers",
            price: "KES 350/sqft",
            features: [
                "Dustless Sanding Process",
                "Premium Polyurethane Coating",
                "Scratch & Scuff Repair"
            ]
        },
        {
            id: "car-detailing",
            title: "Car Interior Detailing",
            description: "Deep interior restoration, roof liner treatment, carpet shampooing, and leather conditioning.",
            image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=600&auto=format&fit=crop",
            icon: "car",
            price: "KES 3,500",
            features: [
                "Stain & Odor Neutralization",
                "Roof Lining Deep Clean",
                "Leather Conditioning"
            ]
        }
    ],

    // ============================================================
    // TESTIMONIALS
    // ============================================================
    testimonials: [
        {
            name: "Wanjiku K.",
            location: "Kilimani, Nairobi",
            text: "Safitime Cleaning saved our tenancy deposit! Their move-out cleaning team arrived on time and made our apartment look brand new. The landlord was amazed.",
            image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop",
            rating: 5,
            verified: true
        },
        {
            name: "David O.",
            location: "Operations Director, Westlands",
            text: "We contracted them for our corporate offices in Westlands. Their team is punctual, reliable, and handles delicate office electronics with extreme care.",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop",
            rating: 5,
            verified: true
        },
        {
            name: "Amina M.",
            location: "Karen, Nairobi",
            text: "My velvet sofa had stubborn wine and coffee stains. Safitime restored it to pristine condition without damaging the material. Excellent work!",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop",
            rating: 5,
            verified: true
        }
    ],

    // ============================================================
    // PRICING PLANS
    // ============================================================
    pricing: [
        {
            name: "Basic",
            price: "KES 2,500",
            period: "/ session",
            savings: "Perfect for small spaces",
            features: [
                "2 rooms cleaning",
                "Standard equipment",
                "Eco-friendly products"
            ],
            featured: false
        },
        {
            name: "Standard",
            price: "KES 6,000",
            period: "/ session",
            savings: "Save 20% with monthly plan",
            features: [
                "4 rooms cleaning",
                "Deep steam cleaning",
                "Carpet & upholstery",
                "Satisfaction guarantee"
            ],
            featured: true,
            badge: "Most Popular"
        },
        {
            name: "Premium",
            price: "KES 10,000",
            period: "/ session",
            savings: "Best value for large homes",
            features: [
                "Full home cleaning",
                "Windows & floors",
                "Post-construction ready",
                "Priority scheduling"
            ],
            featured: false
        }
    ],

    // ============================================================
    // FAQ
    // ============================================================
    faq: [
        {
            question: "Do I need to supply cleaning products or equipment?",
            answer: "No. Safitime Cleaning comes fully equipped with heavy-duty steam extractors, industrial vacuums, scrubbers, and eco-friendly cleaning detergents. You don't need to provide anything."
        },
        {
            question: "Are your cleaning detergents safe for pets and children?",
            answer: "Yes, absolutely. We use non-toxic, eco-friendly, and biodegradable cleaning products that are completely safe for pets, infants, and allergy-sensitive family members."
        },
        {
            question: "How long does sofa or carpet drying take after deep cleaning?",
            answer: "Thanks to our high-suction extraction machinery, most sofas and carpets dry completely within 2 to 4 hours depending on room ventilation."
        },
        {
            question: "Do you offer same-day cleaning services in Nairobi?",
            answer: "Yes! We accommodate same-day bookings based on availability. Call us early in the morning to secure immediate deployment."
        },
        {
            question: "What regions in Nairobi do you cover?",
            answer: "We serve all major estates and areas including Westlands, Kilimani, Lavington, Karen, Kileleshwa, Muthaiga, Runda, Parklands, South B/C, Thika Road, and Machakos surroundings."
        }
    ],

    // ============================================================
    // AREAS WE SERVE
    // ============================================================
    areas: [
        "Westlands", "Kilimani", "Lavington", "Karen", "Kileleshwa",
        "Runda", "Muthaiga", "Parklands", "Gigiri", "South B/C",
        "Loresho", "Lang'ata"
    ],

    // ============================================================
    // TRUST ITEMS (Trust & Credibility Section)
    // ============================================================
    trustItems: [
        { icon: "star", label: "Google Rated 5.0" },
        { icon: "badge-check", label: "Verified Business" },
        { icon: "shield", label: "Fully Insured" },
        { icon: "leaf", label: "Eco Friendly" },
        { icon: "users", label: "Licensed Pros" },
        { icon: "thumbs-up", label: "Money Back Guarantee" }
    ],

    // ============================================================
    // SEO & METADATA
    // ============================================================
    seo: {
        title: "Safitime Cleaning · Premium Residential & Commercial Cleaning Nairobi",
        description: "Safitime Cleaning is Nairobi's premier eco-friendly cleaning company. Experience spotless homes and offices with our certified professionals.",
        canonical: "https://kingfetson.github.io/Safitime-Cleaning-Premium-Residential-Commercial-Cleaning-Nairobi/",
        ogImage: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1200&auto=format&fit=crop"
    },

    // ============================================================
    // COLORS (for reference/consistency)
    // ============================================================
    colors: {
        primary: "#0F766E",
        secondary: "#14B8A6",
        accent: "#F59E0B",
        gold: "#D4A843"
    }
};

// Auto-apply config to page when DOM is ready
document.addEventListener("DOMContentLoaded", function() {
    applyConfig();
});

/**
 * Apply configuration values to the page
 * This function updates all dynamic content based on CONFIG
 */
function applyConfig() {
    // Update business info
    const phoneElements = document.querySelectorAll('[data-phone]');
    phoneElements.forEach(el => {
        el.textContent = CONFIG.company.phoneFormatted;
        if (el.tagName === 'A') {
            el.href = `tel:${CONFIG.company.phone}`;
        }
    });

    // Update year in footer
    const yearElements = document.querySelectorAll('[data-year]');
    yearElements.forEach(el => {
        el.textContent = CONFIG.company.year;
    });

    // Update WhatsApp links
    document.querySelectorAll('[data-whatsapp]').forEach(el => {
        el.href = `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(CONFIG.whatsapp.message)}`;
    });

    // Update email links
    document.querySelectorAll('[data-email]').forEach(el => {
        el.href = `mailto:${CONFIG.company.email}`;
        if (el.tagName === 'A') {
            el.textContent = CONFIG.company.email;
        }
    });

    // Update social links
    document.querySelectorAll('[data-social]').forEach(el => {
        const platform = el.dataset.social;
        if (CONFIG.social[platform]) {
            el.href = CONFIG.social[platform];
        }
    });

    console.log('✅ Config applied successfully!');
    console.log(`🏢 ${CONFIG.company.name}`);
    console.log(`📞 ${CONFIG.company.phoneFormatted}`);
}

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
