import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Profile = () => {
  return (
    <div className="col-md-6 col-lg-4 text-center px-2 py-3 d-flex align-items-center">
        <div className="row d-flex align-items-center">
        <div className="col d-md-none text-start text-sm-center">
            <h3 className="py-0">Christian Orengia</h3>
            <h5>
            <a href="https://github.com/mxchristian17" rel="noreferrer" alt="GitHub" target="_blank" className="px-1 text-dark text-decoration-none"><FontAwesomeIcon icon={faGithub} swapOpacity /></a>
            <a href="https://api.whatsapp.com/send?phone=5492235377049&text=Hi%20Christian!" rel="noreferrer" alt="Whatsapp" target="_blank" className="px-1 text-success text-decoration-none"><FontAwesomeIcon icon={faWhatsapp} swapOpacity /></a>
            <a href="https://www.linkedin.com/in/orengiachristian/" rel="noreferrer" alt="LinkedIn" target="_blank" className="px-1 text-primary text-decoration-none"><FontAwesomeIcon icon={faLinkedin} swapOpacity /></a>
            </h5>
            <h6 className="py-0">City: Mar del Plata, Argentina</h6>
            <h6 className="py-0">Age: 32</h6>
        </div>
        <div className="col">
            <img src="/images/CEO.png" className="w-75 align-middle rounded-circle shadow" alt="avatar" />
            <div className="d-none d-md-block pt-2">
            <div className="d-flex align-items-center justify-content-center"><div className="typing"><h3 className="py-0">ChristianOrengia</h3></div></div>
            <h5>
                <a href="https://github.com/mxchristian17" rel="noreferrer" alt="GitHub" target="_blank" className="px-1 text-dark text-decoration-none"><FontAwesomeIcon icon={faGithub} swapOpacity /></a>
                <a href="https://api.whatsapp.com/send?phone=5492235377049&text=Hi%20Christian!I%20want%20to%20offer%20you%20a%20job!" rel="noreferrer" alt="Whatsapp" target="_blank" className="px-1 text-success text-decoration-none"><FontAwesomeIcon icon={faWhatsapp} swapOpacity /></a>
                <a href="https://www.linkedin.com/in/orengiachristian/" rel="noreferrer" alt="LinkedIn" target="_blank" className="px-1 text-primary text-decoration-none"><FontAwesomeIcon icon={faLinkedin} swapOpacity /></a>
            </h5>
            <h6 className="py-0">City: Mar del Plata, Argentina</h6>
            <h6 className="py-0">Age: 32</h6>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Profile