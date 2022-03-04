const router = require("express").Router();
const fs = require("fs");
const path = require("path");

//path.join(__dirname, "/public/components/nav.html\")
function renderHtmlPage(htmlFile) {
    const nav = fs.readFileSync("../public/components/nav.html").toString();
    const header = fs.readFileSync("./public/components/header.html").toString();
    const page = fs.readFileSync(`./public/page/${htmlFile}.html`).toString();
    const footer = fs.readFileSync("./public/components/footer.html").toString();
    return nav + header + page + footer;
};

const homePage = renderHtmlPage("home");
/*const nodePage = renderHtmlPage("node");
const npmPage = renderHtmlPage("npm");
const nodemonPage = renderHtmlPage("nodemon");
const expressPage = renderHtmlPage("express");
const basicWebServerPage = renderHtmlPage("basicWebServer");
*/

router.get("/", (req, res) => res.send(homePage));
router.get("/:pageName", (req, res) => {
    const pageName = req.params.pageName;
    const page = renderHtmlPage(pageName)
    res.send(page);
})
module.exports = router;
