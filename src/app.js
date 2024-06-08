// Core modules
const path = require("path");
const fs = require("fs");

// NPM modules
const express = require("express");
const marked = require("marked");

const app = express();
const port = process.env.PORT || 2324;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const weeklyNerdPostsPath = path.join(__dirname, "../public/posts/weeklynerds");

// Setup EJS engine and views location
app.set("view engine", "ejs");
app.set("views", viewsPath);
app.set("partials", partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

/**========================================================================
 *                           CODE START
 *========================================================================**/

/**============================================
 *                   ROUTING
 *=============================================**/

app.get("", (req, res) => {
    res.render("newindex");
});

app.get("/goals", (req, res) => {
    res.render("goals.ejs");
});

app.get("/weeklynerd/:post", async (req, res) => {
    try {
        const post = req.params.post;

        const markdownFilePath = path.join(weeklyNerdPostsPath, `${post}.md`);

        const [markdownData, metadata] = await Promise.all([
            fs.promises.readFile(markdownFilePath, "utf8"),
            fetch(
                `https://raw.githubusercontent.com/rosemulazada/weeklynerddatabase/main/${post}.json`
            ).then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Failed to fetch ${post}.json from GitHub: ${response.statusText}`
                    );
                }
                return response.json();
            }),
        ]);

        const blogPost = marked.parse(markdownData);
        console.log("METADATA:", metadata);
        res.render("weeklynerd", { blogPost, metadata });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

/*======================
 *          404
 *======================**/

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

module.exports = app;
