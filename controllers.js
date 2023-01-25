const movies = require("./data");

function getMovieById(id) {
  const movie = movies.find(movie => movie.id === id);
  if (!movie) {
    throw new Error("Movie not found :(");
  }
  return movie;
}

function getAllMovies() {
  return movies;
}

function addMovie(movie) {
}

function updateMovie(id, newMovie) {
}

function deleteMovie(id) {
}

module.exports = {
  getMovieById,
  getAllMovies,
  addMovie,
  updateMovie,
  deleteMovie
};
