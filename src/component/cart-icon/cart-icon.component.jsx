import React from "react";
import Carticon from "../../assets/carticon.png";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { connect } from "react-redux";
import "./cart-icon.styles.scss";
import { selectCartItemsCount } from "../../redux/cart/cart.selectors";

const ShopIcon = ({ toggleCartHidden, ItemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <div>
      <img src={Carticon} className="shoping-icon" />
    </div>

    <span className="item-count"> {ItemCount} </span>
  </div>
);

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = state => ({
  ItemCount: selectCartItemsCount(state)
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopIcon);
