// code here ...

document.addEventListener("DOMContentLoaded", function() {
    const navBar = document.querySelector('.nav-bar');
    const heading = document.getElementById('greeting');
    const subtitle = document.getElementById('subtitle');

    // Show the navigation bar and heading when the page loads
    setTimeout(() => {
        navBar.style.opacity = '1'; // Fade in the navigation bar
        heading.style.opacity = '1'; // Fade in the heading
        subtitle.style.opacity = '1'; // Fade in the subtitle
        subtitle.style.transform = 'translateY(0)'; // Move to original position
    }, 1000); // Delay for effect


    // Scroll animation for navigation links
    const navLinks = document.querySelectorAll('.nav-bar ul li a');
    navLinks.forEach(link => {
        link.addEventListener('mouseover', () => {
            link.style.transform = 'scale(1.1)'; // Scale up on hover
        });
        link.addEventListener('mouseout', () => {
            link.style.transform = 'scale(1)'; // Scale back down
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector(".container");
    const descriptionBox = document.querySelector(".description-box");

    // Show the description box with slide-in effect after the page loads
    setTimeout(() => {
        descriptionBox.classList.add("show");
    }, 500); // Delay to allow the fade-in effect to complete

    document.getElementById("animateButton").addEventListener("click", function() {
        container.classList.add("animate");

        setTimeout(() => {
            container.classList.remove("animate");
        }, 500);
    });

    // deepseek addition
    // Scroll animation for skills and projects
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('project-card')) {
                    entry.target.classList.add('visible');
                }
            }
        });
    }, observerOptions);

    // Observe project cards
    document.querySelectorAll('.project-card').forEach(card => {
        observer.observe(card);
    });

    // Observe skill items (if needed)
    document.querySelectorAll('.skill-item').forEach(item => {
        observer.observe(item);
    });

});

//deepseek addition