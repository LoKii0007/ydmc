import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import gsap from 'gsap'
import '../css/navbar.css'

const Navbar = () => {
    const url = "http://localhost:5173"

    const [scrolled, setScrolled] = useState(false);
    const navbarItems = [
        { title: "Home", link: "" },
        { title: "Preowned Cars", link: "collection" },
        { title: "Sell Car", link: "sell" },
        { title: "Vintage Cars", link: "vintage" },
        { title: "EMI Calculator", link: "emi" },
        { title: "Why Us", link: "whyus" },
        { title: "Contact Us", link: "contact" },
        { title: "About Us", link: "about" },
        { title: "Team", link: "team" },
        { title: "Wallpapers", link: "wallpapers" },
    ]
    const navigate = useNavigate()

    useEffect(() => {
        const tl = gsap.timeline()


        tl.to(".line", {
            x: 0,
            duration: 1,
            ease: "back.in"
        })

        tl.to(".nav-items", {
            y: 0,
            ease: "back.in",
            duration: 1,
            stagger: 0.07
        })

        tl.to(".tyre", {
            x: "100vw",
            duration: 3,
            ease: "back",
            // rotationZ:3600,
            delay: -1
        })
    })

    const handleNav = (nav) => {
        navigate("/" + nav.link)
    }

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > window.innerHeight;
            setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            <div className='sticky-top'>
                <div className="tyre mt-3 position-absolute">
                    <img className='logo-image' src="/porsche-model.png" alt="image" />
                </div>

                <div className={`custom-navbar d-flex justify-content-between align-items-center ${scrolled ? "scrolled" : ""} `} >
                    <div className={`navbar-left ms-5 d-flex flex-row ${scrolled ? "scrolled-items" : ""}`}>
                        <div className="logo-name ms-2 nav-items">
                            <Link to="/" className=""><img className='logo-image' src="/ydmc.png" alt="image" /></Link>
                        </div>
                    </div>
                    <div className={`navbar-right me-5 d-flex  ${scrolled ? "scrolled-items" : ""}`}>
                        <div className="nav-item d-flex ">
                            <div className="nav-items mx-1">
                                <Link to="/" className={`nav-items ${window.location.href === url + "/" ? "active" : ""}`}>Home</Link>
                            </div>
                            <div className="nav-items mx-3">
                                <Link to="/collection" className={`nav-items ${window.location.href === url + "/collection" ? "active" : ""}`}>Preowned Cars</Link>
                            </div>
                            <div className="nav-items mx-3">
                                <Link to="/buy" className={`nav-items ${window.location.href === url + "/buy" ? "active" : ""}`}>Sell car</Link>
                            </div>
                            <div className="nav-items mx-3">
                                <Link to="/contact" className={`nav-items ${window.location.href === url + "/contact" ? "active" : ""}`}>Contact</Link>
                            </div>
                        </div>
                        <button id='cross' className="menu d-flex align-items-center" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" >
                            <i className="fa-solid fa-bars nav-items"></i>
                        </button>
                    </div>
                </div>
                <div className={`line ${scrolled ? "scrolled-line" : ""}`}></div>

                {/* menubar */}

                <div className="offcanvas offcanvas-end " tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header d-flex justify-content-end">
                        <button type="button" className="btn-close canva-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        {navbarItems.map((item, index) => (
                            <>
                                <div onClick={() => handleNav(item)} key={index} className="canvas-items mx-3">
                                    <Link className={`canva-item `} data-bs-dismiss="offcanvas" aria-label="Close" >{item.title}</Link>
                                </div>
                                {index!== navbarItems.length-1 ?<hr/>:""}
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar
