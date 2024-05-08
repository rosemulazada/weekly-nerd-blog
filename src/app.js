// Core modules
const path = require("path");
const fs = require("fs");

// NPM modules
const express = require("express");
const marked = require("marked");

const app = express();
const port = process.env.PORT || 3000;

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
    res.render("index");
});

app.get("/weeklynerd", (req, res) => {
    res.render("weeklynerd");
});

app.get("/weeklynerd/:post", (req, res) => {
    let post = req.params.post;

    // Remove the ".md" extension if present
    if (post.endsWith(".md")) {
        post = post.slice(0, -3);
    }

    const markdownFilePath = path.join(weeklyNerdPostsPath, `${post}.md`);

    fs.readFile(markdownFilePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading file:", err);
            return res.status(500).send("Error reading file");
        }
        const html = marked.parse(data);
        res.render("weeklynerdpost", { html });
    });
});

app.get('/goals', (req, res) => {
    res.render('goals.ejs')
})

/**======================
 *          404
 *=======================**/

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

module.exports = app;
