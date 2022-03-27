import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import Shipping from "../components/Shipping";
import "./Checkout.css";
import ThankYou from "../components/ThankYou";

const Checkout = () => {
  const stripePromise = loadStripe(
    "pk_test_51KadArSGLjUHhsp5qbEsOBlbvclSV0Pv8G8wtYqbI9BEG2wf0bTT543DDZI2UMrfX6YNqNW12wD0t83SX30W0gMF00J3vGjze8"
  );
  const [isShipping, setIsShipping] = useState(true);
  const [confirmation, setConfirmation] = useState(false);

  return (
    <div className="checkout-container">
      {isShipping && <Shipping setIsShipping={setIsShipping} />}
      <Elements stripe={stripePromise}>
        {!isShipping && !confirmation && (
          <CheckoutForm
            setIsShipping={setIsShipping}
            setConfirmation={setConfirmation}
          />
        )}
      </Elements>
      {confirmation && <ThankYou />}
    </div>
  );
};

export default Checkout;
