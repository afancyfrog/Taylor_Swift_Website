const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config();

const app = express();
const PORT = 3000;

// Serve your website files
app.use(express.static(__dirname));

// Discogs API search
app.get("/api/discogs/search", async (req, res) => {
    try {
        const { searchTerm, album } = req.query;

        if (!searchTerm || !album) {
            return res.status(400).json({
                error: "Missing search information"
            });
        }

        const query = new URLSearchParams({
            q: `${searchTerm} ${album}`,
            artist: "Taylor Swift",
            type: "release",
            per_page: "5"
        });

        const response = await fetch(
            `https://api.discogs.com/database/search?${query}`,
            {
                headers: {
                    "Authorization": `Discogs token=${process.env.DISCOGS_TOKEN}`,
                    "User-Agent": "TaylorSwiftArchive/1.0"
                }
            }
        );

        if (!response.ok) {
            return res.status(response.status).json({
                error: "Discogs search failed"
            });
        }

        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.error("Discogs error:", error);

        res.status(500).json({
            error: "Unable to connect to Discogs"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Website running at http://localhost:${PORT}`);
});