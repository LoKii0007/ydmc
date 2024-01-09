import React, {createContext, useState} from 'react'
import { addStaff, updateStaff, getStaff, deleteStaff } from '../services/authapi'

export const adminContext = createContext()

const AdminState = () => {  

    const [staff, setStaff] = useState([])

    // fetching all staff
    const getStaffDetails = async () => {
        const res = await getStaff()
        setStaff(res)
    }


    // add new staff members
    const addstaff = async() => {
        const res = await addStaff()
        console.log("add new staff member", res.name)
    }


    // deleting staff member
    const deletestaff = async () => {
        const res = await deleteStaff()
    }


    // updating staff details
    const updatestaff = async () => {
        const res = await updateStaff()
    }


  return (
    <adminContext.Provider value={{getStaffDetails , addstaff , deletestaff , updatestaff}}>
      {props.children}
    </adminContext.Provider>
  )
}

export default AdminState
