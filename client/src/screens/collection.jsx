import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import "../css/collection.css"
import CollectionItem from '../components/collectionitem'
import { getAllCar } from "../services/api"
import Fixed from '../components/fixed'

const Collection = () => {
    const pageSize = 18
    const location = useLocation();
    const searchText = location.state && location.state.searchText ? location.state.searchText : '';
    console.log(searchText)
    const [text, setText] = useState("")
    const [cars, setCars] = useState([])
    const [searchResults, setSearchResults] = useState([]);
    const [displayPrev, setDisplayPrev] = useState(0)
    const [displayNext, setDisplayNext] = useState(pageSize)
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [priceOptions, setPriceOptions] = useState([]);

    const companyOptions = ["BMW", "Mercedes", "Ford", "Citroen", "Ferrari", "Lamborghini", "MG", "Kia", "Mahindra", "Skoda", "Jeep", "Audi"]
    const budgetOptions = [
        {name : 'less than 50L', min: 0, max: 5000000},
        {name : '50L to 1Cr', min: 5000000, max: 10000000},
        {name : '1Cr to 1.5Cr', min: 10000000, max: 15000000},
        {name : '1.5Cr to 2Cr', min: 15000000, max: 20000000},
        {name : '2Cr & above', min: 20000000, max: Infinity}
      ]
      
    const bodyTypeOptions = ['SUV', 'Sedan', 'Convertible', 'Coupe', 'Sports', 'Hatchback', 'MUV-MPV']
    const kmsDrivenOptions =  [
        {name : '0-5,000', min: 0, max: 5000},
        {name : '5,000 - 10,000', min: 5000, max: 10000},
        {name : '10,000 - 15,000', min: 10000, max: 15000},
        {name : '15,000 - 20,000', min: 15000, max: 20000},
        {name : '20,000 & above', min: 20000, max: Infinity}
      ]


    // getting all car details
    const getAllCars = async () => {
        const res = await getAllCar();
        setCars(res);
        if (searchText) {
            const filteredData = res.filter(car => car.name.toLowerCase().includes(searchText.toLowerCase()));
            setSearchResults(filteredData);
        } else {
            setSearchResults(res);
        }
    }

    useEffect(() => {
        getAllCars()
    }, [])


    // --------------------applying filters---------------
    const onChange = (e) => {
        e.preventDefault()
        setText(e.target.value)
    }

    useEffect(() => {
        const handleSearch = () => {
            const filteredSearch = cars.filter(car => (car.name.toLowerCase().includes(text.toLowerCase())  || car.company.toLowerCase().includes(text.toLowerCase()) ) )
            if(text.length > 0 ){
                if(displayNext !== pageSize && displayPrev !== 0){
                    setDisplayPrev(0)
                    setDisplayNext(pageSize)
                }
            }

            setSearchResults(filteredSearch)
        }

        handleSearch()
    }, [text, cars])


    const handleOptions = (option) => {
        setSelectedOptions((prevOptions) => {
            const isSelected = prevOptions.includes(option);
            if (isSelected) {
                return prevOptions.filter((prevOption) => prevOption !== option);
            } else {
                return [...prevOptions, option]
            }
        })
    }

    const handlePriceOptions = (option) => {
      setPriceOptions((prevOptions) => {
        const isSelected = prevOptions.some(prevOption => prevOption.name === option.name)
        if (isSelected) {
          return prevOptions.filter((prevOption) => prevOption.name !== option.name);
        } else {
          return [...prevOptions, option];
        }
      });
    };


    const applyFilters =() => {
        let filteredCars = []
    
        // Filter by text value
        if (selectedOptions.length > 0) {
            selectedOptions.forEach((option) => {
                const matchingCars = cars.filter((car) => ( car.company.toLowerCase().includes(option.toLowerCase()) || car.body_type.toLowerCase().includes(option.toLowerCase()) ));
                matchingCars.forEach((matchingCar) => {
                    if (!filteredCars.find(car => car._id === matchingCar._id)) {
                        filteredCars.push(matchingCar);
                    }
                });
            })
            if(displayNext !== pageSize && displayPrev !== 0){
                setDisplayPrev(0)
                setDisplayNext(pageSize)
            }
            setSearchResults(filteredCars)
        }
    
        //filter by numeric values
        if (priceOptions.length > 0) {
            priceOptions.forEach((option) => {
                const matchingCars = cars.filter((car) => car.price >= option.min && car.price <= option.max );
                matchingCars.forEach((matchingCar) => {
                    if (!filteredCars.find(car => car._id === matchingCar._id)) {
                        filteredCars.push(matchingCar);
                    }
                });
            })
            if(displayNext !== pageSize && displayPrev !== 0){
                setDisplayPrev(0)
                setDisplayNext(pageSize)
            }
            setSearchResults(filteredCars)
        }
    };
    

    const resetFilters = () => {
        setSelectedOptions([])
        setPriceOptions([])
        setSearchResults(cars);
    }


    // ------------------paging-------------

    const handlePrevClick = () => {
        setDisplayNext(displayNext - pageSize)
        setDisplayPrev(displayPrev - pageSize)

    }
    const handleNextClick = () => {
        setDisplayNext(displayNext + pageSize)
        setDisplayPrev(displayPrev + pageSize)
    }


    return (
        <>
            <div className='collection px-3 py-5 d-flex flex-column'>
                <div className="col-head mx-5 d-flex justify-content-between align-items-center">
                    <div className="results text">
                        Total results : {displayNext < searchResults.length ? displayNext : searchResults.length}/ {searchResults.length}
                    </div>
                    <div className="filters d-flex justify-content-center align-items-center">
                        <div className="fil-2 px-3">
                            <input onChange={(e) => onChange(e)} value={text} className='filter-search' placeholder='search' type="text" />
                        </div>
                        <div className="fil-1 px-3 d-flex justify-content-center align-items-center">
                            <div className="fil-1-text text-center">filters : </div>
                            <button className=" ms-3 fil-1-icon" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="35" height="35" fill="none" stroke="black" strokeWidth="4">
                                    <line x1="20" y1="30" x2="80" y2="30" />
                                    <circle cx="70" cy="30" r="8" fill="none" />
                                    <line x1="20" y1="50" x2="80" y2="50" />
                                    <circle cx="30" cy="50" r="8" fill="none" />
                                    <line x1="20" y1="70" x2="80" y2="70" />
                                    <circle cx="60" cy="70" r="8" fill="none" />
                                </svg>


                            </button>
                        </div>
                    </div>
                </div>
                <div className="col-body d-flex flex-wrap justify-content-evenly">

                    {searchResults.slice(displayPrev, displayNext).map((car) => (
                        <CollectionItem key={car._id} car={car} />
                    ))}


                </div>
                <div className="col-footer d-flex justify-content-between mx-5">

                    <button disabled={displayPrev == 0} onClick={handlePrevClick} className="btn prev-icon ms-5">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="33" viewBox="0 0 448 512"><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" /></svg>
                    </button>
                    <button disabled={displayNext >= searchResults.length} onClick={handleNextClick} className="btn next-icon me-5">
                        <svg xmlns="http://www.w3.org/2000/svg" height="32" width="33" viewBox="0 0 448 512"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" /></svg>
                    </button>

                </div>


            </div>



            {/* --------------modal---------- */}

            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">

                        <div className="close-button m-2 d-flex justify-content-end">
                            <button onClick={resetFilters} className="reset-btn mt-3 d-flex align-items-center">
                                Reset
                            </button>
                            <button type="button" className="btn-close mt-3 mx-3 d-flex align-items-center" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div className="filter-types m-3 modal-body">
                            <div className="fil-brand">
                                <div className="fil-head">Select Company</div>
                                <div className="fil-body d-flex flex-wrap text-center">
                                    {companyOptions.map((option, index) => (
                                        <div onClick={() => handleOptions(option)} className={`filter-item ${selectedOptions.includes(option) ? 'filter-option-clicked' : ""} col-md-2`} key={index} > {option} </div>
                                    ))}
                                </div>
                            </div>
                            <div className="fil-price mt-4">
                                <div className="fil-head">Budget</div>
                                <div className="fil-body d-flex flex-wrap text-center">
                                    {budgetOptions.map((option, index) => (
                                        <div onClick={() => handlePriceOptions(option)} className={`filter-item ${priceOptions.some(priceOption => priceOption.name === option.name) ? 'filter-option-clicked' : ""} col-md-2`} key={index} > {option.name} </div>
                                    ))}
                                </div>
                            </div>
                            <div className="fil-body-type mt-4">
                                <div className="fil-head">Body Type</div>
                                <div className="fil-body d-flex flex-wrap text-center">
                                    {bodyTypeOptions.map((option, index) => (
                                        <div onClick={() => handleOptions(option)} className={`filter-item ${selectedOptions.includes(option) ? 'filter-option-clicked' : ""} col-md-2`} key={index} > {option} </div>
                                    ))}
                                </div>
                            </div>
                            <div className="fil-kms mt-4">
                                <div className="fil-head">Kms Driven</div>
                                <div className="fil-body d-flex flex-wrap text-center">
                                    {kmsDrivenOptions.map((option, index) => (
                                        <div onClick={() => handlePriceOptions(option)} className={`filter-item ${priceOptions.some(priceOption => priceOption.name === option.name) ? 'filter-option-clicked' : ""} col-md-2`} key={index} > {option.name} </div>
                                    ))}
                                </div>
                            </div>
                            <div className="apply-filter d-flex justify-content-center">
                                <button onClick={applyFilters} className='apply-btn' data-bs-dismiss="modal" aria-label="Close">Apply filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Fixed/>

        </>
    )
}

export default Collection
