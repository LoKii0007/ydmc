import React, { useContext, useState } from 'react'
import NewCar from '../components/newcar'
import StaffSignup from '../auth/staffsignup'
import { Link, useParams } from 'react-router-dom'
import "../css/admin.css"
import { adminContext } from '../context/admincontext'


const Admin = () => {
  const flag = useParams()
  const context = useContext(adminContext)
  // const {addstaff} = context
  const authToken = localStorage.getItem("token")
  const [addbtn, setaddbtn] = useState(false)
  const [getbtn, setGetbtn] = useState(false)

  const handleAdd = () => {

  }

  const handleUpdate = () => {

  }

  const handleDelete = () => {

  }
  const handleGet = () => {
  }


  if (authToken) {
    return (
      <>
        <div className="admin">
          <div className="add-car">
            <h2 className='pt-5 ms-5 ps-2'>Add new car</h2>
            <NewCar />
          </div>

          <hr />

          {flag &&
            <div className="staff pb-5 d-flex flex-column">
              <div class="accordion accordion-flush" id="accordionFlushExample">
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      Add staff
                    </button>
                  </h2>
                  <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <StaffSignup />
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      All members
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <div className="all-staff">
                        Member 1
                      </div>
                      <div className="all-staff">
                        Member 2
                      </div>
                      <div className="all-staff">
                        Member 3
                      </div>
                    </div>
                  </div>
                </div>
                <div class="accordion-item">
                  <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      All Users
                    </button>
                  </h2>
                  <div id="flush-collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                    <div class="accordion-body">
                      <div className="all-staff">
                        User 1
                      </div>
                      <div className="all-staff">
                        User 2
                      </div>
                      <div className="all-staff">
                        User 3
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>}

        </div>
      </>
    )
  } else {
    return (
      <>
        <div className="coontainer admin p-5">
          <h2 className='text-center' >you need to login</h2>
          <Link to="/loginscreen"><button className='btn '>Login screen</button></Link>
        </div>
      </>
    )
  }
}

export default Admin
