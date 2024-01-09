import React from 'react'
import "../css/sell.css"
import ContactForm from '../components/contactform'
import Fixed from '../components/fixed'

export default function Sellcar() {
  return (
    <>
      <div className="sellCar">
        <div className="sell-div-1 p-5">
          <div className="sell-head text-center mb-5">
            <h2 className='mb-3'>sell your luxury car </h2> 
            <h2 style={{color:"green"}}>with few <span style={{color:"green"}}>simple</span> steps</h2>
          </div>
          <div className="sell-body mb-5">
            <div className="sell-img mb-5">
              <img src="/porsche-model.png" alt="" />
            </div>
            <div className="sell-details">
            <div className="sell-comp mb-4 me-3 d-flex col-12">
              <div className="sell-icon mx-4">
                <i className="fa-solid fa-user-check p-2 "></i>
              </div>  
              <div className="icon-text">
                <span style={{fontWeight:"600"}} > Quality </span> Checks
              </div>
            </div>
            <div className="sell-comp mb-4 me-3 d-flex col-12">
              <div className="sell-icon mx-4">
              <i class="fa-solid fa-hand-holding-dollar p-2"></i>
              </div>
              <div className="icon-text">
                <span style={{fontWeight:"600"}} >Get Best</span> Offer
              </div>
            </div>
            <div className="sell-comp mb-4 me-3 d-flex col-12">
              <div className="sell-icon mx-4">
                <i className="fa-solid fa-user-group p-2 "></i>
              </div>
              <div className="icon-text">
                <span style={{fontWeight:"600"}}>1000 + </span> Clientle
              </div>
            </div>
            </div>
          </div>
          <div className="sell-footer d-flex flex-column justify-content-center">
            <button className='sell-app sell-btn mb-3 py-2'>Chat On Whatsapp</button>
            <button className='sell-call sell-btn mb-3 py-2'>Call Us</button>
          </div>
        </div>

        <div className="sell-div-2 p-5">
          <div className="sell2-top mb-5 text-center">
          <h2 className='mb-3'>Send Us Your Details </h2> 
            <h2 >We Will get back to you!</h2>
          </div>
          <div className="sell2-body mb-5">
          <ContactForm/>
          </div>
        </div>
      </div>

      <Fixed/>
    </>
  )
}
