const express = require('express');
const router = express.Router();

const controllerArtisan = require('../controllers/artisan') ;

router.get('/:id', controllerArtisan.getArtisanById) ;

module.exports = router ;