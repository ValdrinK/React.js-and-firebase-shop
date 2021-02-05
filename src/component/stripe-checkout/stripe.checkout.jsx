import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const stripePrice = price * 100;

  const publishableKey = "pk_test_5lvTBpFwN2rs3iXf78YbjqqA00Lchp0V9S";

  const onToken = token => {
    console.log(token);
    alert(`payment succesfull`);
  };

  return (
    <StripeCheckout
      label='pay now'
      name='CRWN clothing ltd'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={stripePrice}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
