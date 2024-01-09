import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addStaff } from '../services/authapi';

export default function StaffSignup( {setaddbtn, addbtn}) {
    const navigate = useNavigate()
    const [credentials, setcredentials] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await addStaff(credentials)

        console.log(res.authToken)

        setcredentials({
            name: "",
            email: "",
            password: "",
            phone:"",
            gender:""
        })
        setaddbtn(!addbtn)
    }

    const onchange = (e) => {
        setcredentials({
            ...credentials, [e.target.name]: e.target.value
        })
    }

    return (
        <>
            <div className="container">
                <form onSubmit={handleSubmit} className='staff-form' >
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">name</label>
                        <input type="text" name='name' onChange={onchange} value={credentials.name} className="form-control staff-control" id="name" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name='email' onChange={onchange} value={credentials.email} className="form-control staff-control" id="email" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" name='password' onChange={onchange} value={credentials.password} minLength={5} className="form-control staff-control" id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">phone</label>
                        <input type="number" name='phone' onChange={onchange} value={credentials.phone} minLength={5} className="form-control staff-control" id="phone" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">gender</label>
                        <input type="text" name='gender' onChange={onchange} value={credentials.gender} minLength={5} className="form-control staff-control" id="gander" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </>
    )
}
