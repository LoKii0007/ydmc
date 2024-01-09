import axios from "axios"
import toast from "react-hot-toast"

const VERCELURL = "https://ydmc-backend.vercel.app"
// const URL = "http://localhost:8000"


//adding car details api
export const addCarInfo = async (data) => {
    try {
        const res = await axios.post(`${VERCELURL}/api/add/car-info`, data)
        if (res.status == 200) {
            toast.success("added car-info succesfully")
            return res.data
        }
        else {
            console.log("invalid get-car-info api response", res.data)
        }
    } catch (error) {
        console.log("error calling addCarInfo api", error.message)
    }
}

export const addMainImage = async (data) => {
    try {
        const res = await axios.post(`${VERCELURL}/api/add/car-main-image`, data, { headers: { "Content-Type": "multipart/form-data" } })
        if (res.status == 200) {
            toast.success("added main image succesfully")
            return res.data
        }
        else {
            console.log("invalid get-car-info api response", res)
        }
    } catch (error) {
        console.log("error calling addCarImages api", error.response.data)
    }
}

export const addCarSummary = async (data) => {
    try {
        const res = await axios.post(`${VERCELURL}/api/add/car-summary`, data)
        if (res.status == 200) {
            toast.success("added car summary succesfully")
            return res.data
        }
        else {
            console.log("invalid get-car-summaryapi response", res.data)
        }
    } catch (error) {
        console.log("error calling addCarSummary api", error.message)
    }
}

export const addCarSpecification = async (data) => {
    try {
        const res = await axios.post(`${VERCELURL}/api/add/car-specification`, data)
        if (res.status == 200) {
            toast.success("added car specification succesfully")
            return res.data
        }
        else {
            console.log("invalid get-car-specification api response", res.data)
        }
    } catch (error) {
        console.log("error calling addCarspecification api", error.message)
    }
}

export const addCarImages = async (data) => {
    try {
        const res = await axios.post(`${VERCELURL}/api/add/car-images`, data, { headers: { "Content-Type": "multipart/form-data" } })
        if (res.status == 200) {
            toast.success("added image succesfully")
            return res.data
        }
        else {
            console.log("invalid get-car-info api response", res)
        }
    } catch (error) {
        console.log("error calling addCarImages api", error.response.data)
    }
}


// fetching car details api
export const getAllCar = async () => {
    try {
        const res = await axios.get(`${VERCELURL}/api/get/cars`)
        if (res.status == 200) {
            return res.data
        }
        else {
            console.log("invalid getcars api response", res.data)
        }
    } catch (error) {
        console.log("error calling getAllCar api", error.message)
    }
}

export const getCar = async (data) => {
    try {
        const res = await axios.post(`${VERCELURL}/api/get/car-info`, data)
        if (res.status == 200) {
            return res.data
        }
        else {
            console.log("invalid get-car-info api response", res.data)
        }
    } catch (error) {
        console.log("error calling getCar api", error.message)
    }
}


export const getCarSummary = async (data) => {
    try {
        const res = await axios.post(`${VERCELURL}/api/get/car-summary`, data)
        if (res.status == 200) {
            return res.data
        }
        else {
            console.log("invalid get-car-summary api response", res.data)
        }
    } catch (error) {
        console.log("error calling getCarSummary api", error.message)
    }
}


export const getCarSpecification = async (data) => {
    try {
        const res = await axios.post(`${VERCELURL}/api/get/car-specification`, data)
        if (res.status == 200) {
            return res.data
        }
        else {
            console.log("invalid get-car-Specification api response", res.data)
        }
    } catch (error) {
        console.log("error calling getCarSpecification api", error.message)
    }
}


export const getCarImages = async (data) => {
    try {
        const res = await axios.post(`${VERCELURL}/api/get/car-images`, data)
        if (res.status == 200) {
            return res.data
        }
        else {
            console.log("invalid get-car-images api response", res.data)
        }
    } catch (error) {
        console.log("error calling getCarImages api", error.message)
    }
}

