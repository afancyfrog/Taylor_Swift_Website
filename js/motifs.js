const categories = {

    location: {
        title: "Location",
        description: "Taylor Swift often uses physical locations as metaphors/manifestations of her emotional well-being. She also uses locations to mark significant moments in her life and relationships.",

        subcategories: [
            {
                name: "Woods",
                image: "images/woods.png",
                link: "motifs/woods.html"
            },
            {
                name: "Resturaunt",
                image: "images/house.png",
                link: "motifs/house.html"
            },
            {
                name: "Mall",
                image: "images/mall.png",
                link: "motifs/mall.html"
            },
            {
                name: "Hallway",
                image: "images/hallway.png",
                link: "motifs/hallway.html"
            },
            {
                name: "Beach",
                image: "images/beach.png",
                link: "motifs/beach.html"
            }
        ]
    },

    space: {
        title: "Space",
        description: "Explore motifs connected to space.",
        subcategories: 
        [
             {
                name: "Moon",
                image: "images/moon.png",
                link: "motifs/moon.html"
            },
            {
                name: "Starry Eyes",
                image: "images/starryeyes.png",
                link: "motifs/starryeyes.html"
            }
        ]
    },

    weather: {
        title: "Weather",
        description: "Explore motifs connected to weather.",
        subcategories: 
        [
               {
                name: "Sunshine",
                image: "images/sunshine.png",
                link: "motifs/sunshine.html"
            },
            {
                name: "Rain",
                image: "images/rain.png",
                link: "motifs/rain.html"
            },
            {
                name: "Clouds",
                image: "images/clouds.png",
                link: "motifs/clouds.html"
            }
        ]
    },

    colours: {
        title: "Colours",
        description: "Explore motifs connected to colour.",
        subcategories: 
        [
                {
                name: "Pink",
                image: "images/pink.png",
                link: "motifs/pink.html"
            },
            {
                name: "Blue",
                image: "images/blue.png",
                link: "motifs/blue.html"
            },
            {
                name: "Red",
                image: "images/red.png",
                link: "motifs/red.html"
            },
            {
                name: "Green",
                image: "images/green.png",
                link: "motifs/green.html"
            }
        ]
    },

    time: {
        title: "Time",
        description: "Explore motifs connected to time.",
        subcategories: [
                 {
                name: "3 AM",
                image: "images/3am.png",
                link: "motifs/3am.html"
            },
            {
                name: "1950s",
                image: "images/1950s.png",
                link: "motifs/1950s.html"
            }
            
        ]
    }

};

const categoryButtons = document.querySelectorAll(".category-card");

const categoryTitle = document.getElementById("category-title");
const categoryDescription = document.getElementById("category-description");
const subcategoryContainer = document.getElementById("subcategory-container");
const panel = document.getElementById("category-panel");

let isAnimating = false;


// UPDATE THE PANEL CONTENT
function updateCategory(categoryName) {
    const category = categories[categoryName];

    categoryTitle.textContent = category.title;
    categoryDescription.textContent = category.description;

    subcategoryContainer.innerHTML = "";

    category.subcategories.forEach(subcategory => {

        const link = document.createElement("a");
        link.classList.add("subcategory-card");

        // Generate the URL for the motif page
        const slug = subcategory.name
            .toLowerCase()
            .trim()
            .replace(/\s+/g, "-");

        link.href = `motif.html?motif=${slug}`;

        link.innerHTML = `
            <img src="${subcategory.image}" alt="${subcategory.name}">
            <p>${subcategory.name}</p>
        `;

        subcategoryContainer.appendChild(link);
    });
}


// DISPLAY A CATEGORY WITH ANIMATION

function displayCategory(categoryName) {

    if (isAnimating) return;

    const category = categories[categoryName];

    if (!category) return;

    isAnimating = true;

    // Update selected category outline
    categoryButtons.forEach(button => {
        button.classList.toggle(
            "active",
            button.dataset.category === categoryName
        );
    });

    // Slide current panel upwards and fade out
    gsap.to(panel, {
        y: -40,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",

        onComplete: () => {

            // Update panel content
            updateCategory(categoryName);

            // Position panel above its original position
            gsap.set(panel, {
                y: -40
            });

            // Slide new panel down and fade in
            gsap.to(panel, {
                y: 0,
                opacity: 1,
                duration: 0.5,
                ease: "power2.out",

                onComplete: () => {
                    isAnimating = false;
                }
            });

        }
    });

}



// CATEGORY BUTTON CLICK EVENTS
categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const categoryName = button.dataset.category;

        displayCategory(categoryName);

    });

});


// INITIAL CATEGORY (WITHOUT ANIMATION)
updateCategory("location");

categoryButtons.forEach(button => {
    button.classList.toggle(
        "active",
        button.dataset.category === "location"
    );
});