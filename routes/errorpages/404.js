const express =  require('express'),
router = express.Router(),
error404 = require('../../controllers/errors/404');

router.get('*', error404.error404)

module.exports = router;