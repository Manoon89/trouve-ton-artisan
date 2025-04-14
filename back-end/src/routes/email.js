/**
 * @file routes/email.js
 * @description Ce fichier contient la route qui permet d'envoyer un e-mail. 
 */

const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email');
/**
 * @swagger
 * /send-email:
 *      post:
 *          summary: envoie un e-mail à l'artisan
 *          tags: [Email]
 *          responses: 
 *              200: 
 *                  description: la simulation du mail est bien envoyée
 *                  content: 
 *                      application/json
 *              500: 
 *                  description: erreur lors de la simulation
 */
router.post('/send-email', emailController.sendFakeEmail);

module.exports = router;