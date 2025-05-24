document.addEventListener("DOMContentLoaded", function() {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', (e) => {
        e.stopPropagation(); // Prevent click from bubbling to document
        navLinks.classList.toggle('open');
        hamburger.classList.toggle('active'); // Optional: Add active class for styling
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navLinks.contains(e.target) && !hamburger.contains(e.target) && navLinks.classList.contains('open')) {
            navLinks.classList.remove('open');
            hamburger.classList.remove('active');
        }
    });

    // Smooth scrolling and close menu on link click
    const navItems = document.querySelectorAll('.nav-links ul li a');
    navItems.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
            navLinks.classList.remove('open'); // Close menu on mobile
            hamburger.classList.remove('active');
        });
    });

    // Typing animation for subtitle
    const subtitle = document.querySelector('.subtitle');
    const text = subtitle.textContent;
    subtitle.textContent = '';
    let i = 0;
    function type() {
        if (i < text.length) {
            subtitle.textContent += text.charAt(i);
            i++;
            setTimeout(type, 50);
        }
    }
    setTimeout(type, 2000);

    // IntersectionObserver for project cards and skills
    const observerOptions = {
        threshold: 0.2,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 100); // Staggered animation
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .skill-item').forEach(item => {
        observer.observe(item);
    });

    // Contact form submission with Toastify
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        Toastify({
            text: "Message sent! Thank you for reaching out",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#10b981",
        }).showToast();
        form.reset();
    });
});