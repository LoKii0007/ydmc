import React from 'react'
import "../css/gallery.css"
import { useNavigate } from 'react-router-dom'
import Fixed from './fixed'

export default function Gallery() {
    const navigate = useNavigate()
    const IntGallery = ["e1", "e2", "e3", "e4"]
    const ExtGallery = ["1", "2", "3", "4", "5", "6"]
    const handleClick= () =>{
        navigate("/collection")
    }
    return (
        <>
            <div className="gallery text-center py-5">
                <div className="glry-top mb-5">
                    <h2>Image Gallery</h2>
                </div>
                <div className="glry-body mb-5">
                    <div className="accordion interior" id="accordionPanelsStayOpenExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                    Exterior
                                </button>
                                <hr />
                            </h2>
                            <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show">
                                <div className="accordion-body glry-acc-body">
                                    {ExtGallery.map((name, index) => (
                                        <img key={index} className='gal-img mb-3' src={`/${name}.jpg`} alt="" />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                                    Interior
                                </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse">
                                <div className="accordion-body glry-acc-body">
                                    {IntGallery.map((name, index) => (
                                        <img key={index} className='gal-img mb-3' src={`/${name}.jpg`} alt="" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div onClick={handleClick} className="glry-foot mx-5 ">
                    <div className="foot-img position-relative text-center">
                        <button className='gl-btn position-absolute '>Browse cars</button>
                        <img src="/2.jpg" alt="" />
                    </div>
                </div>
            </div>
            <Fixed/>
        </>
    )
}
