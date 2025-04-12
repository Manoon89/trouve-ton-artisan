const express = require('express');
const router = express.Router();

const controllerArtisan = require('../controllers/artisan') ;

router.get('/artisans/categorie/:categorie', controllerArtisan.getArtisansByCategorie) ;

router.get('/artisans/name/:name', controllerArtisan.getArtisansByName) ;

router.get('/details-artisan/:id', controllerArtisan.getArtisanById) ;

module.exports = router ;