document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.querySelector('.nav-bar');
    const heading = document.getElementById('greeting');
    const subtitle = document.querySelector('.subtitle');
    const descriptionBox = document.querySelector('.description-box');

    // Fade in navigation, heading, subtitle, and description
    setTimeout(() => {
        navBar.style.opacity = '1';
        heading.style.opacity = '1';
        subtitle.style.opacity = '1';
        subtitle.style.transform = 'translateY(0)';
        descriptionBox.classList.add('show');
    }, 500);

    // Smooth scrolling and hover effects for nav links
    const navLinks = document.querySelectorAll('.nav-bar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
        });
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)';
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)';
        });
    });

    // IntersectionObserver for project cards and skills
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.project-card, .skill-item').forEach(item => {
        observer.observe(item);
    });

    // Contact form submission
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Message sent! (This is a placeholder. Add backend logic later.)');
        form.reset();
    });
});