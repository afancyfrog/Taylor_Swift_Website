
const transitionOverlay = document.querySelector(".page-transition");

// Initial page reveal
window.addEventListener("load", () => {

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(transitionOverlay, { xPercent: 100 });
        return;
    }

    gsap.set(transitionOverlay, { xPercent: 0 });

    gsap.to(transitionOverlay, {
        xPercent: 100,
        duration: 0.8,
        ease: "power3.inOut"
    });

});

// Page navigation transition
document.addEventListener("click", (event) => {

    const link = event.target.closest("a");

    if (!link) return;

    // Ignore external links and special links
    if (
        link.target === "_blank" ||
        link.hasAttribute("download") ||
        link.getAttribute("href")?.startsWith("#") ||
        event.ctrlKey ||
        event.metaKey ||
        event.shiftKey ||
        event.altKey
    ) {
        return;
    }

    const destination = new URL(link.href, window.location.href);

    if (destination.origin !== window.location.origin) {
        return;
    }

    // Ignore the current page
    if (destination.href === window.location.href) {
        return;
    }

    event.preventDefault();

    // Skip animation for reduced motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        window.location.href = destination.href;
        return;
    }

    // Cover the current page
    gsap.set(transitionOverlay, {
        xPercent: -100
    });

    gsap.to(transitionOverlay, {
        xPercent: 0,
        duration: 0.8,
        ease: "power3.inOut",
        onComplete: () => {
            window.location.href = destination.href;
        }
    });

});
