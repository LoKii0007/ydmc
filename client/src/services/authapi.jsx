import axios from "axios"

const url = import.meta.env.VITE_APP_BACKEND_URL


//authentication api
export const createuser = async(data)=>{
    try {
        const res = await axios.post(`${url}/api/auth/createUser`, data)
        if(res.status == 200){
            return res.data
        }
        else{
            console.log("invalid adduser api response", res.data)
        }
    } catch (error) {
        console.log("error calling createuser api", error.message)
    }
}

export const login = async(data)=>{
    try {
        const res = await axios.post(`${url}/api/auth/login`, data)
        if(res.status == 200){
            return res.data
        }
        else{
            console.log("invalid login api response", res.data)
        }
    } catch (error) {
        console.log("error calling login api", error.message)
    }
}

export const getuser = async(data)=>{
    try {
        const res = await axios.post(`${url}/api/auth/getUser`, data)
        if(res.status == 200){
            return res.data
        }
        else{
            console.log("invalid getuser api response", res.data)
        }
    } catch (error) {
        console.log("error calling getuser api", error.message)
    }
}


// staff auth
export const addStaff = async(data)=>{
    try {
        const res =  await axios.post(`${url}/api/auth/staff/add`, data)
        if(res.status == 200){
            return res.data
        }
        else{
            console.log("invalid addstaff api response", res.data)
        }
    } catch (error) {
        console.log("error calling addstaff api", error.message)
    }
}

export const loginStaff = async(data)=>{
    try {
        const res =  await axios.post(`${url}/api/auth/staff/login`, data)
        if(res.status == 200){
            return res.data
        }
        else{
            console.log("invalid loginstaff api response", res.data)
        }
    } catch (error) {
        console.log("error calling loginstaff api", error.message)
    }
}

export const getStaff = async()=>{
    try {
        const res = await axios.get(`${url}/api/auth/staff/get`)
        if(res.status == 200){
            return res.data
        }
        else{
            console.log("invalid getsatff api response", res.data)
        }
    } catch (error) {
        console.log("error calling getstaff api", error.message)
    }
}

export const updateStaff = async(data)=>{
    try {
        const res =  await axios.post(`${url}/api/auth/staff/update`, data)
        if(res.status == 200){
            return res.data
        }
        else{
            console.log("invalid updatestaff api response", res.data)
        }
    } catch (error) {
        console.log("error calling updatestaff api", error.message)
    }
}

export const deleteStaff = async(data)=>{
    try {
        const res =  await axios.post(`${url}/api/auth/staff/delete`, data)
        if(res.status == 200){
            return res.data
        }
        else{
            console.log("invalid deleteuser api response ", res.data)
        }
    } catch (error) {
        console.log("error calling addstaff api", error.message)
    }
}
