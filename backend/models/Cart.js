// backend/models/Cart.js
const mongoose = require('mongoose');

// Define the schema for the cart
const cartSchema = new mongoose.Schema({
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                required: true,
                ref: 'Product',  // Reference to Product model
            },
            quantity: {
                type: Number,
                required: true,
                default: 1,
            },
        },
    ],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User',  // Reference to User model
    },
}, { timestamps: true });

// Create the Cart model based on the schema
const Cart = mongoose.model('Cart', cartSchema);

// Export the Cart model
module.exports = Cart;

