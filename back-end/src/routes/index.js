/**
 * @file routes/index.js
 * @description Ce fichier regroupe les principales routes de l'API. 
 * 
 * On laisse ici les routes simples '/' car dans les fichiers spécifiques de chaque routes (comme routes/categories.js), 
 * les routes sont définies par le chemin '/categories'. Si on notait ici aussi le chemin '/categories', on devrait alors
 * indiquer localhost:5173/api/categories/categories .
 */

const express = require('express');
const router = express.Router();

// Import des routes nécessaires pour l'API
const categorieRoute = require('../routes/categories.js');
const artisanRoute = require('../routes/artisan.js');
const artisanMoisRoute = require('../routes/artisan-mois.js');
const emailRoute = require('../routes/email.js');

// Utilisation des routes
router.use('/', categorieRoute) ;
router.use('/', artisanRoute) ;
router.use('/', artisanMoisRoute) ;
router.use('/', emailRoute) ;

module.exports = router;