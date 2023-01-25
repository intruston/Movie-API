const controllers = require("../controllers.js");

describe("getMovieById", () => {
  it("should return a movie with id", () => {
    const movie = controllers.getMovieById(1);
    expect(movie).toEqual({
      id: 1,
      title: "Inception",
      director: "Christopher Nolan",
      release_date: "2010-07-10",
    });
  });
  it("should return 404 if movie is not found", () => {
    const movie = controllers.getMovieById(3);
    expect(movie.status).toBe(404);
  });
});

describe("addMovie", () => {
  it("should return an error if the request is invalid", () => {
    const invalidMovie = {
      director: "",
      release_date: "",
    };
    const result = controllers.addMovie(invalidMovie);
    expect(result.status).toBe(400);
    expect(result.message).toBe("Invalid request");
  });
});

describe("updateMovie", () => {
  it("should return an error if the request is invalid", () => {
    const invalidMovie = {
      director: "",
      release_date: "",
    };
    const result = controllers.updateMovie(4, invalidMovie);
    expect(result.status).toBe(400);
    expect(result.message).toBe("Invalid request");
  });
});

describe("deleteMovie", () => {
  it("should delete a movie from the movies array", () => {
    const result = controllers.deleteMovie(1);
    expect(result).toEqual({
      status: 200,
      message: "Movie was deleted.",
    });
  });
  it("should return 404 if movie is not found", () => {
    const result = controllers.deleteMovie(4);
    expect(result.status).toBe(404);
    expect(result.message).toBe("Movie is not found :(");
  });
});
