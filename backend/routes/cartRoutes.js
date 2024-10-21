// routes/cartRoutes.js
const express = require('express');
const router = express.Router();
const { getCart } = require('../controllers/cartController');

router.get('/', getCart); // Assuming getCart is defined


module.exports = router;
