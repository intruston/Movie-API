let movies = require("./data");

function getAllMovies() {
  return movies;
}

function getMovieById(id) {
  const movie = movies.find((movie) => movie.id == id);
  if (!movie) {
    return { status: 404, message: "Movie is not found :(" };
  }
  return movie;
}

function addMovie(req) {
  if (isInvalid(req)) {
    return { status: 400, message: "Invalid request" };
  }
  const lastId = movies.slice(-1)[0].id + 1;
  const newMovie = {
    id: lastId,
    title: req.body.title,
    director: req.body.director,
    release_date: req.body.release_date,
  };
  movies.push(newMovie);
  return { status: 201, id: lastId };
}

function updateMovie(id, req) {
  if (isInvalid(req)) {
    return { status: 400, message: "Invalid request" };
  }
  const movie = movies.find((movie) => movie.id == id);
  if (!movie) {
    return { status: 404, message: "Movie is not found :(" };
  }
  movie.title = req.body.title;
  movie.director = req.body.director;
  movie.release_date = req.body.release_date;
  return { status: 200, message: `Movie with id: ${id} was updated` };
}

function deleteMovie(id) {
  const movieToDelete = movies.find((movie) => movie.id === id);
  if (!movieToDelete) {
    return { status: 404, message: "Movie is not found :(" };
  }
  movies = movies.filter((movie) => movie.id !== id);
  return { status: 200, message: "Movie was deleted." };
}

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

module.exports = {
  getAllMovies,
  getMovieById,
  addMovie,
  updateMovie,
  deleteMovie,
};
