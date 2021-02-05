import React from "react";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  addItem,
  removeItem
} from "../../redux/cart/cart.action";
import "./check-out.styles.scss";

const CheckOutComponent = ({ cartItem, removeItem, clearItem, addItem }) => {
  const { imageUrl, name, price, quantity } = cartItem;
  return (
    <div className='checkout-items'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>

      <span className='name'>{name}</span>
      <span className='quantity'>
        <div className='arrow' onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className='value'> {quantity} </span>
        <div className='arrow' onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </span>
      <span className='price'>{price}</span>
      <div className='remove-button' onClick={() => clearItem(cartItem)}>
        &#10005;
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  clearItem: cartItem => dispatch(clearItemFromCart(cartItem)),
  addItem: cartItem => dispatch(addItem(cartItem)),
  removeItem: cartItem => dispatch(removeItem(cartItem))
});

export default connect(null, mapDispatchToProps)(CheckOutComponent);