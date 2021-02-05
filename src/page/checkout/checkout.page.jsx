import React from "react";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { selectCartTotal } from "../../redux/cart/cart.selectors";
import CheckOutComponent from "../../component/check-out/check-out.component";
import "./checkout.styles.scss";
import StripeCheckoutButton from "../../component/stripe-checkout/stripe.checkout";

const CheckOutPage = ({ cartItems, cartTotal }) => (
  <div className='checkout-page'>
    <div className='checkout-header'>
      <div className='header-block'>
        <span>Product</span>
      </div>
      <div className='header-block'>
        <span>Description</span>
      </div>
      <div className='header-block'>
        <span>Quantity</span>
      </div>
      <div className='header-block'>
        <span>Price</span>
      </div>
      <div className='header-block'>
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map(cartItem => (
      <CheckOutComponent key={cartItem.id} cartItem={cartItem} />
    ))}

    <div className='total'>
      <span>Total : ${cartTotal}</span>
    </div>
    <div className='text'>
      *Please use the following test credit card for payments*
      <br />
      4242 4242 4242 4242 - Exp:01/20 -CVV:123
    </div>
    <StripeCheckoutButton price={cartTotal} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  cartTotal: selectCartTotal
});

export default connect(mapStateToProps)(CheckOutPage);
