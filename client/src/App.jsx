import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./screens/home"
import Navbar from './components/navbar'
import Collection from './screens/collection'
import Admin from './screens/admin'
import CarDetails from './components/cardetails'
import LoginScreen from "./screens/loginScreen";
import Stripe from "./screens/stripe";
import Item from "./components/item";
import Footer from "./components/footer";
import Contact from "./screens/contact";
import Emi from "./components/emi";
import CarState from "./context/carcontext";
import About from "./screens/about"
import Sellcar from "./screens/sellcar";
import Gallery from "./components/gallery";
import { Toaster } from "react-hot-toast";
import Team from "./screens/team";

function App() {

  return (
    <>
      <CarState>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={ <Home/> }></Route>
          <Route exact path="/collection" element={ <Collection/> }></Route>
          <Route exact path="/contact" element={ <Contact/> }></Route>
          <Route exact path="/about" element={ <About/> }></Route>
          <Route exact path="/team" element={ <Team/> }></Route>
          <Route exact path="/emi" element={ <Emi/> }></Route>
          <Route exact path="/sell" element={ <Sellcar/> }></Route>
          <Route exact path="/gallery" element={ <Gallery/> }></Route>
          <Route exact path="/cardetails/:id" element={ <CarDetails/> }></Route>
          <Route exact path="/admin" element={ <Admin/> }></Route>
          <Route exact path="/loginscreen" element={ <LoginScreen/> }></Route>
          {/* <Route exact path="/reserve-car" element={ <Stripe/> }></Route> */}
          {/* <Route exact path="/reserve-car" element={ <Item/> }></Route> */}
        </Routes>
        <Toaster/>
        <Footer/>
      </Router>
      </CarState>
    </>
  )
}

export default App
