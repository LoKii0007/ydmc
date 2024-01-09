import React, { useEffect } from 'react'
import "../css/division2.css"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from 'react-router-dom';

gsap.registerPlugin(ScrollTrigger)

export default function Division2() {

  useEffect(() => {
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".division1",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 0.5
      }
    });

    timeline.fromTo(".svg", { x: "-70vw" }, { x: "10vw" });

    timeline.addPause();

    // timeline.to(".pin-img", {
    //   x: "-40vw",
    //   scrollTrigger: {
    //     trigger: ".division2",
    //     start: "top bottom",
    //     end: "top top",
    //     scrub: 0,
    //     pin: true
    //   }
    // });

  }, []);



  return (
    <>
      <div className="conatiner division d-flex flex-column">

        <div className='p-5 division1 d-flex justify-content-evenly align-items-center'>
          <div className="left-div d-flex justify-content-center flex-column align-items-center">

            <div className="div-head my-4 text-center">
              planning to <span style={{ color: "#F6D776" }}>buy ?</span>
            </div>

            <div className="body">

              <div className="body-1 d-flex my-4">
                <div className="body-comp me-3 d-flex col-6">
                  <div className="body-icon mx-4">
                    <i className="fa-solid fa-tag p-2 "></i>
                  </div>
                  <div className="icon-text">
                    Best prices
                  </div>
                </div>
                <div className="body-comp d-flex col-6">
                  <div className="body-icon mx-4">
                    <i className="fa-solid fa-truck-fast p-2 "></i>
                  </div>
                  <div className="icon-text">
                    Hassle Free
                  </div>
                </div>
              </div>

              <br />

              <div className="body-2 d-flex my-4">
                <div className="body-comp me-3 d-flex col-6 ">
                  <div className="body-icon mx-4">
                    <i className="fa-solid fa-stamp p-2 "></i>
                  </div>
                  <div className="icon-text">
                    Certfied
                  </div>
                </div>
                <div className="body-comp d-flex col-6 ">
                  <div className="body-icon mx-4">
                    <i className="fa-solid fa-medal p-2 "></i>
                  </div>
                  <div className="icon-text">
                    Trusted Value
                  </div>
                </div>
              </div>

            </div>

            <span className='div-head-2 mt-4 text-center'>Explore from our <br /> wide range of collection</span>

            <div className="div-footer my-5">
              <Link to="/collection"><button className='green-btn py-2 px-5'>
                Browse collection
              </button></Link>
            </div>
          </div>


          <div className="right-div d-flex position-relative align-items-center">
            <div className="svg position-absolute" >
              <svg id="Layer_1" className='layer1' data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 238.98 255.12"><path d="M280,260" transform="translate(-116)" fill="#fff" stroke="#231f20" strokeMiterlimit="10" /><polygon points="120.85 0 0 255.12 115.4 255.12 238.98 0 120.85 0" fill="greenyellow" /></svg>
            </div>

            <div className="right-img">
              <img className='pin-img' src="/porsche-model.png" alt="" />
            </div>

          </div>
        </div>

        <div className="p-5 division2 d-flex align-items-center justify-content-evenly">

          <div className="sell-left d-flex align-items-center justify-content-center">
            <div className="right-img">
              <img className='pin-img' src="/porsche-model.png" alt="" />
            </div>
          </div>

          <div className="sell-right d-flex flex-column align-items-center">
            <div className="div-head my-4 text-center">
              planning to <span style={{ color: "greenyellow" }}>sell ?</span>
            </div>

            <div className="body">

              <div className="body-1 d-flex my-4">
                <div className="body-comp me-3 d-flex col-6">
                  <div className="body-icon mx-4">
                    <i style={{border:"1.6px solid white"}} className="fa-solid fa-tag p-2 "></i>
                  </div>
                  <div className="icon-text">
                    Best prices
                  </div>
                </div>
                <div className="body-comp d-flex col-6">
                  <div className="body-icon mx-4">
                    <i style={{border:"1.6px solid white"}} className="fa-solid fa-truck-fast p-2 "></i>
                  </div>
                  <div className="icon-text">
                    Hassle Free
                  </div>
                </div>
              </div>

              <br />

              <div className="body-2 d-flex my-4">
                <div className="body-comp me-3 d-flex col-6 ">
                  <div className="body-icon mx-4">
                    <i style={{border:"1.6px solid white"}} className="fa-solid fa-stamp p-2 "></i>
                  </div>
                  <div className="icon-text">
                    Certified
                  </div>
                </div>
                <div className="body-comp d-flex col-6 ">
                  <div className="body-icon mx-4">
                    <i style={{border:"1.6px solid white"}} className="fa-solid fa-medal p-2 "></i>
                  </div>
                  <div className="icon-text">
                    Trusted Value
                  </div>
                </div>
              </div>

            </div>  

            <span className='div-head-2 mt-4 text-center'>Explore from our <br /> wide range of collection</span>

            <div className="div-footer my-5">
              <Link to="/sell"><button className='white-btn py-2 px-5'>
                know more
              </button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
