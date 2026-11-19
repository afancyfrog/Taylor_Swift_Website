// REGISTER PLUGINS
gsap.registerPlugin(ScrollTrigger);


// BACKGROUND PARALLAX
gsap.to(".parallax-background", {
    y: 150,
    ease: "none",

    scrollTrigger: {
        trigger: document.documentElement,
        start: "top top",
        end: () => ScrollTrigger.maxScroll(window),
        scrub: 1
    }
});

// Find all sections that should animate
const sections = document.querySelectorAll("section");

// Detect when sections enter the screen
const observer = new IntersectionObserver((entries, observer) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            // Animate the section using GSAP
            gsap.to(entry.target, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out"
            });

            // Stop observing once it has animated
            observer.unobserve(entry.target);
        }

    });

}, {
    threshold: 0.15
});


// Set initial appearance and observe each section
sections.forEach(section => {

    gsap.set(section, {
        opacity: 0,
        y: 40
    });

    observer.observe(section);

});

