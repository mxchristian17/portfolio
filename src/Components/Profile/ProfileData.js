import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../Profile/Typing.css'

const ProfileData = () => {
  return (
    <div>
        <div className="d-flex align-items-start align-items-sm-center justify-content-start justify-content-sm-center"><div className="typing"><h3 className="py-0">ChristianOrengia</h3></div></div>
        <h5>
            <a href="https://github.com/mxchristian17" rel="noreferrer" alt="GitHub" target="_blank" className="px-1 text-dark text-decoration-none"><FontAwesomeIcon icon={faGithub} swapOpacity /></a>
            <a href="https://api.whatsapp.com/send?phone=5492235377049&text=Hi%20Christian!I%20want%20to%20offer%20you%20a%20job!" rel="noreferrer" alt="Whatsapp" target="_blank" className="px-1 text-success text-decoration-none"><FontAwesomeIcon icon={faWhatsapp} swapOpacity /></a>
            <a href="https://www.linkedin.com/in/orengiachristian/" rel="noreferrer" alt="LinkedIn" target="_blank" className="px-1 text-primary text-decoration-none"><FontAwesomeIcon icon={faLinkedin} swapOpacity /></a>
        </h5>
        <h6 className="py-0">City: Mar del Plata, Argentina</h6>
        <h6 className="py-0">Age: 34</h6>
    </div>
  )
}

export default ProfileData