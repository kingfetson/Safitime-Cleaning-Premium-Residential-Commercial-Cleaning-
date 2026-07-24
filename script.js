/**
 * Safitime Cleaning - Main Application Script
 * Handles all interactive functionality
 */

document.addEventListener("DOMContentLoaded", () => {
    // Initialize Lucide Icons
    if (window.lucide) lucide.createIcons();

    // Preloader
    const preloader = document.getElementById("preloader");
    if (preloader) {
        window.addEventListener("load", () => preloader.classList.add("fade-out"));
        setTimeout(() => preloader.classList.add("fade-out"), 1000);
    }

    // Navbar scroll effect
    const navbar = document.getElementById("navbar");
    const scrollProgress = document.getElementById("scrollProgress");
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    window.addEventListener("scroll", () => {
        const winScroll = document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        if (scrollProgress) scrollProgress.style.width = `${scrolled}%`;

        if (winScroll > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }

        if (winScroll > 400) {
            scrollTopBtn.classList.add("active");
        } else {
            scrollTopBtn.classList.remove("active");
        }
    });

    // Scroll to top
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Mobile menu toggle
    const mobileToggle = document.getElementById("mobileToggle");
    const mobileMenu = document.getElementById("mobileMenu");
    if (mobileToggle && mobileMenu) {
        mobileToggle.addEventListener("click", () => {
            mobileMenu.classList.toggle("open");
            const icon = mobileToggle.querySelector("i");
            if (icon) {
                icon.setAttribute("data-lucide", mobileMenu.classList.contains("open") ? "x" : "menu");
                if (window.lucide) lucide.createIcons();
            }
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll(".mobile-menu .nav-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileMenu.classList.remove("open");
            const icon = mobileToggle.querySelector("i");
            if (icon) {
                icon.setAttribute("data-lucide", "menu");
                if (window.lucide) lucide.createIcons();
            }
        });
    });

    // Reveal animations
    const reveals = document.querySelectorAll(".reveal-up");
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });
    reveals.forEach(el => revealObserver.observe(el));

    // Before & After Slider
    const container = document.getElementById("baContainer");
    const beforeWrapper = document.getElementById("baBeforeWrapper");
    const handle = document.getElementById("baHandle");

    if (container && beforeWrapper && handle) {
        let isSliding = false;

        const setSliderPosition = (x) => {
            const rect = container.getBoundingClientRect();
            let offsetX = x - rect.left;
            if (offsetX < 0) offsetX = 0;
            if (offsetX > rect.width) offsetX = rect.width;
            const percentage = (offsetX / rect.width) * 100;
            beforeWrapper.style.width = `${percentage}%`;
            handle.style.left = `${percentage}%`;
        };

        const onMove = (e) => {
            if (!isSliding) return;
            const pageX = e.touches ? e.touches[0].pageX : e.pageX;
            setSliderPosition(pageX);
        };

        handle.addEventListener("mousedown", () => isSliding = true);
        window.addEventListener("mouseup", () => isSliding = false);
        window.addEventListener("mousemove", onMove);

        handle.addEventListener("touchstart", () => isSliding = true);
        window.addEventListener("touchend", () => isSliding = false);
        window.addEventListener("touchmove", onMove);
    }

    // Counter Animation
    const statNumbers = document.querySelectorAll(".stat-number");
    let hasAnimated = false;

    const animateCounters = () => {
        statNumbers.forEach(counter => {
            const target = +counter.getAttribute("data-target");
            const duration = 2000;
            const stepTime = 20;
            const steps = duration / stepTime;
            const increment = target / steps;
            let current = 0;

            const timer = setInterval(() => {
                current += increment;
                if (current >= target) {
                    counter.textContent = target;
                    clearInterval(timer);
                } else {
                    counter.textContent = Math.ceil(current);
                }
            }, stepTime);
        });
    };

    const statsSection = document.querySelector(".stats-section");
    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                hasAnimated = true;
                animateCounters();
            }
        }, { threshold: 0.4 });
        statsObserver.observe(statsSection);
    }

    // FAQ Accordion
    const faqItems = document.querySelectorAll(".faq-item");
    faqItems.forEach(item => {
        const trigger = item.querySelector(".faq-trigger");
        const content = item.querySelector(".faq-content");

        trigger.addEventListener("click", () => {
            const isActive = item.classList.contains("active");
            faqItems.forEach(otherItem => {
                otherItem.classList.remove("active");
                const otherContent = otherItem.querySelector(".faq-content");
                if (otherContent) otherContent.style.maxHeight = null;
            });
            if (!isActive) {
                item.classList.add("active");
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });

    // Booking Form
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();
            const submitBtn = bookingForm.querySelector("button[type='submit']");
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = `<span>Processing...</span>`;
            setTimeout(() => {
                alert("Thank you! Your quote request has been received. Our team will contact you within 15 minutes.");
                bookingForm.reset();
                submitBtn.disabled = false;
                submitBtn.innerHTML = originalText;
            }, 1500);
        });
    }

    // Newsletter
    const newsletterForm = document.getElementById("newsletterForm");
    if (newsletterForm) {
        newsletterForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("Thanks for subscribing! You'll receive our latest updates and offers.");
            newsletterForm.reset();
        });
    }

    // Ripple effect on buttons
    document.querySelectorAll('.btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const ripple = document.createElement('span');
            ripple.className = 'ripple';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.width = ripple.style.height = '20px';
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    });
});
