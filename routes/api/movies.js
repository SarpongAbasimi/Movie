const express = require('express')
,router = express.Router()
,movies = require('../../controllers/api/movies');

router.get('/:id', movies.movies)
router.get('/popular/movies', movies.popularMovies)

module.exports = router