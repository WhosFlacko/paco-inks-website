/* ============================================
   PACO.INKS — JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {

    // ---- Mobile Navigation ----
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu on link click
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // ---- Navbar Scroll Effect ----
    const navbar = document.getElementById('navbar');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });

    // ---- Portfolio Filter ----
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;

            portfolioItems.forEach(item => {
                if (filter === 'all' || item.dataset.category.includes(filter)) {
                    item.style.display = '';
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    requestAnimationFrame(() => {
                        item.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    });
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });

    // ---- Lightbox ----
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightboxImage');
    const lightboxClose = document.querySelector('.lightbox-close');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    let currentImageIndex = 0;
    let images = [];

    // Collect all portfolio images (when real images are added)
    function updateImageList() {
        images = Array.from(document.querySelectorAll('.portfolio-item img'));
    }

    document.querySelectorAll('.portfolio-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            const img = item.querySelector('img');
            if (img) {
                updateImageList();
                currentImageIndex = images.indexOf(img);
                lightboxImage.src = img.src;
                lightboxImage.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            }
        });
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    }

    lightboxClose.addEventListener('click', closeLightbox);

    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });

    lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        if (images.length > 0) {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            lightboxImage.src = images[currentImageIndex].src;
        }
    });

    lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        if (images.length > 0) {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            lightboxImage.src = images[currentImageIndex].src;
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') lightboxPrev.click();
        if (e.key === 'ArrowRight') lightboxNext.click();
    });

    // ---- Scroll Animations ----
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Add fade-in to sections
    document.querySelectorAll('.section-label, .section-title, .section-desc, .about-content p, .about-stats, .about-image, .portfolio-filter, .portfolio-grid, .aftercare-card, .flash-item, .contact-info, .contact-form-wrapper').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });

    // ---- Contact Form ----
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // For now, create a mailto link with the form data
        const subject = encodeURIComponent(`Tattoo Inquiry from ${data.name}`);
        const body = encodeURIComponent(
            `Name: ${data.name}\n` +
            `Email: ${data.email}\n` +
            `Phone: ${data.phone || 'Not provided'}\n` +
            `Placement: ${data.placement}\n` +
            `Size: ${data.size || 'Not specified'}\n` +
            `Reference: ${data.reference || 'None'}\n\n` +
            `Tattoo Idea:\n${data.description}`
        );

        // Show success message
        const btn = contactForm.querySelector('.btn');
        const originalText = btn.textContent;
        btn.textContent = 'Request Sent!';
        btn.style.background = '#333';
        btn.style.color = '#fff';

        // Open email client
        window.location.href = `mailto:paco.inks@email.com?subject=${subject}&body=${body}`;

        setTimeout(() => {
            btn.textContent = originalText;
            btn.style.background = '';
            btn.style.color = '';
            contactForm.reset();
        }, 3000);
    });

    // ---- Smooth reveal on load ----
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });

});
