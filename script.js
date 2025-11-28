// ===========================
// Mobile Hamburger Menu Toggle
// ===========================

const hamburger = document.querySelector('.hamburger');
const navWrapper = document.querySelector('.nav-wrapper');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navWrapper.classList.toggle('active');
    document.body.style.overflow = navWrapper.classList.contains('active') ? 'hidden' : '';
});

// Close menu when clicking a link or quote button
document.querySelectorAll('.nav-link, .nav-quote-btn').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navWrapper.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navWrapper.contains(e.target) && !hamburger.contains(e.target)) {
        hamburger.classList.remove('active');
        navWrapper.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ===========================
// Smooth Scrolling Navigation
// ===========================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===========================
// Navbar Scroll Effect
// ===========================

const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add shadow when scrolled
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.3)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ===========================
// Active Navigation Link
// ===========================

const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    const navHeight = navbar.offsetHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (window.pageYOffset >= sectionTop &&
            window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = '';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = '#F0682D';
        }
    });
});

// ===========================
// Contact Form Handling
// ===========================

const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('form-status');

contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();

    // Get submit button
    const submitButton = contactForm.querySelector('button[type="submit"]');
    const originalButtonText = submitButton.textContent;

    // Disable button and show loading state
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    // Hide any previous status messages
    formStatus.style.display = 'none';

    try {
        // Get form data
        const formData = new FormData(contactForm);

        // Send to Web3Forms
        const response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            // Success message
            formStatus.innerHTML = '<p style="color: var(--primary-color); font-weight: bold;">✓ Thank you! Your message has been sent successfully. We\'ll get back to you within 24 hours.</p>';
            formStatus.style.display = 'block';

            // Reset form
            contactForm.reset();

            // Scroll to success message
            formStatus.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            // Error message
            formStatus.innerHTML = '<p style="color: #e74c3c; font-weight: bold;">✗ Oops! Something went wrong. Please try again or call us at (801) 520-9828.</p>';
            formStatus.style.display = 'block';
        }
    } catch (error) {
        // Network error
        formStatus.innerHTML = '<p style="color: #e74c3c; font-weight: bold;">✗ Network error. Please check your connection and try again, or call us at (801) 520-9828.</p>';
        formStatus.style.display = 'block';
    } finally {
        // Re-enable button
        submitButton.disabled = false;
        submitButton.textContent = originalButtonText;
    }
});

// ===========================
// Portfolio Item Animation
// ===========================

const portfolioItems = document.querySelectorAll('.portfolio-item');

// Add fade-in animation on scroll
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '0';
            entry.target.style.transform = 'translateY(30px)';

            setTimeout(() => {
                entry.target.style.transition = 'all 0.6s ease';
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, 100);

            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

portfolioItems.forEach(item => {
    observer.observe(item);
});

// ===========================
// Service Cards Animation
// ===========================

const serviceCards = document.querySelectorAll('.service-card');

const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';

                setTimeout(() => {
                    entry.target.style.transition = 'all 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 50);
            }, index * 100);

            serviceObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

serviceCards.forEach(card => {
    serviceObserver.observe(card);
});

// ===========================
// Lazy Loading Images
// ===========================

const images = document.querySelectorAll('img[loading="lazy"]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;

            // Create placeholder if image doesn't exist
            if (!img.complete || img.naturalHeight === 0) {
                img.style.backgroundColor = '#2C3E50';
                img.style.minHeight = '300px';
            }

            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// ===========================
// Mobile Menu Toggle (Future Enhancement)
// ===========================

// Uncomment and customize if you want a hamburger menu for mobile
/*
const navToggle = document.createElement('button');
navToggle.classList.add('nav-toggle');
navToggle.innerHTML = '☰';
navToggle.style.display = 'none';

if (window.innerWidth <= 768) {
    navbar.querySelector('.container').insertBefore(navToggle, document.querySelector('.nav-menu'));
    navToggle.style.display = 'block';
}

navToggle.addEventListener('click', () => {
    const navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
});
*/

// ===========================
// Initialize
// ===========================

console.log('CE Fab Co website loaded successfully!');
