const express = require('express');
const router = express.Router();

const controllerArtisansMois = require('../controllers/artisans-mois') ;

router.get('/artisan-mois', controllerArtisansMois.getAll) ;

module.exports = router ;