const router = require("express").Router();
const fs = require("fs");
const path = require("path");




const homePage = renderHtmlPage("home");

router.get("/", (req, res) => res.send(homePage));
router.get("/:pageName", (req, res) => {
    res.send(renderHtmlPage(req.params.pageName));
})

function renderHtmlPage(htmlFile) {
    const nav = fs.readFileSync("./public/components/nav.html").toString();
    const header = fs.readFileSync("./public/components/header.html").toString();
    const page = fs.readFileSync(`./public/pages/${htmlFile}.html`).toString();
    const footer = fs.readFileSync("./public/components/footer.html").toString();
    return nav + header + page + footer;
};
module.exports = router;
