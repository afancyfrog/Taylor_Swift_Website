const transitionOverlay = document.querySelector(".page-transition");

if (transitionOverlay) {

    // PAGE LOAD
    window.addEventListener("load", () => {

        gsap.set(transitionOverlay, {
            xPercent: 0
        });

        gsap.to(transitionOverlay, {
            xPercent: 100,
            duration: 0.7,
            ease: "power2.inOut"
        });

    });


    // PAGE EXIT
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
        ) return;

        const destination = new URL(link.href, window.location.href);

        if (destination.origin !== window.location.origin) return;
        if (destination.href === window.location.href) return;

        event.preventDefault();

        gsap.to(transitionOverlay, {
            xPercent: 0,
            duration: 0.7,
            ease: "power2.inOut",
            onComplete: () => {
                window.location.href = destination.href;
            }
        });

    });

}