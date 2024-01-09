import React, { useState, useEffect } from "react";
import axios from "axios";
import "../App.css";
import { loadStripe } from "@stripe/stripe-js";

export default function Item() {

  const makePayment =  async() => {
    const stripe = loadStripe("pk_test_51OQTfYSGNvyNL8D3AQpOzsRIbFZeQDqNeM7YEOxi1Y5uAuCIAFOt0qrT01PfDhlFgH8AGmT6v1Lw7XqCNAkbywgh00lwY1Rl7I")

    const body = {
        price: 2000
    }
    const res = await fetch("http://localhost:8000/create-checkout-session",{
        method : "POST",
        headers : {"content-Type":"application/json"},
        body : JSON.stringify(body) 
    })

    // const res = axios.post("http://localhost:8000/create-checkout-session",data )

    // const session = await res.data
    const session = await res.json()
    const result = stripe.redirectToCheckout({
        sessionId : session.id
    })
    if(result.error){
        console.log("error", error)
    }
  }


  return (
    <>
      <button onClick={makePayment}>checkout</button>
    </>
  )
}