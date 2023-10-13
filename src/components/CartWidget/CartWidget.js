import React from "react";
import {useCartContext} from '../Context/CartContext';

const CartWidget = () => {
    const {totalProducts, cart} = useCartContext();
    return (
      <div className="estilo-cart">
      <i className="bi bi-cart4"></i>
      <span id="count">{totalProducts() ||cart}</span>
  </div>
    )
}

export default CartWidget;