import React, { useState } from "react";
import { toast } from "react-toastify";
import "../styles/Cart.css";

const Cart = ({ cart, setCart }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const [quantities, setQuantities] = useState(
    cart.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
  );

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    setSelectedItems(selectedItems.filter((itemId) => itemId !== id)); // Remove from selected items
    const updatedQuantities = { ...quantities };
    delete updatedQuantities[id];
    setQuantities(updatedQuantities);
    toast.info("Item removed from cart!");
  };

  const toggleSelection = (id) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((itemId) => itemId !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  const increaseQuantity = (id) => {
    setQuantities({ ...quantities, [id]: (quantities[id] || 1) + 1 });
  };

  const decreaseQuantity = (id) => {
    if (quantities[id] > 1) {
      setQuantities({ ...quantities, [id]: quantities[id] - 1 });
    }
  };

  // Calculate total based on selected items and their quantities
  const totalAmount = cart
    .filter((item) => selectedItems.includes(item.id))
    .reduce((total, item) => total + item.price * (quantities[item.id] || 1), 0);

  return (
    <div className="cart-container">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="cart-list">
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => toggleSelection(item.id)}
              />
              <img src={item.image} alt={item.name} className="cart-image" />
              <h2>{item.name}</h2>
              <p>{item.use}</p>
              <p>Price: ${item.price}</p>
              <div className="quantity-controls">
                <button onClick={() => decreaseQuantity(item.id)}>-</button>
                <span>{quantities[item.id]}</span>
                <button onClick={() => increaseQuantity(item.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </div>
          ))}
        </div>
      )}
      <h2>Total Amount: ${totalAmount}</h2>

      {/* Payment Method Logos */}
      <div className="payment-methods">
        <h3>Accepted Payment Methods</h3>
        <div className="payment-logos">
          <img src="/phonepe.jpeg" alt="PhonePe" className="payment-logo" />
          <img src="/gpay.png" alt="Google Pay" className="payment-logo" />
          <img src="/paytam.webp" alt="Paytm" className="payment-logo" />
          <img src="/upiu.png" alt="UPI" className="payment-logo" />
        </div>
      </div>
    </div>
  );
};

export default Cart;
