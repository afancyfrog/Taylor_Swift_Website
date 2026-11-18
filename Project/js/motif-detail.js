
// ==========================================
// MOTIF DATA
// ==========================================

const motifs = {

    mall: {
        title: "The Mall",
        image: "images/mall.png",

        description:
            "Taylor Swift often uses a mall to convey themes of teenage nostalgia and innocence. The mall was a common place for teenagers to hang out.",

        physicalReleases: [
            {
                name: "Meet Me Behind The Mall",
                album: "Folklore",
                image: "images/meet-me-behind-the-mall.png",

                description:
                    "Named after the song August, referencing the lyric 'meet me behind the mall'. The phrase connects the physical release to the themes of nostalgia and youth explored in the album.",

                releaseDate: "2020",
                specialEdition: null,
                formats: ["CD"]
            }
        ],

        songTitles: [],

        lyrics: []
    },


    woods: {
        title: "The Woods",
        image: "images/woods.png",

        description:
            "Description for the woods motif.",

        physicalReleases: [],
        songTitles: [],
        lyrics: []
    },


    house: {
        title: "The House",
        image: "images/house.png",

        description:
            "Description for the house motif.",

        physicalReleases: [],
        songTitles: [],
        lyrics: []
    },


    hallway: {
        title: "The Hallway",
        image: "images/hallway.png",

        description:
            "Description for the hallway motif.",

        physicalReleases: [],
        songTitles: [],
        lyrics: []
    },


    beach: {
        title: "The Beach",
        image: "images/beach.png",

        description:
            "Description for the beach motif.",

        physicalReleases: [],
        songTitles: [],
        lyrics: []
    }

};


// ==========================================
// GET SELECTED MOTIF
// ==========================================

const params = new URLSearchParams(window.location.search);
const motifName = params.get("motif");

const motif = motifs[motifName];


// ==========================================
// LOAD MOTIF
// ==========================================

function loadMotif() {

    if (!motif) {
        document.querySelector(".motif-page").innerHTML = `
            <h1 class="empty-message">Motif not found</h1>
        `;

        document.title = "Motif Not Found";
        return;
    }

    // Update page title
    document.title = `${motif.title} | Taylor Swift Thematic Music Archive`;

    // Update hero
    document.getElementById("motif-title").textContent = motif.title;

    document.getElementById("motif-description").textContent =
        motif.description;

    const heroImage = document.getElementById("motif-hero-image");

    heroImage.src = motif.image;
    heroImage.alt = motif.title;


    // Load sections
    displayPhysicalReleases();
    displaySongTitles();
    displayLyrics();

}


// ==========================================
// EMPTY SECTION MESSAGE
// ==========================================

function displayEmptyMessage(container) {

    container.innerHTML = `
        <p class="empty-message">
            No information for this section
        </p>
    `;

}


// ==========================================
// PHYSICAL RELEASES
// ==========================================

function displayPhysicalReleases() {

    const container = document.getElementById("physical-releases");

    if (!motif.physicalReleases || motif.physicalReleases.length === 0) {
        displayEmptyMessage(container);
        return;
    }

    container.innerHTML = motif.physicalReleases.map(release => {

        const specialEdition =
            release.specialEdition === null
                ? "Not specified"
                : release.specialEdition
                    ? "Yes"
                    : "No";

        const formats =
            release.formats && release.formats.length > 0
                ? release.formats.join(" / ")
                : "Not specified";

        return `
            <article class="physical-release-card">

                <img
                    src="${release.image}"
                    alt="${release.name}"
                >

                <div class="physical-release-info">

                    <h3>${release.name}</h3>

                    <p class="release-album">
                        ${release.album}
                    </p>

                    <p class="release-description">
                        ${release.description}
                    </p>

                    <div class="release-details">

                        <p>
                            Release date:
                            ${release.releaseDate || "Not specified"}
                        </p>

                        <p>
                            Special edition:
                            ${specialEdition}
                        </p>

                        <p>
                            Format:
                            ${formats}
                        </p>

                    </div>

                </div>

            </article>
        `;

    }).join("");

}


// ==========================================
// SONG TITLES
// ==========================================

function displaySongTitles() {

    const container = document.getElementById("song-titles");

    if (!motif.songTitles || motif.songTitles.length === 0) {
        displayEmptyMessage(container);
        return;
    }

    container.innerHTML = motif.songTitles.map(song => {

        return `
            <article class="song-title-item">

                <h3>${song.title}</h3>

                <p>
                    ${song.album} · ${song.year}
                </p>

            </article>
        `;

    }).join("");

}


// ==========================================
// LYRICS
// ==========================================

function displayLyrics() {

    const container = document.getElementById("lyrics-list");

    if (!motif.lyrics || motif.lyrics.length === 0) {
        displayEmptyMessage(container);
        return;
    }

    container.innerHTML = motif.lyrics.map(lyric => {

        return `
            <article class="lyric-item">

                <p>
                    "${lyric.excerpt}"
                </p>

                <p class="lyric-source">
                    ${lyric.song} · ${lyric.album} · ${lyric.year}
                </p>

            </article>
        `;

    }).join("");

}


// ==========================================
// INITIALISE
// ==========================================

loadMotif();
