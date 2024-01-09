import React, { useState } from 'react'
import ContactForm from '../components/contactform'
import "../css/contact.css"
import { Link } from 'react-router-dom'
import Fixed from '../components/fixed'

export default function Contact() {
    const [locationClicked, setLocationClicked] = useState(true)
    const [msgClicked, setMsgClicked] = useState(false)
    const [message, setMessage] = useState({})

    const handleMsg = () => {
        if (msgClicked) {
            setMsgClicked(false)
        }
        setLocationClicked(true)
    }

    const handleLocation = () => {
        if (locationClicked) {
            setLocationClicked(false)
        }
        setMsgClicked(true)
    }

    const onchange = (e) => {
        setMessage({
            ...message, [e.target.name]: e.target.value
        })
    }
    return (
        <>
            <div className="contact p-5 d-flex flex-column justify-content-around">
                <div className="contact-top d-flex pt-5 px-3 align-items-center">
                    <div className="contact-text ">
                        Reach out to us
                    </div>
                </div>
                <div className="contact-foot  mt-4 mb-5 mx-3">
                    <div className="contact-mail mb-4 d-flex align-items-center">
                        <div className="mail-icon contact-icons px-4 py-3">
                            <i class="fa-solid fa-envelope"></i>
                        </div>
                        <div className="mail-text mx-2">
                            <div className='clickable-text '>
                                <a className='' href="https://mail.google.com/mail/u/0/#inbox?compose=new" target='blank' >
                                    someone@gmail.com
                                </a>
                            </div>
                            <p className='mb-0'>
                                Quick response guaranteed.
                            </p>
                        </div>
                    </div>
                    <div className="contact-call d-flex align-items-center">
                        <div className="call-icon contact-icons px-4 py-3">
                            <i class="fa-solid fa-phone-volume"></i>
                        </div>
                        <div className="contact-text mx-2 ">
                            <div className='clickable-text'>
                                <a className='text-left' href="tel:+919560003717">
                                    (+91) 95600 03717
                                </a>
                            </div>
                            <p className='mb-0'>
                                For quick assistance, call us .
                            </p>
                        </div>
                    </div>
                </div>
                <div className="icons d-flex justify-content-between align-items-center">
                    <div onClick={handleMsg} className={`msg-icon trans-icons py-3 px-4 ${locationClicked ? "msg-size" : ""} `}>
                        <i className="fa-solid fa-paper-plane"></i>
                    </div>
                    <div onClick={handleLocation} className={`location-icon trans-icons py-3 px-4 ${!locationClicked ? "location-size" : ""}`}>
                        <i className="fa-solid fa-location-dot"></i>
                    </div>
                </div>
                <div className={`contact-body m-3 p-2 d-flex ${locationClicked ? "translatelocation" : ""} `}>
                    <div className="location d-flex flex-column justify-content-center me-3 align-items-center">
                        <div className='location-text'>
                            <div className="location-head text-center my-3">
                                Our Showroom
                            </div>
                            <div className="location-desc text-center">
                                Khasra number 30//7, <br /> VPO kapashera near rajokri roundabout, <br /> Rajokri, New Delhi, Delhi 110037
                            </div>
                        </div>
                        <div className='my-5 location-data'>
                            <iframe title="Google Maps"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.774120260919!2d77.097958!3d28.5217026!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1953c42653bd%3A0x74c2e1c82df03054!2sKhasra%20number%2030%2F%2F7%2C%20You%20Drive%20Me%20Crazy%2C%20VPO%20kapashera%20near%20rajokri%20roundabout%2C%20Rajokri%2C%20New%20Delhi%2C%20Delhi%20110037!5e0!3m2!1sen!2sin!4vYOUR_MAPS_API_KEY" style={{ border: 0 }} allowFullScreen="" aria-hidden="false" tabIndex="0"></iframe>
                        </div>
                    </div>
                    <div className={`message ms-3 `} >
                        <div className="message-text py-3 text-center">
                            <div className='send1'>
                                Send us a message!
                            </div>
                            <div className='send2'>
                                How can we help you today?
                            </div>
                        </div>
                        <div className="message-body d-flex justify-content-center align-items-center">
                            <form type="submit">
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" name='name' onChange={onchange} value={message.name} className="contact-form form-control contact-control" id="name" />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                                    <input type="email" name='email' onChange={onchange} value={message.email} className="contact-form form-control contact-control" id="exampleInputEmail1" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">Message</label>
                                    <textarea placeholder='Write your message here...' className="form-control contact-control" onChange={onchange} value={message.textarea} id="exampleFormControlTextarea1" name='textarea' rows="3"></textarea>
                                </div>

                            </form>
                        </div>
                        <div className="message-foot mb-5 text-center">
                            <button className='msg-submit px-5 py-2'>Submit</button>
                        </div>
                    </div>
                </div>

                <div className="contact-left text-center d-flex align-items-center">
                </div>

            </div>

            <Fixed/>
        </>
    )
}
