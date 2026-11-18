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
                name: "House",
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
        subcategories: []
    },

    weather: {
        title: "Weather",
        description: "Explore motifs connected to weather.",
        subcategories: []
    },

    colours: {
        title: "Colours",
        description: "Explore motifs connected to colour.",
        subcategories: []
    },

    time: {
        title: "Time",
        description: "Explore motifs connected to time.",
        subcategories: []
    }

};

const categoryButtons = document.querySelectorAll(".category-card");

const categoryTitle = document.getElementById("category-title");
const categoryDescription = document.getElementById("category-description");
const subcategoryContainer = document.getElementById("subcategory-container");


function displayCategory(categoryName) {

    const category = categories[categoryName];

    // Update heading and description
    categoryTitle.textContent = category.title;
    categoryDescription.textContent = category.description;

    // Clear previous subcategories
    subcategoryContainer.innerHTML = "";

    // Create subcategory cards
    category.subcategories.forEach(subcategory => {

        const link = document.createElement("a");
        link.classList.add("subcategory-card");
        link.href = subcategory.link;

        link.innerHTML = `
            <img src="${subcategory.image}" alt="${subcategory.name}">
            <p>${subcategory.name}</p>
        `;

        subcategoryContainer.appendChild(link);

    });

    // Update selected category outline
    categoryButtons.forEach(button => {
        button.classList.remove("active");
    });

    document.querySelector(
        `[data-category="${categoryName}"]`
    ).classList.add("active");
}


// Add click events to category buttons
categoryButtons.forEach(button => {

    button.addEventListener("click", () => {

        const categoryName = button.dataset.category;

        displayCategory(categoryName);

    });

});


// Display Location when the page first loads
displayCategory("location");