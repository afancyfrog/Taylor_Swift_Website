
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const rateLimit = require("express-rate-limit");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Check that the API token exists
if (!process.env.DISCOGS_TOKEN) {
    console.error("Missing Discogs token!");
    process.exit(1);
}

// Allowed website origins
const allowedOrigins = [
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    ...(process.env.FRONTEND_ORIGIN || "")
        .split(",")
        .map(origin => origin.trim())
        .filter(Boolean)
];

// Configure CORS
app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Origin not allowed"));
        }
    }
}));

// Limit API requests
const apiLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 60,
    standardHeaders: true,
    legacyHeaders: false
});

app.use("/api/", apiLimiter);

// Search Discogs for a physical release
app.get("/api/discogs/search", async (req, res) => {
    try {
        const { searchTerm, album } = req.query;

        if (
            typeof searchTerm !== "string" ||
            typeof album !== "string" ||
            !searchTerm.trim() ||
            !album.trim() ||
            searchTerm.length > 120 ||
            album.length > 120
        ) {
            return res.status(400).json({
                error: "Invalid search information"
            });
        }

        const params = new URLSearchParams({
            q: `${searchTerm} ${album}`,
            artist: "Taylor Swift",
            type: "release",
            per_page: "10"
        });

        const response = await fetch(
            `https://api.discogs.com/database/search?${params}`,
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
        console.error("Search error:", error.message);

        res.status(500).json({
            error: "Unable to search Discogs"
        });
    }
});

// Retrieve full information for one release
app.get("/api/discogs/releases/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!/^\d+$/.test(id)) {
            return res.status(400).json({
                error: "Invalid release ID"
            });
        }

        const response = await fetch(
            `https://api.discogs.com/releases/${id}`,
            {
                headers: {
                    "Authorization": `Discogs token=${process.env.DISCOGS_TOKEN}`,
                    "User-Agent": "TaylorSwiftArchive/1.0"
                }
            }
        );

        if (!response.ok) {
            return res.status(response.status).json({
                error: "Unable to retrieve release details"
            });
        }

        const data = await response.json();

        res.json(data);

    } catch (error) {
        console.error("Release error:", error.message);

        res.status(500).json({
            error: "Unable to retrieve release"
        });
    }
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend running on port ${PORT}`);
});
