// Core modules
import fs from 'fs';
import { promises as fsPromises } from 'fs';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// NPM modules
import express from 'express';
import * as marked from 'marked';
import readingTime from 'reading-time';

const app = express();
const port = process.env.PORT || 2324;

const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");
const weeklyNerdPostsPath = path.join(__dirname, "../public/posts/weeklynerds");
const metadataFolderPath = path.join(__dirname, "../public/posts/metadata");

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

app.get('/', (_req, res) => {
    res.render('index');
})

app.get("/goals", (_req, res) => {
    res.render("goals.ejs");
});

app.get('/weeklynerd', async (_req, res) => {
  try {
    const files = await fsPromises.readdir(metadataFolderPath);
    const jsonFiles = files.filter(file => path.extname(file).toLowerCase() === '.json');
    const metadata = await Promise.all(jsonFiles.map(async file => {
      const filePath = path.join(metadataFolderPath, file);
      const fileContents = await fsPromises.readFile(filePath, 'utf8');
      return JSON.parse(fileContents);
    }));

    res.render('weeklynerdhome', { metadata});
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.get("/weeklynerd/:post", async (req, res) => {
    try {
        const post = req.params.post;
        const markdownFilePath = path.join(weeklyNerdPostsPath, `${post}.md`);
        const metadataFilePath = path.join(metadataFolderPath, `${post}.json`);

        const [markdownData, metadata] = await Promise.all([
            fs.promises.readFile(markdownFilePath, "utf8"),
            fs.promises.readFile(metadataFilePath, 'utf8'),
        ]);

        const metadataObj = JSON.parse(metadata);

        const estimatedReadingTime = readingTime(markdownData).text;

        res.render("weeklynerdpost", { blogPost: marked.parse(markdownData), metadata: metadataObj, estimatedReadingTime });
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Internal Server Error");
    }
});

app.get('/goals', (_req, res) => {
    res.render('goals');
})

app.get('/reflection', (_req, res) => {
    res.render('reflection');
})

/*======================
 *          404
 *======================**/

app.listen(port, () => {
    console.log(`Server running on port http://localhost:${port}.`);
});