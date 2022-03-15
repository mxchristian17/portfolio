import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCodeBranch, faCube } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import Console from '../Console/Console'
import '../Home/Typing.css'
import Profile from '../Profile/Profile'

const Home = () => {

  return (
    <div className="container-fluid">
      <div className="w-100 top-0 py-md-4 d-flex align-items-center">
        <div className="row w-100 py-4 px-1 px-md-4 justify-content-md-center">
          <Profile />
          <Console />
        </div>
      </div>
      <div className="row px-3 px-md-4 pt-4 justify-content-md-center bg-light border-top">
        <div className="col-lg-6 text-start px-4 py-3">
          <h3 className="pb-1">About me...</h3>
          <p>I am passionate about programming. In the last 12 years I spent thousand of hours doing projects and learning several programming languages like PHP, SQL, JavaScript, HTML5 and Python. I'm very self taught and I´m always predisposed to learn new things.<br />
          According to the LinkedIn PHP skill test, I am in the top 5% of 505.5K people who did it.<br />
          Since 2016 I have been developing a complex business management system focused on connecting and optimizing all areas of medium-sized manufacturing production companies.</p>
          <p>On the other hand, I´m a Mechanical Engineer with experience designing and supervising production of can seamers and filling machines up to 300 CPM, designing and supervising structure construction for the oil and energy industry and software development to manage and coordinate productive processes.<br />
          Currently I work in a team made of mechanical engineers and mechanical technicians with people in charge developing and producing hi-tech machines mainly for the food industry.</p>
        </div>
        <div className="col-lg-4 text-start px-4 py-3">
          <h4>Some extra knowledge...</h4>
          
          <h5 className="pt-2"><FontAwesomeIcon icon={faCube} /> Industrial Automation</h5>
          <a href="https://youtu.be/N-JrJYE6JDA?t=15" target="_blank" rel="noreferrer" className="h6" alt="PLC and HMI programming">Festo PLC and HMI programming</a>
          
          <h5 className="pt-2"><FontAwesomeIcon icon={faCodeBranch} /> Project managment</h5>
          <a href="https://youtu.be/jQh6dEYE2hg" target="_blank" rel="noreferrer" className="h6" alt="Project managment">Design, development and production of can filling and closing machines</a>
        
        </div>
      </div>
    </div>
  )
}

export default Home