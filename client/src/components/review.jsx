import React from 'react'
import "../css/review.css"

export default function Review() {
  return (
    <>
      <div className="review d-flex flex-column ">
        <div className="review-top d-flex justify-content-start align-items-top">
          What do our user's say
        </div>
        <div className="review-bottom d-flex justify-content-start align-items-center ">
          <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="10000">
                <div className="review-box mx-5 p-3">
                  <div className="rv-top text-center">
                    "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
                  </div>
                  <div className="rv-body p-2">
                    <div className="review-img d-flex justify-content-start">
                      <img src="/porsche-model.png" alt="" />
                    </div>
                    <div className="review-name d-flex justify-content-start p-2 ">
                      Someone
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <div className="review-box mx-5 p-3">
                  <div className="rv-top text-center">
                    "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
                  </div>
                  <div className="rv-body p-2">
                    <div className="review-img d-flex justify-content-start">
                      <img src="/porsche-model.png" alt="" />
                    </div>
                    <div className="review-name d-flex justify-content-start p-2 ">
                      Someone
                    </div>
                  </div>
                </div>
              </div>
              <div className="carousel-item">
                <div className="review-box mx-5 p-3">
                  <div className="rv-top text-center">
                    "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
                  </div>
                  <div className="rv-body p-2">
                    <div className="review-img d-flex justify-content-start">
                      <img src="/porsche-model.png" alt="" />
                    </div>
                    <div className="review-name d-flex justify-content-start p-2 ">
                      Someone
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button> */}
          </div>
        </div>
      </div>
    </>
  )
}
