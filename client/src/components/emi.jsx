import React, { useState, useEffect } from 'react'
import { getAllCar } from '../services/api';
import "../css/emi.css"
import Fixed from './fixed';

export default function Emi() {

    const companyOptions = ["BMW", "Mercedes", "Ford", "Citroen", "Ferrari", "Lamborghini", "MG", "Kia", "Mahindra", "Skoda", "Jeep", "Audi"]
    const [cars, setCars] = useState([])
    const [searchResults, setSearchResults] = useState([])
    const [car, setCar] = useState({})
    const [company, setSelectedtCompany] = useState(null)
    const [name, setSelectedName] = useState(null)
    const [emi, setEmi] = useState(0)
    const [totalInterest, setTotalInterest] = useState(0)
    const [totalAmount, setTotalAmount] = useState(0)

    const [text, setText] = useState({
        downPayment: 1000,
        annual: 6,
        month: 1,
    });

    const handleSlider = (e) => {
        setText({
            ...text,
            [e.target.name]: parseFloat(e.target.value),
        });
    };


    // getting all car details
    const getAllCars = async () => {
        const res = await getAllCar();
        setCars(res);
        setSearchResults(res)
    }

    useEffect(() => {
        getAllCars()
    }, [])

    const handleCompanySelected = (option) => {
        setSelectedtCompany(option)
        const filteredCars = cars.filter(car => car.company.toLowerCase().includes(option.toLowerCase()))
        if (filteredCars) {
            setSearchResults(filteredCars)
        }
    }

    const handleCarSelected = (option) => {
        setSelectedName(option.name)
        setCar(option)
    }

    useEffect(() => {
    }, [car])

    useEffect(() => {
        const calcEmi = (car.price - text.downPayment) * ((((text.annual / 12) * 0.01) * Math.pow(1 + ((text.annual / 12) * 0.01), text.month)) / (Math.pow(1 + ((text.annual / 12) * 0.01), text.month) - 1))
        setEmi(calcEmi.toFixed(2))

        const totalLoanAmount = car.price - text.downPayment;
        const monthlyInterestRate = (text.annual / 12) * 0.01;
        const totalInterest = totalLoanAmount * monthlyInterestRate * text.month;
        setTotalInterest(totalInterest.toFixed(2));

        setTotalAmount((parseFloat(car.price) - parseFloat(text.downPayment) + parseFloat(totalInterest)).toFixed(2))
    }, [text, car])

    return (
        <>
            <div className="emi-component d-flex align-items-center justify-content-center">
                <div className="emi-calculator m-5 d-flex flex-column justify-content-evenly align-items-center ">

                    <div className="emi-top mb-5">
                        <div className="emi-head text text-center">
                            emi  calculator
                        </div>
                    </div>

                    <div className="emi-bottom d-flex flex-column align-items-top justify-content-evenly ">
                        <div className="emi-left d-flex flex-column">
                            <div className="emi-body d-flex accordion flex-column" id='accordion'>
                                <div className="selection d-flex accordion-item flex-column justify-content-center align-items-center">
                                    <div className="d-flex select-button mb-4 accordian-header  me-3" id='headingCompany'>
                                        <button className={`btn select-car px-2 py-1 emi-btn text accordion-button`} type="button" data-bs-toggle="collapse" data-bs-target="#collapseCompany" aria-expanded="true" aria-controls="collapseCompany">
                                            {company ? company : "Select Company"}
                                        </button>

                                    </div>
                                    <div className="accordion-collapse accordian-box collapse show my-2" id="collapseCompany" data-bs-parent="#accordion">
                                        <div className="card card-body">
                                            {companyOptions.map((option, index) => (
                                                <>
                                                    <button key={option} onClick={() => handleCompanySelected(option)} className={` select-company d-flex justify-content-center car-names ${option.name === option.name ? "emi-option" : ""} `} data-bs-toggle="collapse" data-bs-target="#collapseCompany" aria-expanded="false" aria-controls="collapseCompany">
                                                        {option}
                                                    </button>
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <div className="selection d-flex accordion-item flex-column justify-content-center align-items-center">
                                    <div className="d-flex select-button mb-4">
                                        <button className="btn select-car px-2 py-1 emi-btn text accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseCar" aria-expanded="false" aria-controls="collapseCar">
                                            {name ? name : "select Car model"}
                                        </button>
                                    </div>
                                    <div className="accordion-collapse accordian-box collapse my-2" id="collapseCar" data-bs-parent="#accordion">
                                        <div className="card card-body">
                                            {searchResults.map((option, index) => (
                                                <button key={index} onClick={() => handleCarSelected(option)} data-bs-toggle="collapse" className={`car-names select-car d-flex justify-content-center ${option.name === option.name ? "emi-option" : ""} `} data-bs-target="#collapseCar" aria-expanded="false" aria-controls="collapseCar">
                                                    {option.name}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {car && <div className="selected-car m-5 d-flex  justify-content-center align-items-center">
                                <div className="car-left  me-4">
                                    <img src={`/images/${car.image}`} alt="" />
                                </div>
                                <div className="car-right mt-3">
                                    <div className="car-name text-center">{car.name}</div>
                                    <div className="car-price text-center">₹{car.price}</div>
                                </div>
                            </div>
                            }

                        </div>
                        <div className="emi-right">
                            <div className="emi-foot d-flex mx-2 flex-column justify-content-center align-items-center">
                                <div className="down-payment mt-2">
                                    <label htmlFor="customRange3" className="form-label text" >Down Payment</label>
                                    <input name='downPayment' onChange={handleSlider} value={text.downPayment} type="range" className="form-range" min="1000" max={`${car.price}`} step="1000" id="customRange3" />
                                    <div className="actuual-value text-center">{text.downPayment}</div>
                                </div>
                                <div className="annual mt-2">
                                    <label htmlFor="customRange3" className="form-label text">Annual Intrest Rate</label>
                                    <input name='annual' onChange={handleSlider} value={text.annual} type="range" className="form-range" min="6" max="10" step="0.1" id="customRange3" />
                                    <div className="actuual-value text-center">{text.annual}</div>
                                </div>
                                <div className="month mt-2">
                                    <label htmlFor="customRange3" className="form-label text">Term/Period(Month)</label>
                                    <input name='month' onChange={handleSlider} value={text.month} type="range" className="form-range" min="1" max="84" step="1" id="customRange3" />
                                    <div className="actuual-value text-center">{text.month}</div>
                                    <hr />
                                </div>
                                <div className='calculated-values'>
                                    <div className="total-payment text-center mt-2">
                                        Total Amount To Pay  <br /> <span className='actual-value mt-2'>₹{totalAmount}</span>
                                    </div>
                                    <hr />
                                    <div className="total-Interest text-center mt-2">
                                        Total Interest payment  <br /> <span className='actual-value mt-2'>₹{totalInterest}</span>
                                    </div>
                                    <hr />
                                    <div className="total-emi text-center mt-2">
                                        Emi / month <br /> <span className='actual-value mt-2 emi-value'>₹{emi}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Fixed/>
        </>
    )
}
