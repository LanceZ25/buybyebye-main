// controllers/cartController.js
const Cart = require('../models/Cart');

exports.getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        res.json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Add more functions to add, remove items from the cart
