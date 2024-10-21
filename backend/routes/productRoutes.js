// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();

// Example route
router.get('/', (req, res) => {
    res.json({ message: 'List of products' });
});

module.exports = router;

