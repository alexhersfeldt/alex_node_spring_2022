
// import express and instatiate it
// two ways to do it:

// const express = require("express");
// const app = express();

// const app = require("express")();

const express = require("express");
const app = express();

// Server is started

app.use(express.json())

// endpoint callback function
app.get("/", (req, res) => {
    res.send({test:"Welcome to my new website"});
});

app.get("/about", (req, res) => {
    res.send({serverInfo:"This is a brand new server"});
});

app.post("/", (req, res) => {
    res.send(req.body)
});





// listening to port 8080 - always at bottem
app.listen(8080);



    

