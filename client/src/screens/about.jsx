import React from 'react'
import "../css/about.css"
import Fixed from '../components/fixed'

export default function About() {
  return (
    <>
      <div className="about  d-flex flex-column ">
        <div className="about-top pt-4 d-flex justify-content-center align-items-top">
          About Our Company
        </div>
        <div className="about-bottom my-5 d-flex justify-content-start align-items-center ">

          <div className="about-box px-5 pb-4">
            <div className="box-top text-left">
              Our Story
            </div>
            <div className="box-body pt-4 ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, asperiores vero, accusantium expedita officiis illo dolores aspernatur ad inventore quasi, officia id recusandae! Esse sit numquam doloribus ipsam a fugiat expedita autem quo architecto dolorem tempora nulla similique laudantium voluptas nam.
            </div>
          </div>

          <div className="about-history py-5 d-flex justify-content-start align-items-center ">
            <div className="history-box px-5">
              <div className="history-top text-left">
                Our Mission
              </div>
              <div className="history-body pt-4 ">
                At <span style={{ color: "greenyellow" }}>YOU DRIVE ME CRAZY</span> , our mission is to redefine the automotive experience by providing a seamless and transparent platform for buying and selling high-quality second-hand cars. We are dedicated to creating a trusted marketplace that empowers individuals to make informed decisions, ensuring both buyers and sellers experience unparalleled satisfaction.
              </div>

              <div className="history-body pt-4 ">
                Join us in redefining the automotive experience—where every car tells a story, and every transaction builds a lasting relationship. At <span style={{ color: "greenyellow" }}>YOU DRIVE ME CRAZY</span> , we don't just sell cars; we facilitate journeys and create connections that last a lifetime."
              </div>
            </div>
          </div>

          <div className="about-sh py-5 d-flex justify-content-start align-items-center ">
            <div className="sh-box px-5">
            <div className="sh-top text-left">
                Our Showroom
              </div>
              <div className="sh-img">
                <img src="/porsche-model.png" alt="" />
              </div>
              <div className="sh-footer mt-5 text-center">
              <button className='sh-btn px-5 py-2'>Visit our showroom</button>
              </div>
            </div>
          </div>

        </div>

      </div>

      <Fixed/>
    </>
  )
}

