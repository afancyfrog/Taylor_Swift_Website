
const transitionOverlay = document.querySelector(".page-transition");

if (transitionOverlay) {

    // PAGE LOAD: Reveal the new page
    window.addEventListener("load", () => {

        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            gsap.set(transitionOverlay, { xPercent: 100 });
            return;
        }

        // Start with the screen covered
        gsap.set(transitionOverlay, { xPercent: 0 });

        // Swipe away to reveal the page
        gsap.to(transitionOverlay, {
            xPercent: 100,
            duration: 0.8,
            ease: "power3.inOut"
        });

    });


    // PAGE EXIT: Cover the current page
    document.addEventListener("click", (event) => {

        const link = event.target.closest("a");

        if (!link) return;

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

        if (destination.origin !== window.location.origin) return;
        if (destination.href === window.location.href) return;

        event.preventDefault();

        // Skip animation if reduced motion is preferred
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            window.location.href = destination.href;
            return;
        }

        // Swipe black across the current page
        gsap.set(transitionOverlay, { xPercent: -100 });

        gsap.to(transitionOverlay, {
            xPercent: 0,
            duration: 0.8,
            ease: "power3.inOut",

            onComplete: () => {
                window.location.href = destination.href;
            }
        });

    });

}