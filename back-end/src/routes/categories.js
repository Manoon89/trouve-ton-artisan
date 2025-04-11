const express = require('express');
const router = express.Router();

const controllerCategories = require('../controllers/categories') ;

// On laisse une route simple à '/' car dans router.use on a défini l'utilisation de la route categorie par '/categories'
// Si on notait la route '/categories', il faudrait alors taper : localhost:3000/api/categories/categories
router.get('/', controllerCategories.getAll) ;

module.exports = router ;