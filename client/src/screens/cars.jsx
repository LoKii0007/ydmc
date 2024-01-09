import React,{useState, useEffect} from 'react'
import Collection from './collection'
import { getAllCar } from "../services/api"
import Fixed from '../components/fixed'


const Cars = () => {
  const [cars, setCars] = useState([])


  const getAllCars = async () => {
    const res = await getAllCar()
    if (res != undefined) {
        setCars(res)
        const filteredData = res.filter(car => car.name.toLowerCase().includes(searchText.toLowerCase()))
        setSearchResults(filteredData)
    }
  }

  
  useEffect(() => {
    getAllCars()
}, [])

  return (
    <>
      <Collection cars={cars} />
      <Fixed/>
    </>
  )
}

export default Cars
