import { useSelector, useDispatch } from "react-redux";

import {CartIconContainer, ItemCount, ShoppingIcon} from "./cart-icon.styles";

import { setIsCartOpen } from "../../store/cart/cart.action";
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selector";

const CartIcon = () => {
  const dispatch = useDispatch();
  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);


  const toggleCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  }

  return (
    <CartIconContainer onClick={toggleCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount> 
    </CartIconContainer>
  )
}

export default CartIcon;