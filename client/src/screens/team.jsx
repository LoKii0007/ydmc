import React from 'react'
import "../css/team.css"
import Fixed from '../components/fixed'

export default function Team() {
  return (
    <>
      <div className="team d-flex flex-column ">
        <div className="team-top d-flex justify-content-center align-items-top">
          Meet our team
        </div>
        <div className="team-bottom m-5 d-flex justify-content-start align-items-center ">
            <div className="founders text-left">
                Founders
            </div>
          <div className="team-box my-4 p-3">
            <div className="tm-top text-center">
              "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
            </div>
            <div className="team-body d-flex flex-column justify-content-center align-items-center mb-4">
              <div className="team-img d-flex justify-content-start my-4">
                <img src="/achin.jpg" alt="" />
              </div>
              <div className="team-name d-flex justify-content-center align-items-center ">
                Achin Barmy
              </div>
            </div>
          </div>
          <div className="team-box my-4 p-3">
            <div className="tm-top text-center">
              "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
            </div>
            <div className="team-body d-flex flex-column justify-content-center align-items-center mb-4">
              <div className="team-img d-flex justify-content-start my-4">
                <img src="/achin.jpg" alt="" />
              </div>
              <div className="team-name d-flex justify-content-center align-items-center ">
                Achin Barmy
              </div>
            </div>
          </div>
          <div className="team-box my-4 p-3">
            <div className="tm-top text-center">
              "Lorem ipsum dolor, sit amet <br /> Lorem ipsum dolor, sit amet <br />consectetur adipisicing elit. <br />Numquam laudantium animi <br />quibusdam doloribus molestias nobis"
            </div>
            <div className="team-body d-flex flex-column justify-content-center align-items-center mb-4">
              <div className="team-img d-flex justify-content-start my-4">
                <img src="/achin.jpg" alt="" />
              </div>
              <div className="team-name d-flex justify-content-center align-items-center ">
                Achin Barmy
              </div>
            </div>
          </div>
        </div>
      </div>
      <Fixed/>
    </>
  )
}

