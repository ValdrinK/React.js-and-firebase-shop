import React from "react";
import { Link } from "react-router-dom";
import "./header.style.scss";
import { auth } from "../../firebase/firebase.utility";
import { connect } from "react-redux";
import ShopIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cartdropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { currentUserSelect } from "../../redux/user/user.selector";
import { createStructuredSelector } from "reselect";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from "./header.styled";

import { userSignOutStart } from "../../redux/user/user.actions";

const Header = ({ currentUser, hidden, signOut }) => (
  <HeaderContainer>
    <LogoContainer to='/'>Logo</LogoContainer>

    <OptionsContainer className='options'>
      <OptionLink to='/shop'>Shop</OptionLink>
      <OptionLink to='/shop'>Contact</OptionLink>
      {currentUser ? (
        <OptionLink as='div' onClick={signOut}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink className='option' to='/signin'>
          Sign In
        </OptionLink>
      )}

      <ShopIcon />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);

const mapDispatchToProps = dispatch => ({
  signOut: () => dispatch(userSignOutStart())
});

const mapStateToProps = createStructuredSelector({
  currentUser: currentUserSelect,
  hidden: selectCartHidden
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
