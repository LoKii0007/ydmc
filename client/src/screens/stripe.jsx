import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from '../components/checkoutform'   
import "../App.css"


const stripePromise = await loadStripe("pk_test_51OQTfYSGNvyNL8D3AQpOzsRIbFZeQDqNeM7YEOxi1Y5uAuCIAFOt0qrT01PfDhlFgH8AGmT6v1Lw7XqCNAkbywgh00lwY1Rl7I");


export default function Stripe() {

  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <>
      <div className="App stripe">
      { clientSecret && 
            (<Elements options={options} stripe={stripePromise}>
              <CheckoutForm />
            </Elements>)}


      </div>
    </>
  )
}

