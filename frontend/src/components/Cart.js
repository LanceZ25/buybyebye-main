// frontend/src/components/Cart.js
import React from 'react';
import { useCart } from './CartContext'; // Assume you have a context for cart management

const Cart = () => {
    const { cartItems, removeFromCart, clearCart } = useCart();

    const handleRemove = (itemId) => {
        removeFromCart(itemId); // Function to remove item from cart
    };

    const handleClear = () => {
        clearCart(); // Function to clear the entire cart
    };

    const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <div className="container">
            <h2>Your Shopping Cart</h2>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    <ul className="list-group">
                        {cartItems.map(item => (
                            <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                                <div>
                                    <h5>{item.name}</h5>
                                    <p>Price: ${item.price}</p>
                                    <p>Quantity: {item.quantity}</p>
                                </div>
                                <button className="btn btn-danger" onClick={() => handleRemove(item.id)}>
                                    Remove
                                </button>
                            </li>
                        ))}
                    </ul>
                    <h3 className="mt-3">Total Amount: ${totalAmount.toFixed(2)}</h3>
                    <button className="btn btn-warning mt-3" onClick={handleClear}>
                        Clear Cart
                    </button>
                    {/* Here you can add a button to proceed to checkout */}
                </div>
            )}
        </div>
    );
};

export default Cart;

