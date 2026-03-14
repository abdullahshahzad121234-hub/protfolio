document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize Lucide Icons
    lucide.createIcons();

    // 2. ScrollReveal Animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '40px',
        duration: 1000,
        delay: 200,
        reset: false
    });

    // Animate Hero Section
    sr.reveal('.hero-content', { origin: 'left', delay: 300 });
    sr.reveal('.hero-image-container', { origin: 'right', delay: 400 });

    // Animate Titles and About
    sr.reveal('.section-title', { delay: 200 });
    sr.reveal('.about-content', { delay: 300 });

    // Animate Cards with staggering effect
    sr.reveal('.service-card', { interval: 150 });
    sr.reveal('.project-card', { interval: 200 });
    sr.reveal('.step', { interval: 100 });

    // Animate Contact Form
    sr.reveal('.contact-card', { duration: 1200 });

    // 3. Simple Form Submission Handling (Prevent Default)
    const form = document.querySelector('.contact-form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you, Muhammad Abdullah or Interface Lab will contact you soon!');
            form.reset();
        });
    }

    // 4. Smooth Scroll for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
