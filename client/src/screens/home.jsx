import React from 'react'
import Intro from '../components/intro'
import Sell from '../components/model'
import Division2 from "../components/division2"
import '../css/home.css'
import Review from '../components/review'
import Popular from '../components/popular'
import Fixed from '../components/fixed'

const Home = () => {
  return (
    <>
      <Intro/>
      {/* <Sell/> */}
      <Division2/>
      <Popular/>
      <Review/>
      <Fixed/>
    </>
  )
}

export default Home
