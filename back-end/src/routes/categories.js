const express = require('express');
const router = express.Router();

const controllerCategories = require('../controllers/categories') ;

router.get('/categories', controllerCategories.getAll) ;

module.exports = router ;