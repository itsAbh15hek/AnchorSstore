import React from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useSelector } from "react-redux";

const CheckoutForm = ({ setIsShipping, setConfirmation }) => {
  const stripe = useStripe();
  const elements = useElements();
  const cart = useSelector((state) => state.cart);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { clientSecret } = await fetch(
      "https://anchor-store.herokuapp.com/api/checkout/payment",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          paymentMethodType: "card",
          currency: "inr",
          amount: `${cart.total * 100}`,
        }),
      }
    ).then((r) => r.json());

    const confirmation = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (confirmation) setConfirmation(true);
  };

  return (
    <form onSubmit={handleSubmit} className="checkout-card-form">
      <div className="checkout-card">
        <CardElement className="card-details" />
      </div>
      <div className="btn-container">
        <button onClick={() => setIsShipping(true)}>Back</button>
        <button type="submit" disabled={!stripe || !elements}>
          Pay
        </button>
      </div>
    </form>
  );
};

export default CheckoutForm;
