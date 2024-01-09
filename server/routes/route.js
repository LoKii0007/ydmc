require('dotenv').config()
const express = require("express")
const {newCar, getCar, getAllCars ,  addCarImages, newCarSpecification, newCarSummary, getCarSummary, getCarSpecification, getCarImages, addMainImage} = require("../controller/car-collection.js")
const { createUser, login , getUser, addStaff, staffLogin } = require("../controller/auth.js");
const fetchUser = require("../middleware/fetchuser.js")
const stripe = require("stripe")('sk_test_51OQTfYSGNvyNL8D35wggIwmxcpkyUIW1k31gxUihkfajbYfjoJGs9UTz6AkJ8pwAqXNMfIwMDIBViDCphgxAe1A900DuT5j9EI');
const upload = require("../middleware/upload.js");
const {StripeHostedPayment, StripeCustomPayment} = require('../controller/payment.js');


const route = express.Router()


//adding car details
route.post('/api/add/car-info', newCar)
route.post('/api/add/car-main-image', upload.single("main_image"), addMainImage )
route.post('/api/add/car-summary', newCarSummary)
route.post('/api/add/car-specification', newCarSpecification)
route.post('/api/add/car-images', upload.single("images"), addCarImages )


//getting car details
route.get('/api/get/cars', getAllCars)
route.post('/api/get/car-info', getCar)
route.post('/api/get/car-summary', getCarSummary)
route.post('/api/get/car-specification', getCarSpecification)
route.post('/api/get/car-images', getCarImages)


//authentication for admin
route.post('/api/auth/createUser', createUser)
route.post('/api/auth/login', login)
route.post('/api/auth/getUser',fetchUser, getUser)


//authentication for staff
route.post('/api/auth/staff/add', addStaff)
route.post('/api/auth/staff/login', staffLogin)


// payment link 
route.post("/create-payment-intent", StripeCustomPayment);  //custom-payment-flow
route.post('/create-checkout-session', StripeHostedPayment );  // stripe-hosted page
  

module.exports= route

