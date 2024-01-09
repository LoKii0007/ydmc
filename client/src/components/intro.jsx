import React, { useEffect, useState } from 'react'
import gsap from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import '../css/intro.css'


const Intro = () => {

    const navigate = useNavigate()
    const [text, setText] = useState("")

    const onchange = (e) => {
        setText(e.target.value)
    }

    const handleClick = (e) => {
        navigate("/collection", { state: { searchText: text } })
    }

    const handleClickSell = (e) => {
        navigate("/sell")
    }

    const handleInput = (e) => {
        if (e.key === 'Enter') {
            navigate("/collection", { state: { searchText: text } })
        }
    }

    // -------------animation------------------

    useEffect(() => {

        gsap.to(".portfolio-img", {
            y: 0,
            duration: 1,
            ease: "back",
            opacity: 1
        })
    }, [])


    return (
        <>
            <div className="intro justify-content-evenly position-relative mx-5 d-flex flex-column">

            <div className="slogan position-absolute my-5 mx-3">
                    <span className='main-slogan'>Driven Quality <br /> Trusted Miles </span> <br /> Your Journey Begins Here.
                </div>

                <div className="bg-carousel position-absolute">
                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/porsche-model.png" className="bg-img d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="/porsche-model.png" className="bg-img d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="/porsche-model.png" className="bg-img d-block w-100" alt="..."/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="portfolio d-flex mx-5 mt-5 position-relative justify-content-start align-items-center">
                    <div className="portfolio-left d-flex flex-column justify-content-center align-items-center ">
                        <div className="portfolio-desc  d-flex flex-column justify-content-center">
                            <div id='portfolio-desc' className="desc-1 d-flex justify-content-start">you</div>
                            <div id='portfolio-desc' className="desc-2 d-flex justify-content-center" data-text="drive">drive</div>
                            <div className="desc-3 d-flex justify-content-end">
                                <div id='portfolio-desc'>Me crazy</div>
                            </div>
                        </div>
                        <div className="browse-div d-flex my-5 justify-content-center align-items-end">
                            <div className="collection-btn d-flex flex-column justify-content-center">
                                <div className="b-input d-flex flex-column justify-content-center">
                                    <input onKeyDown={handleInput} onChange={onchange} value={text} className='p-2' id='myInput' type='text' placeholder='Search your buy' />
                                </div>
                                <div className='browse text-center my-3'>
                                    <button onClick={handleClick} className='btn custom-btn '>
                                        <h2 className='drive m-1 px-4'>Drive collection</h2>
                                    </button>
                                </div>
                                <div className='browse sell-car text-center mb-3'>
                                    <button onClick={handleClickSell} className='btn custom-btn '>
                                        <h2 className='drive m-1 px-4'>Sell Us Your Car</h2>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="portfolio-right pe-2 d-flex justify-content-center align-items-center" id='portfolio-img'>
                        <img className="portfolio-img" src="/mustang-2.webp" alt="" />
                    </div> */}
                </div>

            </div>
        </>
    )
}

export default Intro
