const transitionOverlay = document.querySelector(".page-transition");

if (transitionOverlay) {

    // REVEAL PAGE ON LOAD
    window.addEventListener("load", () => {

        gsap.to(transitionOverlay, {
            opacity: 0,
            duration: 0.6,
            ease: "power1.out"
        });

    });


    // FADE OUT WHEN NAVIGATING
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
            opacity: 1,
            duration: 0.6,
            ease: "power1.inOut",

            onComplete: () => {
                window.location.href = destination.href;
            }
        });

    });

}