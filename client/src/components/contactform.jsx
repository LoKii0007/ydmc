import React from 'react'
import "../css/contactform.css"

export default function ContactForm() {

    return (
        <>
            <div className="car-form d-flex flex-column">
                <form action="" type="submit" className='sell-form'>
                <div className="mb-3 d-flex flex-column ">
                    <label htmlFor="name" className="custom-form align-items-start d-flex form-label ">Name</label>
                    <input type="name" readonly className="form-control sell-control" id="name" />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="Email" className="custom-form align-items-start d-flex form-label ">Email</label>
                    <input type="email" readonly className="form-control sell-control" id="Email" />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="number" className="custom-form align-items-start d-flex form-label ">Phone</label>
                    <input type="number" className="form-control sell-control" id="number" />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="model" className="custom-form align-items-start d-flex form-label ">Car model</label>
                    <input type="text" className="form-control sell-control" id="model" />
                </div>
                <div className="mb-3 d-flex flex-column">
                    <label htmlFor="brand" className="custom-form align-items-start d-flex form-label ">Brand</label>
                    <input type="text" className="form-control sell-control" id="brand" />
                </div>

                <div className="my-4 d-flex justify-content-evenly">
                    <div className="mb-3  d-flex flex-column">
                        <label className="align-items-start d-flex form-label ">select Image</label>
                        <label htmlFor="image" style={{scale:"1.5"}} className="text-center d-flex justify-content-center form-label "><i class="fa-solid fa-file"></i></label>
                        <input type="file" style={{display:"none"}} className="form-control sell-control " id="image" />
                    </div>
                    <div className='mb-3 d-flex flex-column'>
                        <label className="align-items-start d-flex form-label ">Select Image</label>
                        <label htmlFor="image2 " style={{scale:"1.5"}} className="text-center justify-content-center d-flex form-label "><i class="fa-solid fa-file"></i></label>
                        <input type="file" style={{display:"none"}}  className="form-control sell-control" id="image2" />
                    </div>
                    <div className='mb-3 d-flex flex-column'>
                        <label className="align-items-start d-flex form-label ">Select Image</label>
                        <label htmlFor="image3 " style={{scale:"1.5"}} className="text-center justify-content-center d-flex form-label "><i class="fa-solid fa-file"></i></label>
                        <input type="file" style={{display:"none"}}  className="form-control sell-control" id="image3" />
                    </div>
                </div>

                <div className="sell-btn text-center">
                    <button className='text-center py-2'>submit</button>
                </div>

                
                </form>
            </div>
        </>
    )
}
