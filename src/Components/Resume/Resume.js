import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInbox, faLink, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'

const Resume = () => {

  return (
    <section className="container">
      <div className="row px-3 px-md-4 py-4 mt-4 justify-content-md-center bg-light border-top border-bottom rounded rounded-3 shadow-lg">
        <article className="col-12 col-lg-6 p-lg-4">

          <h1 className="d-block d-lg-none pb-4">Christian Ezequiel Orengia</h1>

          <ProfilePicture />

          <hr className="my-4" />

          <div className="text-start px-lg-4">
            <h3 className="mb-3">Contact</h3>
            <div className="row mb-2">
              <div className="col-1"><FontAwesomeIcon className="h6 align-middle pe-2" icon={ faPhone } /></div>
              <div className="col-10 h6"><a href="https://api.whatsapp.com/send?phone=5492235377049&text=Hi%20Christian!I%20want%20to%20offer%20you%20a%20job!" rel="noreferrer" alt="Whatsapp" target="_blank" className="text-decoration-none text-dark">+54 9 223 537 7049</a></div>
            </div>
            <div className="row mb-2">
              <div className="col-1"><FontAwesomeIcon className="h6 align-middle pe-2" icon={ faInbox } /></div>
              <div className="col-10 h6"><a href="mailto:orengiachristian@gmail.com" className="text-decoration-none text-dark">orengiachristian@gmail.com</a></div>
            </div>
            <div className="row mb-2">
              <div className="col-1"><FontAwesomeIcon className="h6 align-middle pe-2" icon={ faLocationPin } /></div>
              <div className="col-10 h6">Pringles 610, Mar del Plata, Argentina</div>
            </div>
            <div className="row mb-2">
              <div className="col-1"><FontAwesomeIcon className="h6 align-middle pe-2" icon={ faLink } /></div>
              <div className="col-10 h6"><a href="https://ceoportfolio.netlify.app/" className="text-decoration-none">Web portfolio</a></div>
            </div>
            <div className="row mb-2">
              <div className="col-1"><FontAwesomeIcon className="h6 align-middle pe-2" icon={ faLinkedin } /></div>
              <div className="col-10 h6"><a href="https://www.linkedin.com/in/orengiachristian/" className="text-decoration-none">LinkedIn</a></div>
            </div>

            <hr className="my-4" />
  
            <h3 className="mb-3">More information</h3>
            
            <ul>
              <li>Date of birth: 05/01/1990 (Mar del Plata, Argentina)</li>
              <li>Citizenships: Argentine and Italian</li>
            </ul>

          </div>

        </article>
        <article className="col-12 col-lg-6 text-start">
          <h1 className="d-none d-lg-block">Christian Ezequiel Orengia</h1>

          <hr className="d-block d-lg-none" />

          <h3>About me</h3>
          <p>I´m a mechanical engineer passionate about programming. In the last 12 years I spent thousand of hours doing projects and learning several programming languages like PHP, SQL, JavaScript, HTML5 and Python. I'm very self taught and I´m always predisposed to learn new things.</p>
          <p>According to the LinkedIn PHP skill test, I am in the top 5% of 505.5K people who did it. Currently I´m working as a mechanical engineer with 6 people in charge. I´m used to working on complex projects with strict deadlines. I´m trying to change my profile to the software industry. I can write here a lot of things, but I think you need to know me if you want to understand how much I can offer to your company.</p>
          
          <hr />

          <h3>Featured projects</h3>

          <h6>2020 {'>'} Present</h6>
          <p>Neutrinus – Improved version of Orengia y Conforti ICSA general data manager. Mounted in a XAMPP server and coded with Laravel, Bootstrap, MYSQL, JavaScript, Jquery and Python. The previous project was adapted to be usable for any other company. With improved security and custimizable configuration based on business needs. The project is private in my GitHub account, so if you want to take a look of it you can ask me.</p>
          <h6>2015 {'>'} 2020</h6>
          <p>Orengia y Conforti ICSA general data manager – Mounted into a XAMPP server and coded in PHP, MYSQL, JavaScript, Jquery, Bootstrap and Java.</p>

          <h6>2010 {'>'} 2013</h6>
          <p>IngenieriaMDP – Web campus for students of “Facultad de Ingeniería de la Universidad Nacional de Mar del Plata”. Made in a webserver with PHP, JavaScript, CSS, HTML. It had 600 users with work groups to carry out university assignments, special features for teachers who can upload exam grades, internal chat, and a lot of other related features.</p>

          <hr />

          <h3>Academic training</h3>

          <h6>University studies</h6>
          <p>2008 {'>'} 2014 – Mechanical Engineer (5 year career). General average: 7,40 (Facultad de Ingeniería de la Universidad Nacional de Mar del Plata)</p>

          <h6>Courses</h6>
          <ul>
            <li>2022 - React Js (by Coderhouse) Accomplished in the top 10% of 120 students</li>
            <li>2021 - Introduction to Computer Science and Programming Using Python (by MIT)</li>
            <li>2014 - Autocad 2D / 3D (50hs ; ERP Campus Virtual)</li>
            <li>2005 {'>'} 2007 - AutoCAD 2D y 3D (144hs ; Instituto Industrial Pablo Tavelli)</li>
          </ul>

          <hr />

          <h3>Other work experience</h3>
          
          <h6>Mechanical Engineer</h6>
          <p>2015 {'>'} Present Development engineering in technical office; Planning and supervision of production with 6 people in charge in Orengia y Conforti ICSA.</p>
          <p>2015 {'>'} Design and calculation of modification of advertising trailer for loads of up to 4tn</p>
          <p>2015 {'>'} Design and calculation of an automatic pipe straightening machine (industrial) for the company REFMAR S.R.L. With FESTO electronics, PLC and HMI.</p>
          <p>2015 {'>'} PLC programming of polyurethane dispenser for oil filters (MANN-HUMEL) in Orengia and Conforti I.C.S.A.</p>
          <p>2014 {'>'} Project supervisor and designer in the engineering area corresponding to Del Plata Ingeniería S.A. for oil industry.</p>
          <p>2013/2014 {'>'} Provisional Professor in Metrology and Quality Control of the 7th year of the Pablo Tavelli Industrial Institute</p>
          <p>2013/2014 {'>'} Provisional Professor in Mechanical Systems of the 7th year of the Pablo Tavelli Industrial Institute</p>
          <p>2013/2014 {'>'} Substitute Professor in Mechanical Systems 6th year at the Pablo Tavelli Industrial Institute</p>
          <p>2013 {'>'} Two weeks as a 5th year substitute professor in Mechanics and Mechanisms at the Pablo Tavelli Industrial Institute</p>
          <p>2013 {'>'} Two months of programmer of CNC machining centers in ISO language</p>

          <hr />

          <h3>Languages</h3>

          <h6>Spanish</h6>
          <p>Native</p>
          
          <h6>Written English</h6>
          <p>Advanced</p>

          <h6>Oral English</h6>
          <p>Intermidiate - Advanced</p>

          <h6>Written Italian</h6>
          <p>Intermidiate</p>

        </article>
      </div>
    </section>
  )
}

export default Resume