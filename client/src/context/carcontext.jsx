import React, { createContext, useEffect, useState } from 'react'
import { getAllCar } from '../services/api'

export const carContext = createContext()

const CarState = (props) => {

  const [cars, setCars] = useState([])

  const getAllCars = async () => {
    const res = await getAllCar();
    setCars(res)
  }

  useEffect(() => {
    getAllCars()
  }, [])


  return (
    <carContext.Provider value={{ cars }}>
      {props.children}
    </carContext.Provider>
  )
}

export default CarState
