import React, { useContext, useEffect, useState } from 'react'
import "../css/popular.css"
import { carContext } from '../context/carcontext'
import "../css/collectionitem.css"
import CollectionItem from './collectionitem'

export default function Popular() {
    const context = useContext(carContext)
    const { cars } = context
    const [popular, setPopular] = useState([])
    const [items, setItems] = useState(true)

    useEffect(() => {
        setPopular(cars)
        const filter = cars.filter(car => car.price > 7000000)
        // console.log(filter)
        if (filter) {
            setPopular(filter)
        }
    }, [cars])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 500) {
                setItems(false)
            } else {
                setItems(true)
            }
        }
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [])

    if (items) {
        return (
            <>
                <div className="popular d-flex flex-column">
                    <div className="popular-top m-5 text-center">
                        popular cars
                    </div>
                    <div className={`popular-bottom mx-1 justify-content-center d-flex flex-wrap`}>
                        {/* {popular.slice(0, 6).map((car, index) => (
                            <CollectionItem key={index} car={car} />
                        ))} */}

                        <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    {popular.slice(0, 1).map((car, index) => (
                                        <CollectionItem key={index} car={car} />
                                    ))}
                                </div>
                                <div class="carousel-item">
                                    {popular.slice(1, 2).map((car, index) => (
                                        <CollectionItem key={index} car={car} />
                                    ))}
                                </div>
                                <div class="carousel-item">
                                    {popular.slice(2, 3).map((car, index) => (
                                        <CollectionItem key={index} car={car} />
                                    ))}
                                </div>
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Previous</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
            </>
        )
    } else {
        return (
            <>
                <div className="popular d-flex flex-column">
                    <div className="popular-top m-5 text-center">
                        popular cars
                    </div>
                    <div className={`popular-bottom mx-1 justify-content-center d-flex flex-wrap`}>
                        {popular.slice(0, 6).map((car, index) => (
                            <CollectionItem key={index} car={car} />
                        ))}
                    </div>
                </div>
            </>
        )
    }

}
