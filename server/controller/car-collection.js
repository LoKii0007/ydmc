const carInfo = require("../models/car-info.js")
const carSummary = require ("../models/car-summary.js")
const carSpecification = require ("../models/car-specification.js")
const Images = require("../models/car-image.js")

const newCar = async(request, response) => {
     try {
        const newCar = new carInfo(request.body)
        await newCar.save()
        return response.status(200).json({message: "added new car successfully", data: newCar})
     } catch (error) {
        return response.status(500).json({message : "error adding car-info : ", error :error.message})
     }
}

const addMainImage = async(request, response) => {
   try {
      const imageName =  request.file.filename
      const carId =  request.body.car_id
      console.log(imageName , carId)
      await carInfo.findByIdAndUpdate(carId , {image : imageName}, {new : true})
      return response.status(200).json("Added car images successfully")
   }catch (error) {
        return response.status(500).json({message : "error adding car images : ", error :error.message})
     }  
}

const newCarSummary = async(request, response) => {
     try {
        const newCar = new carSummary(request.body)
        await newCar.save()
        return response.status(200).json({message : "added car summary : ", data : newCar})
     } catch (error) {
        return response.status(500).json({message : "error adding car summary : ", error :error.message})
     }
}

const newCarSpecification = async(request, response) => {
     try {
        const newCar = new carSpecification(request.body)
        await newCar.save()
        return response.status(200).json({message : "added car specification : ", data : newCar})
     } catch (error) {
        return response.status(500).json({message : "error adding car specification : ", error :error.message})
     }
}


const addCarImages = async(request, response) => {
   try {
      const imageName =  request.file.filename
      const carId =  request.body.car_id
      await Images.create({images: imageName, car_id: carId})
      return response.status(200).json("Added car images successfully")
   }catch (error) {
        return response.status(500).json({message : "error adding car images : ", error :error.message})
     }  
}


// fetching data
const getCar = async(req , res ) => {
   try {
      const carId = req.body.id
      const carinfo = await carInfo.findById(carId)
      if(!carinfo || carinfo.length === 0){
         return res.status(400).json("no carinfo found or invalid car_id")
      }
      return res.status(200).json({message :"fetched carinfo  successfully", data: carinfo})
   } catch (error) {
      return res.status(500).json({message : "error fetching carinfo : ", error :error.message})
      
   }
}

const getCarSpecification = async(req , res ) => {
   try {
      const carId = req.body.id
      const carspecification = await carSpecification.find({car_id: carId})
      if(!carspecification || carspecification.length === 0){
         return res.status(400).json("no carspecification found or invalid car_id")
      }
      return res.status(200).json({message :"fetched car specification successfully", data: carspecification})
   } catch (error) {
      return res.status(500).json({message : "error fetching car specification : ", error :error.message})
      
   }
}

const getCarSummary = async(req , res ) => {
   try {
      const carId = req.body.id
      const carsummary = await carSummary.find({car_id: carId})
      if(!carsummary){
         return res.status(400).json("no car summary found or invalid car_id")
      }
      return res.status(200).json({message :"fetched car summary successfully", data: carsummary})
   } catch (error) {
      return res.status(500).json({message : "error fetching car summary : ", error :error.message})
      
   }
}

const getCarImages = async(req , res ) => {
   try {
      const carId = req.body.id
      const carImages = await Images.find({car_id: carId})
      if(!carImages){
         return res.status(400).json("no images found or invalid car_id")
      }
      return res.status(200).json({message :"fetched images successfully", data: carImages})
   } catch (error) {
      return res.status(500).json({message : "error fetching car images : ", error :error.message})
      
   }
}

const getAllCars = async(request , response)=>{
    try {
        const carinfo = await carInfo.find({})
        return response.status(200).json(carinfo)
    } catch (error) {
        return response.status(500).json({message : "error fetching car collection details : ", error :error.message})
        
    }
}


module.exports = {newCar,addMainImage , getCar, getAllCars,  addCarImages, newCarSummary , newCarSpecification, getCarSpecification , getCarSummary , getCarImages}