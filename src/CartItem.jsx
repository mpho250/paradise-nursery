import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  removeItem,
  updateQuantity,
} from "./CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleQuantityChange = (id, quantity) => {
    const newQuantity = Number(quantity);

    if (newQuantity < 1) {
      dispatch(removeItem(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  if (items.length === 0) {
    return (
      <main className="shopping-cart">
        <h2>Your Shopping Cart</h2>
        <p>Your cart is empty. Explore our plants and add your favourites!</p>
      </main>
    );
  }

  return (
    <main className="shopping-cart">
      <h2>Your Shopping Cart</h2>

      <div className="cart-items">
        {items.map((item) => (
          <article className="cart-item" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              className="cart-item-image"
            />

            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>Price: R{Number(item.price).toFixed(2)}</p>

              <label>
                Quantity:
                <input
                  type="number"
                  min="1"
                  value={item.quantity}
                  onChange={(event) =>
                    handleQuantityChange(item.id, event.target.value)
                  }
                />
              </label>

              <p>
                Subtotal: R
                {(item.price * item.quantity).toFixed(2)}
              </p>

              <button
                type="button"
                onClick={() => dispatch(removeItem(item.id))}
              >
                Remove
              </button>
            </div>
          </article>
        ))}
      </div>

      <section className="cart-summary">
        <h3>Total: R{total.toFixed(2)}</h3>
        <button
          type="button"
          onClick={() => alert("Checkout functionality coming soon!")}
        >
          Checkout
        </button>
      </section>
    </main>
  );
}

export default CartItem;
