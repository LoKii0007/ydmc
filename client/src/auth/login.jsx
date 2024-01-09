import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { login } from '../services/authapi';

export default function Login() {
    const navigate = useNavigate()
    const [credentials, setcredentials] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await login(credentials)
        localStorage.setItem("token", res.authToken)
        setFlag(true)
        navigate("/admin", { state: { flag: true } })

        setcredentials({
            email: "",
            password: "",
        })

    }

    const onchange = (e) => {
        setcredentials({
            ...credentials, [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" name='email' placeholder='email' onChange={onchange} value={credentials.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" name='password' placeholder='password' onChange={onchange} value={credentials.password} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="login-submit d-flex align-items-center justify-content-center">
                    <button type="submit"  className="btn admin-btn btn-success">Login as admin</button>
                </div>
            </form>
        </>
    )
}
