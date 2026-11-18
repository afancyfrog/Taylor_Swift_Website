function updateHeadingColours() {

    const headings = document.querySelectorAll(".split-heading");

    headings.forEach(heading => {

        const section = heading.closest("section");
        const image = section?.querySelector("img");

        if (!image) return;

        // Only create character spans once
        if (!heading.dataset.split) {

            const text = heading.textContent;
            heading.textContent = "";

            [...text].forEach(letter => {
                const span = document.createElement("span");
                span.textContent = letter;
                heading.appendChild(span);
            });

            heading.dataset.split = "true";
        }

        const imageRect = image.getBoundingClientRect();

        // Check each individual letter
        heading.querySelectorAll("span").forEach(letter => {

            const letterRect = letter.getBoundingClientRect();

            // Calculate the overlapping area
            const overlapLeft = Math.max(letterRect.left, imageRect.left);
            const overlapRight = Math.min(letterRect.right, imageRect.right);

            const overlapTop = Math.max(letterRect.top, imageRect.top);
            const overlapBottom = Math.min(letterRect.bottom, imageRect.bottom);

            const overlapWidth = Math.max(0, overlapRight - overlapLeft);
            const overlapHeight = Math.max(0, overlapBottom - overlapTop);

            const overlapArea = overlapWidth * overlapHeight;

            const letterArea = letterRect.width * letterRect.height;

            // Require at least 50% of the letter to overlap
            const overlapPercentage = letterArea > 0
                ? overlapArea / letterArea
                : 0;

            if (overlapPercentage >= 0.5) {
                letter.style.color = "white";
            } else {
                letter.style.color = "black";
            }

        });

    });

}


// Update after the page loads
window.addEventListener("load", updateHeadingColours);

// Update when the browser is resized
window.addEventListener("resize", updateHeadingColours);

// Update after fonts finish loading
document.fonts.ready.then(updateHeadingColours);