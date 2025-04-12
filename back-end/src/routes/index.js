const express = require('express');
const router = express.Router();

const categorieRoute = require('../routes/categories.js');
const artisanRoute = require('../routes/artisan.js');
const artisanMoisRoute = require('../routes/artisan-mois.js');
const emailRoute = require('../routes/email.js');

// On récupère les fichiers routes existants
// On laisse une route simple à '/' car dans le fichier routes/categories.js (id avec artisan etc) 
// on a défini l'utilisation de la route categorie par '/categories'
// Si on notait ici la route '/categories', il faudrait alors taper : localhost:3000/api/categories/categories
router.use('/', categorieRoute) ;
router.use('/', artisanRoute) ;
router.use('/', artisanMoisRoute) ;
router.use('/', emailRoute) ;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
