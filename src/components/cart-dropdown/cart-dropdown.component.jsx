import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";

import { CartContext } from "../../contexts/cart.context";

import { useContext } from "react";

import { useNavigate } from "react-router-dom";

import "./cart-dropdown.styles.scss";

const CartDropdown = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    // setIsCartOpen(false);
    navigate("/checkout");
  }
   return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => <CartItem key={cartItem.id} cartItem={cartItem}/>)}
      </div>
      <Button onClick={goToCheckoutHandler}>Checkout</Button>
    </div>
  )
}

export default CartDropdown;