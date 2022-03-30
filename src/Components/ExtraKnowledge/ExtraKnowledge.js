import React from 'react'
import WeatherWidget from '../WeatherWidget/WeatherWidget'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faCompassDrafting, faCube, faLaptopCode } from '@fortawesome/free-solid-svg-icons'
import { faBootstrap, faCss3, faGitSquare, faHtml5, faLaravel, faPhp, faReact } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom';

const ExtraKnowledge = () => {
  return (
    <div className="col-lg-4 text-start px-4 py-3">
        <h4>Some extra knowledge</h4>
        
        <h5 className="pt-3 mb-0"><FontAwesomeIcon icon={faCube} /> Industrial Automation</h5>
        <a href="https://youtu.be/N-JrJYE6JDA?t=15" target="_blank" rel="noreferrer" className="h6" alt="PLC and HMI programming">Festo PLC and HMI programming</a>
        
        <h5 className="pt-3 mb-0"><FontAwesomeIcon icon={faCodeBranch} /> Project managment</h5>
        <a href="https://youtu.be/jQh6dEYE2hg" target="_blank" rel="noreferrer" className="h6" alt="Project managment">Design, development and production of can filling and closing machines</a>

        <h5 className="pt-3 mb-0"><FontAwesomeIcon icon={faCompassDrafting} /> 3D design and render</h5>
        <Link to="/vr" className="h6">3D environmental render for VR</Link>

        <h5 className="pt-4 mb-3"><FontAwesomeIcon icon={ faLaptopCode } /> Usefull skills</h5>
        <WeatherWidget />

        <div className="pt-4 h4 opacity-75">
        <FontAwesomeIcon className="px-2" icon={ faGitSquare } />
        <FontAwesomeIcon className="px-2" icon={ faReact } />
        <FontAwesomeIcon className="px-2" icon={ faPhp } />
        <FontAwesomeIcon className="px-2" icon={ faLaravel } />
        <FontAwesomeIcon className="px-2" icon={ faCss3 } />
        <FontAwesomeIcon className="px-2" icon={ faBootstrap } />
        <FontAwesomeIcon className="px-2" icon={ faHtml5 } />
        </div>

    </div>
  )
}

export default ExtraKnowledge