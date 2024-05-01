import "./checkout.styles.scss";

import { useContext } from "react";

import { CartContext } from "../../contexts/cart.context";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";

const CheckoutPage = () => {
    const { cartItems, cartTotal } = useContext(CartContext);

    return(
      <div className="checkout-container">
        <div className="checkout-header">
          <p className="header-block">Product</p>
          <p className="header-block">Description</p>
          <p className="header-block">Quantity</p>
          <p className="header-block">Price</p>
          <p className="header-block">Remove</p>
        </div>
        {
          cartItems.map((cartItem) => <CheckoutItem key={cartItem.id} cartItem={cartItem}/>)
        }
        <span className="total">TOTAL: ${cartTotal}</span>
      </div>
    )
}

export default CheckoutPage;