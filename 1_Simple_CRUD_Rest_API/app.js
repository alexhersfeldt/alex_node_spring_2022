// importing express.js and instatiateing it

 const express = require("express");

 const app = express();

// telling app to use express.json for body parsing

 app.use(express.json());

// initial movies database as a array of objects

 const movies = [
     {
        id: 1,
        name: "Spiderman",
        genre: "Action",
        rating: 6.5
     },
     {
        id: 2,
        name: "Matrix",
        genre: "Action",
        rating: 8.5
     },
     {
        id: 3,
        name: "Toy Story",
        genre: "Kids",
        rating: 7.5
     },
     {
        id: 4,
        name: "Mr. Bean",
        genre: "Comedy",
        rating: 9.5
     }
 ];

// Endpoints

// Get all resources
app.get("/movies", (req, res) => {

     res.send({ data : movies });
});


// Get resource by ID 
app.get("/movies/:ID", (req, res) => {

    const id = parseInt(req.params.ID);

    const requestedMovie = movies.filter((x) => x.id == id)[0];
    // alternative:
    // const requestedMovie = movie.find(movie => movie.id === Number(req.params.ID))

    
    requestedMovie ? res.send({ data : requestedMovie }) : res.send({error :"Movie not found"})
});  


// Add new resource
app.post("/movies", (req, res) => {

    //  Creating new movie with info from json
    const movie = 
    {
        id: movies.length+1,
        name: req.body.name,
        genre: req.body.genre,
        rating: req.body.rating
    };

    movies.push(movie);

    res.send(movies);

})


// Update resource by ID

app.put("/movies/:ID", (req, res) => {

    const movieId = parseInt(req.params.ID)-1;

    // If statments to check if variable needs to be updated. Will only update if new information exists in json
    if(req.body.name != null) {
        movies[movieId].name=req.body.name
    };

    if(req.body.genre != null) {
        movies[movieId].genre=req.body.genre
    };

    if(req.body.rating != null) {
        movies[movieId].rating=req.body.rating
    };

    res.send(movies);
})


// Delete resource by ID

app.delete("/movies/:ID", (req, res) => {

    const id = parseInt(req.params.ID)-1;

    movies.splice(id,1);

    // For loop to replace ids of remaining movies
    for (let i = 0; i < movies.length; i++) {
        movies[i].id = i + 1
    }

    res.send(movies)
});  


//  Server is on port 8080

 app.listen(8080);

// class codes

 // Get all resources
app.get("/libraries", (req, res) => {

    res.send(libraries);
});