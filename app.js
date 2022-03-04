const express = require("express");
const app = express();
const path = require("path");
const router = require("./router/web-router.js");

app.use(express.static(path.join(__dirname, "public")));

app.use(router);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT);
})