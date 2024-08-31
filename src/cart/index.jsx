import React from "react";
import "./cart.scss";
import cartProducts from "./cartApi/cartApi";

function Cart() {
  const cartData = cartProducts;
  
  return (
    <div className="cart">
      {cartData.map((item) => (
        <div className="cart-item">
          <p>{item.id}</p>
          <p>{item.name}</p>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
