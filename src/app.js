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
const weeklyNerdMetadataPath = path.join(
    __dirname,
    "../public/data/weeklynerds"
);

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

app.get("/weeklynerd", (req, res) => {
    res.render("weeklynerd");
});

app.get("/weeklynerd/:post", (req, res) => {
    let post = req.params.post;
    let postJson = req.params.post;

    const markdownFilePath = path.join(weeklyNerdPostsPath, `${post}.md`);
    const jsonFilePath = path.join(weeklyNerdMetadataPath, `${post}.json`);

    Promise.all([
        new Promise((resolve, reject) => {
            fs.readFile(markdownFilePath, "utf8", (err, data) => {
                if (err) {
                    console.error("Error reading markdown file:", err);
                    reject(err);
                    return;
                }
                resolve(data);
            });
        }),
        new Promise((resolve, reject) => {
            fs.readFile(jsonFilePath, "utf8", (err, data) => {
                if (err) {
                    console.error("Error reading JSON file:", err);
                    reject(err);
                    return;
                }
                resolve(JSON.parse(data));
            });``
        }),
    ])
        .then(([markdownData, jsonData]) => {
            const html = marked.parse(markdownData);
            res.render("weeklynerdpost", { html, json: jsonData });
        })
        .catch((err) => {
            console.error("Error reading file:", err);
            res.status(500).send("Error reading file");
        });
});

app.get("/goals", (req, res) => {
    res.render("goals.ejs");
});

/*======================
 *          404
 *======================**/

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});

module.exports = app;
