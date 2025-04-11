const express = require('express');
const router = express.Router();

const categorieRoute = require('../routes/categories.js');
const artisanRoute = require('../routes/artisan.js');

// On récupère les fichiers routes existants
router.use('/categories', categorieRoute) ;
router.use('/artisan', artisanRoute) ;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
