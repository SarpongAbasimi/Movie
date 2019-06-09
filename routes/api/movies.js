const express = require('express')
,router = express.Router()
,movies = require('../../controllers/api/movies');

router.get('/',movies.movies)


module.exports = router