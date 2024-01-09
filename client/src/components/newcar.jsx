import React, { useEffect, useState } from 'react';
import "../css/newcar.css"
import { addCarInfo, addCarImages, addCarSummary, addCarSpecification, addMainImage } from '../services/api';
import { useParams } from 'react-router-dom';

const NewCar = () => {
  const { id } = useParams()
  const [images, setImages] = useState("")
  const [mainImage, setMainImage] = useState("")
  const [text, setText] = useState({})
  const [flag1, setFlag1] = useState(true)
  const [flag2, setFlag2] = useState(false)
  const [flag3, setFlag3] = useState(false)
  const [flag4, setFlag4] = useState(false)
  const [flag5, setFlag5] = useState(false)
  const [carId, setCarId] = useState("")

  const carSummaryCategories = ["Ownership", "Manufacturing_year", "Vehicle_type", "Insurance_validity", "Engine", "Transmission", "Peak_torque", "Peak_power", "Seating_capacity", "Fuel", "Kms_driven"]

  const specificationCategories = ['Overview', 'Engine_Transmission', 'Hybrid_System', 'Performance_Efficiency', 'Exterior_Equipment', 'Interior_Equipment', 'Seats_Upholstery', 'Entertainment_Front', 'Entertainment_Rear', 'Safety_Equipments', 'Suspension_Brakes_Wheels_Tyres', 'Dimensions_Weight_Storage_Capacity', 'Warranty_Service_Package', 'Exterior_Colours',
  ]

  const carSummaryCategoriesLower = carSummaryCategories.map(category => category.toLowerCase())
  const specificationCategoriesLower = specificationCategories.map(category => category.toLowerCase())


  const onChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value })
  }

  const resetForm = () => {
    const emptyText = {};
    Object.keys(text).forEach((key) => {
      emptyText[key] = "";
    });
    setText(emptyText);
    setText({});
  }


  //adding carInfo
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (text) {
      const res = await addCarInfo(text)
      console.log("added new car", res)
      setCarId(res.data._id)
    }
    resetForm()
    setFlag1(false)
    setFlag2(true)
  }

  useEffect(() => {
    console.log(carId);
  }, [carId]);


  //adding mainImage
  const handleMainImage = (e) => {
    e.preventDefault()
    setMainImage(e.target.files[0])
  }

  const handleSubmitMainImage = async (e) => {
    e.preventDefault()

    const formdata = new FormData()
    formdata.append("main_image", mainImage)
    formdata.append("car_id", carId)

    if (mainImage) {
      await addMainImage(formdata)
      console.log("added image")
    }
    setMainImage("")
    setFlag2(false)
    setFlag3(true)
  }


  // adding carsummary
  const handleSubmitSummary = async (e) => {
    e.preventDefault()
    const updatedText = { ...text, car_id: carId }
    if (updatedText) {
      const res = await addCarSummary(updatedText)
      console.log("added car summary")
    }
    resetForm()
    setFlag3(false)
    setFlag4(true)
  }


  //adding carspecification
  const handleSubmitSpecification = async (e) => {
    e.preventDefault()
    const updatedText = { ...text, car_id: carId }
    if (updatedText) {
      const res = await addCarSpecification(updatedText)
      console.log("added car specification")
    }
    resetForm()
    setFlag4(false)
    setFlag5(true)
  }


  //adding all images
  const handleImage = (e) => {
    e.preventDefault()
    setImages(e.target.files[0])
  }

  const handleAdd =async (e) =>{
    e.preventDefault()
    const formdata = new FormData()
    formdata.append("images", images)
    formdata.append("car_id", carId)
    if (images && carId !== "") {
      await addCarImages(formdata)
      console.log("added image")
    }
    setCarId("")
    resetForm()
    document.getElementById("image").value = "";
    setFlag5(false)
    setFlag1(true)
  }

  const handleSubmitImage = async (e) => {
    e.preventDefault()
    const formdata = new FormData()
    formdata.append("images", images)
    formdata.append("car_id", carId)
    if (images && carId !== "") {
      await addCarImages(formdata)
      console.log("added image")
    }
    resetForm()
    setImages("")
    document.getElementById("image").value = "";
  }


  return (
    <>
      <div className="mx-5 mb-5 d-flex flex-column justify-content-center ">
        {flag1 && <form type="submit" className='newcar-form' >

          <div className="form-group my-2">
            <label htmlFor="name">Car Name : </label>
            <input className="form-control new-control" onChange={onChange} value={text.name} type="text" id="name" name="name" required />
          </div>

          <div className="form-group my-2">
            <label htmlFor="company">Company : </label>
            <input className="form-control new-control" onChange={onChange} value={text.company} type="text" id="company" name="company" required />
          </div>

          <div className="form-group my-2">
            <label htmlFor="price">Price : </label>
            <input className="form-control new-control" onChange={onChange} value={text.price} type="number" id="price" name="price" required />
          </div>

          <div className="form-group my-2">
            <label htmlFor="price">body type : </label>
            <input className="form-control new-control" onChange={onChange} value={text.bodyType} type="text" id="body_type" name="body_type" required />
          </div>

          <div className="form-group my-2">
            <label htmlFor="reg_year">Registration Year : </label>
            <input className="form-control new-control" onChange={onChange} value={text.reg_year} type="number" id="reg_year" name="reg_year" required />
          </div>

          <div className="form-group my-2">
            <label htmlFor="kms">Kilometers Driven : </label>
            <input className="form-control new-control" onChange={onChange} value={text.kms} type="number" id="kms" name="kms" required />
          </div>

          <div className="form-group my-2">
            <label htmlFor="fuel_type">Fuel Type :</label>
            <input className="form-control new-control" onChange={onChange} value={text.fuel_type} type="text" id="fuel_type" name="fuel_type" required />
          </div>

          <div className="form-group my-2">
            <label htmlFor="reg_state">Registration State :</label>
            <input className="form-control new-control" onChange={onChange} value={text.reg_state} type="text" id="reg_state" name="reg_state" required />
          </div>

          <br />

          <div className=' ms-5' >
            <button className='px-5 py-1' onClick={handleSubmit} type="submit" value="Submit" >Next</button>
          </div>

        </form>}

        {flag2 && <form encType='multipart/form-data'>
        <div className="form-group my-2">
            <label htmlFor="image">Car Main Image : </label>
            <input onChange={handleMainImage} type="file" id="mainImage" name="mainImage" required />
          </div>

          <div className='text-center' >
            <button className='px-5 py-1' onClick={handleSubmitMainImage} type="submit" value="Submit" >Add images</button>
          </div>
        </form>}


        {flag3 && <form >
          {carSummaryCategoriesLower.map((option) => (
            <div className="form-group my-2" key={option}>
              <label htmlFor={text.option}>{option} :</label>
              <input className="form-control new-control" onChange={onChange} value={text.option} type="text" id={option} name={option} />
            </div>
          ))}

          <div className='text-center' >
            <button className='px-5 py-1' onClick={handleSubmitSummary} type="submit" value="Submit" >Next</button>
          </div>
        </form>}


        {flag4 && <form >
          {specificationCategoriesLower.map((option) => (
            <div className="form-group my-2">
              <label htmlFor={text.option}>{option}:</label>
              <input className="form-control new-control" onChange={onChange} value={text.option} key={option} type="text" id={option} name={option} required />
            </div>
          ))}

          <div className='text-center' >
            <button className='px-5 py-1' onClick={handleSubmitSpecification} type="submit" value="Submit" >Next</button>
          </div>
        </form>}


        {flag5 && <form encType='multipart/form-data'>
          <div className="form-group my-2">                
            <label htmlFor="image">Select Image : </label>
            <input onChange={handleImage} type="file" id="image" name="image" required />
            <button className='px-5 py-1' onClick={handleSubmitImage} type="submit" value="Submit" >upload and Add more images</button>

          </div>

          <div className='text-center' >
            <button className='px-5 py-1 my-3' onClick={handleAdd} type="submit" value="Submit" >upload and Done</button>
          </div>
        </form>}


      </div>
    </>
  );
};

export default NewCar;
