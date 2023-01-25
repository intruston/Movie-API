const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const controllers = require("./controllers.js");

app.get("/movie", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(controllers.getAllMovies());
});

app.get("/movie/:id", (req, res) => {
  const id = Number(req.params.id);
  const movie = controllers.getMovieById(id);
  res.status(movie.status || 200);
  res.setHeader("Content-Type", "application/json");
  res.send(movie);
});

app.post("/movie", (req, res) => {
  const added = controllers.addMovie(req);
  res.status(added.status);
  if (added.status === 201) {
    res.send(`New movie was added with id: ${added.id}`);
  } else {
    res.setHeader("Content-Type", "application/json");
    res.send(added.message);
  }
});

app.put("/movie/:id", (req, res) => {
  const id = req.params.id;
  const updated = controllers.updateMovie(id, req);
  res.status(updated.status);
  res.setHeader("Content-Type", "application/json");
  res.send(updated.message);
});

app.delete("/movie/:id", (req, res) => {
  const id = Number(req.params.id);
  const deleted = controllers.deleteMovie(id);
  res.status(deleted.status);
  res.setHeader("Content-Type", "application/json");
  res.send(deleted.message);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
