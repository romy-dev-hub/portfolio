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

    // EmailJS form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Check if emailjs is loaded
    if (typeof emailjs === 'undefined') {
        console.error('EmailJS is not loaded');
        Toastify({
            text: "Email service not loaded. Please try again later.",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#ef4444",
        }).showToast();
        return;
    }

    emailjs.sendForm('service_a6aye4m', 'template_3ymoe94', this)
        .then(() => {
            Toastify({
                text: "Message sent! Thank you for reaching out",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#10b981",
            }).showToast();
            this.reset();
        })
        .catch(error => {
            console.error('EmailJS Error:', error);
            Toastify({
                text: "Oops! Something went wrong.",
                duration: 3000,
                gravity: "top",
                position: "right",
                backgroundColor: "#ef4444",
            }).showToast();
        });
    });
});