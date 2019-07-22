const express = require('express')
,router = express.Router()
,movies = require('../../controllers/api/movies');

router.get('/:id', movies.movies);
router.get('/popular/movies', movies.popularMovies);
router.get('/discover/movies', movies.discover);
router.get('/tvshows/movies', movies.tvshows)

module.exports = router