const express = require("express");

const app = express();

app.get("/time", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.listen(process.env.PORT, () => {
    console.log("Server running on port", process.env.PORT);
})