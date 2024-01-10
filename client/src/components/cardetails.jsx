import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom"
import { getAllCar, getCarImages, getCarSummary, getCarSpecification, getCar } from "../services/api"
import CollectionItem from '../components/collectionitem'
import "../css/cardetails.css"
import Fixed from './fixed'

const CarDetails = () => {
    const { id } = useParams()
    const [cars, setCars] = useState([])
    const [car, setCar] = useState({})
    const [relatedCars, setRelatedCars] = useState([])
    const [showDropdown, setShowDropdown] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [carSummary, setCarSummary] = useState({});
    const [carSpecification, setCarSpecification] = useState({});
    const [images, setImages] = useState([])
    const [items, setItems] = useState(6)

    const carSummaryCategories = [
        { frontend: "Ownership", backend: "ownership" },
        { frontend: "Manufacturing year", backend: "manufacturing_year" },
        { frontend: "Vehicle type", backend: "vehicle_type" },
        { frontend: "Insurance validity", backend: "insurance_validity" },
        { frontend: "Engine", backend: "engine" },
        { frontend: "Transmission", backend: "transmission" },
        { frontend: "Peak torque", backend: "peak_torque" },
        { frontend: "Peak power", backend: "peak_power" },
        { frontend: "Seating capacity", backend: "seating_capacity" },
        { frontend: "Fuel", backend: "fuel" },
        { frontend: "Kms driven", backend: "kms_driven" },
    ];

    const specificationCategories = [
        { frontend: "Overview", backend: "overview" },
        { frontend: "Engine & Transmission", backend: "engine_transmission" },
        { frontend: "Hybrid System", backend: "hybrid_system" },
        { frontend: "Performance & Efficiency", backend: "performance_efficiency" },
        { frontend: "Exterior Equipment", backend: "exterior_equipment" },
        { frontend: "Interior Equipment", backend: "interior_equipment" },
        { frontend: "Seats & Upholstery", backend: "seats_upholstery" },
        { frontend: "Entertainment Front", backend: "entertainment_front" },
        { frontend: "Entertainment Rear", backend: "entertainment_rear" },
        { frontend: "Safety Equipments", backend: "safety_equipments" },
        { frontend: "Suspension, Brakes, Wheels & Tyres", backend: "suspension_brakes_wheels_tyres" },
        { frontend: "Dimensions, Weight, Storage, Capacity", backend: "dimensions_weight_storage_capacity" },
        { frontend: "Warranty & Service Package", backend: "warranty_service_package" },
        { frontend: "Exterior Colours", backend: "exterior_colours" }
    ];


    const getAllCars = async () => {
        const res = await getAllCar()
        if (res != undefined) {
            const filteredcar = res.filter(car => car._id.includes(id.toLowerCase()))
            setCars(filteredcar)

            const filteredRelatedCar = res.filter(car => car._id !== id)
            setRelatedCars(filteredRelatedCar)
        }
    }

    const getCars = async () => {
        const res = await getCar({ id })
        if (res) {
            setCar(res.data)
        }
    }

    const getcarsummary = async () => {
        const res = await getCarSummary({ id })
        if (res) {
            setCarSummary(res.data[0])
        }
    }

    const getcarspecification = async () => {
        const res = await getCarSpecification({ id })
        if (res) {
            setCarSpecification(res.data[0])
        }
    }

    const getcarimages = async () => {
        const res = await getCarImages({ id })
        if (res) {
            setImages(res.data)
        }
    }

    useEffect(() => {
        getAllCars()
        if (id) {
            getCars()
            getcarsummary()
            getcarspecification()
            getcarimages()
        }
    }, [id])

    useEffect(() => {
    }, [car, images, carSummary, carSpecification])


    const handleSpecification = (category) => {
        setSelectedCategory(category);
        setShowDropdown(!showDropdown);
    }

    useEffect(()=>{
        const handleResize=()=>{
            if(window.innerWidth > 500){
                setItems(3)
            }else{
                setItems(6)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return ()=>{
            window.removeEventListener("resize", handleResize)
        }
    },[])


    return (
        <>
            <div className="details-page pb-4">
                <div className="details py-4 d-flex justify-content-between">

                    <div className="details-left ms-4 d-flex">
                        <div className="details-name d-flex flex-column justify-content-center">
                            <div className="car-name text-left">{car.name !== undefined ? car.name : "name"}</div>
                            <div className="car-price text">₹{car.price !== undefined ? car.price : "name"}</div>
                            <div className="car-emi text d-flex align-items-center"><span className='hard'>EMI STARTS @</span> ₹{car.price !== undefined ? (car.price) * 0.2 : "name"}</div>
                        </div>

                        <div className="details-desc mx-5 d-flex flex-column justify-content-center">
                            <div className="kms-driven text"><span className='hard'>Kms driven</span> : {car.kms !== undefined ? car.kms : "name"}</div>
                            <div className="fuel-type text"><span className='hard'>Fuel type</span> : {car.fuel_type !== undefined ? car.fuel_type : "name"}</div>
                            <div className="reg-year text"><span className='hard'>Reg year</span> : {car.reg_year !== undefined ? car.reg_year : "name"}</div>
                            <div className="reg-state text"><span className='hard'>Reg state</span> : {car.reg_state !== undefined ? car.reg_state : "name"}</div>
                        </div>
                    </div>

                    <div className="details-right me-4 d-flex justify-content-center align-items-center">
                        <div className="store-no text ">
                            +91 9560545070
                        </div>
                        <div className="reserve-car mx-3">
                            <Link to="/reserve-car"><button className='reserve-btn'>Reserve</button></Link>
                        </div>
                        <div className="car-emi-btn">
                            <Link to="/emi"><button className='reserve-btn'>Emi calculator</button></Link>
                        </div>
                    </div>

                </div>

                <div className="d-flex carosel-div flex-column align-items-center">

                    <div id="carouselExampleIndicators" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                            {/* {Array.isArray(images) && images.length > 0 ? images.map((index) => (
                                <button key={index} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={index} aria-label={`slide ${index + 1}`} className={`${index === 0 ? "active" : ''} `} aria-current={`${index === 0 ? "true" : ''} `}
                                ></button>
                            )) : ''} */}

                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>

                        </div>
                        <div className="carousel-inner-1 d-flex justify-content-center align-items-center">
                            <div className="carousel-inner">

                                <div className="carousel-item active">
                                    <img src={`/images/${car.image}`} className="d-block carousel-img" alt="image" />
                                </div>

                                {Array.isArray(images) && images.length > 0 ? images.map((option, index) => (
                                    <div key={index} className="carousel-item">
                                        <img src={`/images/${option.images}`} className="d-block carousel-img" alt="..." />
                                    </div>
                                )) :
                                    ""
                                }
                            </div>
                        </div>

                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>

                    </div>



                </div>

                <div className="view-3d m-5 text-center">
                    <button className='py-2 px-5'>
                        <Link to="/gallery">Image Gallery</Link>
                    </button>
                </div>

                <div className="container d-flex flex-column">
                    <div className="details-page-head mt-5 m-2">
                        Car's Bio-data
                    </div>

                    <div className="car-summary-body d-flex flex-wrap">
                        {carSummaryCategories.map((options, index) => {
                            return <div key={index} className={`summary-items col-${items} text my-3`}>
                                <div className="sum-item-text">
                                    <span className='summary-item-hard'>{options.frontend}</span> <br />
                                    {carSummary == undefined || carSummary[options.backend] == null ? "NA" : carSummary[options.backend]}
                                </div>
                            </div>
                        })}
                    </div>
                </div>

                <div className="full-specification container d-flex flex-column">
                    <div className="details-page-head mt-5 m-2">all specifications</div>
                    <div className="specification-body m-2 d-flex flex-column justify-content-center">
                        {specificationCategories.map((category, index) => (
                            <div key={index} onClick={() => handleSpecification(category.frontend)} className={`specification-items px-2 py-2 text ${selectedCategory === category.frontend && showDropdown ? 'specification-active' : ''}`}>
                                {category.frontend}
                                {selectedCategory === category.frontend && showDropdown && (
                                    <div className="dropdown-content">
                                        {/* {category.value.map((opt, index) => (
                                            <div key={index}>
                                                {opt.frontend}   {carSpecification == undefined || carSpecification[opt.backend] == null ? "NA" : carSpecification[category.backend]}
                                            </div>

                                        ))} */}
                                        {carSpecification == undefined || carSpecification[category.backend] == null ? "NA" : carSpecification[category.backend]}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="related-cars container">
                    <div className="details-page-head mt-5 m-2">
                        Related Cars
                    </div>
                    <div className="related-cars-body">
                        <div className="col-body d-flex flex-wrap justify-content-evenly">
                            {relatedCars.slice(0, 10).map((car) => {
                                return <CollectionItem key={car._id} car={car} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
            <Fixed/>
        </>
    )
}

export default CarDetails
