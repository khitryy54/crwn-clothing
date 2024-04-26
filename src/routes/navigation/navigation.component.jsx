import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";

import { UserContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { signOutUser } from "../../utils/firebase/firebase.utils";

import "./navigation.styles.scss";


const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <>
      <div className="navigation">
        <Link to="/" className="logo-container">
          <div><Logo className="logo"/></div>
        </Link>
        <div className="nav-links-container">
          <Link to="/shop" className="nav-link">SHOP</Link>
          {
            currentUser ? (
              <span className="nav-link" onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <Link to="/auth" className="nav-link">SIGN IN</Link>
            )
          }
          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </div>
      </div>
      <Outlet />
    </>
  )
}

export default Navigation;