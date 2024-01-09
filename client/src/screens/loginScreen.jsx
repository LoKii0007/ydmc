import React, { useState } from 'react'
import Login from '../auth/login'
import "../css/loginscreen.css"
import StaffLogin from '../auth/stafflogin'

const LoginScreen = () => {
  const authToken = localStorage.getItem("token")
  const [staff, setStaff] = useState(true)
  const [admin, setAdmin] = useState(false)

  const handleStaff = () => {
    if (admin) {
      setAdmin(false)
    }
    setStaff(true)
  }
  const handleAdmin = () => {
    if (staff) {
      setStaff(false)
    }
    setAdmin(true)
  }

  return (
    <div className='d-flex flex-column logscreen align-items-start justify-content-start'>
      <div className="bg-logo pt-5 d-flex align-items-center justify-content-center">
        {/* <img src="/logo-img.jpg" alt="" /> */}
        <img src="/ydmc.png" alt="" />
      </div>
      <div className="login p-5">
        <div className="logn-type mb-3 d-flex align-items-center justify-content-center">
          <button onClick={handleStaff} className='btn btn-primary me-3'>staff</button>
          <button onClick={handleAdmin} className=' btn btn-primary'>admin</button>
        </div>
        <div className="screen">
          {staff && <div className="staff-login">
            <StaffLogin />
          </div>}

          {admin && <div className="admin-login">
            <Login />
          </div>}
        </div>
      </div>
    </div>
  )
}

export default LoginScreen
