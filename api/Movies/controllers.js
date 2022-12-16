const generateMoviesData =require("./dataGenerator.js");

const movies = generateMoviesData();

function getAllMoviesController(req, res) {
  res.json(movies);
}

function searchMovieByNameController(req, res) {
  const { movie } = req.params;
  const moviesMatched = movies.movies.filter((m) =>
    m.title.toLowerCase().includes(movie)
  );
  res.json(moviesMatched);
}

module.exports = {getAllMoviesController,searchMovieByNameController};