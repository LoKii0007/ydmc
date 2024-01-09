import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../css/collectionitem.css"

const CollectionItem = ({car} ) => {

    const navigate = useNavigate()

    const handleClick = ()=>{
        navigate(`/cardetails/${car._id}`, { state: { id: car._id } })
        window.scrollTo({ top: 0, behavior: 'smooth' }); 
    }
    return (
        <>
                <div onClick={handleClick} className="box mx-3 col-4 my-5 d-flex flex-column">
                    <div className="box-head d-flex justify-content-center align-items-center">
                        <img className='box-img' src={`/images/${car.image}`} alt="" />
                        {/* <img className='box-img' src={car.img} alt="" /> */}
                    </div>
                    <div className="box-detail m-3 d-flex flex-column">
                        <div className="box-body mb-3 d-flex flex-column justify-content-center align-items-center">
                        <div className="title text py-1">
                                {car.name}
                            </div>
                            <div className="price text py-1">
                                ₹ {car.price}
                            </div>
                            <div className="emi py-1 text">
                                emi starts @ ₹{(car.price)*0.2}
                            </div>
                        </div>
                        <div className="box-footer d-flex flex-row justify-content-center align-items-center">
                            <div className="foot-info border-column mx-1 text text-center"> <span className='hard'>Reg year</span> <br /> {car.reg_year}</div>
                            <div className="foot-info border-column mx-1 text text-center"> <span className='hard'>Fuel type</span> <br />{car.fuel_type}</div>
                            <div className="foot-info border-column mx-1 text text-center"> <span className='hard'>Reg state</span> <br /> {car.reg_state}</div>
                            <div className="foot-info mx-1 text text-center"> <span className='hard'>kms driven </span> <br /> {car.kms}</div>
                        </div>
                    </div>
                </div>
        </>
    )
}

export default CollectionItem
