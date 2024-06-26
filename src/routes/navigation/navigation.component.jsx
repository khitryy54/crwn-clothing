import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { selectIsCartOpen } from "../../store/cart/cart.selector";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { selectCurrentUser } from "../../store/user/user.selector";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { signOutStart } from "../../store/user/user.action";

import { NavigationContainer, NavLink, NavLinks, LogoContainer } from "./navigation.styles";


const Navigation = () => {

  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const signOutUser = () => dispatch(signOutStart());

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <div><Logo className="logo"/></div>
        </LogoContainer>
        <NavLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {
            currentUser ? (
              <NavLink as="span" onClick={signOutUser}>SIGN OUT</NavLink>
            ) : (
              <NavLink to="/auth">SIGN IN</NavLink>
            )
          }
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </NavLinks>
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;