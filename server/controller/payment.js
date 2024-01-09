const stripe = require("stripe")('sk_test_51OQTfYSGNvyNL8D35wggIwmxcpkyUIW1k31gxUihkfajbYfjoJGs9UTz6AkJ8pwAqXNMfIwMDIBViDCphgxAe1A900DuT5j9EI');

const redirecturl = "http://localhost:5173"

const StripeHostedPayment = async(req, res) =>{
    const  item  = req.body;

    const session = await stripe.checkout.sessions.create({
      line_items: [
        {
          quantity: 1,
          price_data:{
            unit_amount : item.price * 1000 ,
            product_data:{
                name:"something"
            },
            currency:"inr"
          }
        },
      ],
      mode: 'payment',
      success_url: `${redirecturl}/success`,
      cancel_url: `${redirecturl}/canceled`,
    });
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    
    res.redirect(303, session.url);
}


const StripeCustomPayment = async (req, res) => {
    const { items } = req.body;
  
    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculateOrderAmount(items),
      currency: "inr",
      automatic_payment_methods: {
        enabled: true,
      },
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
}


module.exports = {StripeHostedPayment, StripeCustomPayment}


