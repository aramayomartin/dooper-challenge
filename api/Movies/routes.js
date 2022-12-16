const express = require("express");
const {
  getAllMoviesController,
  searchMovieByNameController,
} = require("./controllers.js");
var router = express.Router();

router.get("/api/movies", getAllMoviesController);

router.get("/api/movies/:movie", searchMovieByNameController);

module.exports = router;
