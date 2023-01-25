const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

//let movies = require("./data");
const controllers = require("./controllers.js");

app.get("/movie", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(movies);
});

app.get("/movie/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = movies.find((movie) => movie.id === id);
  if (!movie) {
    res.status(404).send("Movie is not found :(");
    return;
  }
  res.setHeader("Content-Type", "application/json");
  res.send(movie);
});

app.post("/movie", (req, res) => {
  if (isInvalid(req)) {
    res.status(400);
    res.send("Invalid request");
    return;
  }
  const lastId = movies.slice(-1)[0].id + 1;
  movies.push({
    id: lastId,
    title: req.body.title,
    director: req.body.director,
    release_date: req.body.release_date,
  });
  res.status(201);
  res.send(`New movie was added with id: ${lastId}`);
});

app.put("/movie/:id", (req, res) => {
  if (isInvalid(req)) {
    res.status(400);
    res.send("Invalid request");
    return;
  }
  const id = req.params.id;
  const movie = movies.find((movie) => movie.id == id);
  if (!movie) {
    res.status(404);
    res.send("Movie is not found :(");
    return;
  }
  movie.title = req.body.title;
  movie.director = req.body.director;
  movie.release_date = req.body.release_date;
  res.send(`Movie with id: ${id} was updated`);
});

app.delete("/movie/:id", (req, res) => {
  const id = Number(req.params.id);
  const movieToDelete = movies.find((movie) => movie.id === id);
  if (!movieToDelete) {
    res.status(404);
    res.send("Movie is not found :(");
    return;
  }
  movies = movies.filter((movie) => movie.id !== id);
  res.status(200);
  res.send("Movie was deleted.");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const isInvalid = (req) => {
  if (
    typeof req.body == "undefined" ||
    typeof req.body.title == "undefined" ||
    typeof req.body.director == "undefined" ||
    typeof req.body.release_date == "undefined"
  ) {
    return true;
  } else {
    return false;
  }
};
