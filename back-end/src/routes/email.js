const express = require('express');
const router = express.Router();
const emailController = require('../controllers/email');

router.post('/send-email', emailController.sendFakeEmail);

module.exports = router;