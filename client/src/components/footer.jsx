import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "../css/footer.css"

const Footer = () => {
  const [text, setText] = useState("")
  const companyOptions = ["Buy used BMW", "Buy used Mercedes", "Buy used Ford", "Buy used Citroen", "Buy used Ferrari", "Buy used Lamborghini", "Buy used MG", "Buy used Kia", "Buy used Mahindra", "Buy used Skoda", "Buy used Jeep", "Buy used Audi", "Buy used mini"]
  const bodyTypeOptions = ['Buy used SUV', 'Buy used Sedan', 'Buy used Convertible', 'Buy used Coupe', 'Buy used Sports', 'Buy used Hatchback', 'Buy used MUV-MPV']
  const General = ["Sell Car", "Videos", "FAQs", "location"]
  const address = ["Khasra number 30//7,", "VPO kapashera near rajokri roundabout,", "Rajokri, New Delhi, Delhi 110037"]
  const footerContent = [
    { title: 'General', content: General },
    { title: 'Studio', content: address },
    { title: 'Brands', content: companyOptions },
    { title: 'Style', content: bodyTypeOptions },]
  const [collapse, setCollapse] = useState(false)


  const handleEmail = () => {

  }

  const onChange = (e) => {
    setText(e.target.value)
  }


  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 800) {
        setCollapse(true)
      } else {
        setCollapse(false)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <>
      <div className="footer d-flex flex-column">
        <div className="social py-3 container d-flex justify-content-between align-items-center">
          <div className="social-left d-flex justify-content-evenly">
            <div className="social-text text">
              stay connected
            </div>
            <div className="social-links mx-5 d-flex flex-column justify-content-center align-items-center">
              <div className="social-logo  d-flex justify-content-center align-items-center">
                <div className="ig me-3 d-flex justify-content-center align-items-center">
                  <Link className='links-logo' target='blank' to="https://www.instagram.com/youdrivemecrazy_india/" ><i className="fa-brands fa-instagram"></i></Link>
                </div>
                <div className="fb mx-3 d-flex justify-content-center align-items-center">
                  <Link className='links-logo' to="https://www.facebook.com/search/top?q=you%20drive%20me%20crazy%20india" target='blank'><i className="fa-brands fa-facebook"></i></Link>
                </div>
              </div>
              {/* <div className="social-logo-text">
                follow us on social media to get updates regularly
              </div> */}
            </div>
          </div>
          <div className="social-right d-flex justify-content-evenly">
            <div className="social-email d-flex align-items-center">
              <input onChange={(e) => onChange(e)} value={text} name='email' className='email px-2 ' type="email" placeholder='Enter your email for updates' />
              <label className='signup' htmlFor="email"><button onClick={handleEmail} className='signup px-4'>Sign up</button></label>
            </div>
          </div>
        </div>
        <div className="footer-line">
        </div>
        <div className="main-footer container mt-4 mb-3">
          <div className="footer-body d-flex justify-content-evenly" id='accordian2'>

            {
              footerContent.map((section, index) => (
                <div className="foot-company d-flex flex-column" key={index}>
                  <button
                    className={`foot-head accordion-button ${collapse ? 'collapsed' : ''}`}
                    type="button"
                    data-bs-toggle={collapse ? 'collapse' : ''}
                    data-bs-target={`#collapse${section.title}`}
                    aria-expanded={!collapse ? "true" : "false"}
                    aria-controls={`collapse${section.title}`}
                  >
                    {section.title}
                  </button>

                  {index!== footerContent.length-1 ?<hr/>:""}
                  <div className='d-flex '>
                    <div className={`accordion-collapse mb-3 collapse ${!collapse ? 'show' : ''} ${section.title === section.title? "foot-option-selected":""} `} id={`collapse${section.title}`} data-bs-parent="#accordian2">
                      {section.content.slice(0, 8).map((option, subIndex) => (
                        <div key={subIndex} className={`mx-1 options ${option === option ? 'option-selected' : ''}`}>
                          {option}
                          
                        </div>
                        
                      ))}
                    </div>
                    <div className={`accordion-collapse collapse ${!collapse ? 'show' : ''} ${section.title === section.title? "foot-option-selected":""} `} id={`collapse${section.title}`} data-bs-parent="#accordian2">
                      {section.content.slice(9, section.content.length).map((option, subIndex) => (
                        <div key={subIndex} className={`mx-1 options ${option === option ? 'option-selected' : ''}`}>
                          {option}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}

          </div>
          <hr />

          <div className="footer-foot my-3 d-flex justify-content-between align-items-center">
            {/* <div className="copyright">copyright © You drive me crazy | Privacy policy | Terms of use</div> */}
            <div className="copyright">copyright © You drive me crazy</div>
            <div className="design">
              website by Spiderworks
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
