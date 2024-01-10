import React from "react";
// import { useContext } from "react";
// import { CartContext } from "../context/Cart";

import { useCart } from "../context/Cart";

function Cart() {
  //   const cart = useContext(CartContext);

  const cart = useCart();

  const total = cart.items.reduce((a, b) => a + b.price, 0);
  return (
    <div>
      <h1>Cart</h1>
      {cart &&
        cart.items.map((item) => (
          <li>
            {item.name} - ${item.price}
          </li>
        ))}
      <h3>Total Bill: ${total}</h3>
    </div>
  );
}

export default Cart;
