import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faInbox, faLink, faLocationPin, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import ProfilePicture from '../ProfilePicture/ProfilePicture'

const Resume = () => {

  return (
    <section className="container px-sm-4">
      <div className="print row px-3 px-md-4 py-4 mt-4 justify-content-md-center bg-light">
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
              <div className="col-10 h6"><a href="https://ceoportfolio.netlify.app/" className="text-decoration-none" target="_blank" rel="noreferrer">Web portfolio</a></div>
            </div>
            <div className="row mb-2">
              <div className="col-1"><FontAwesomeIcon className="h6 align-middle pe-2" icon={ faLinkedin } /></div>
              <div className="col-10 h6"><a href="https://www.linkedin.com/in/orengiachristian/" className="text-decoration-none" target="_blank" rel="noreferrer">LinkedIn</a></div>
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
          <p>I'm an engineer passionate about programming.</p>
          <p>In the last 12 years I became an expert in PHP, MySQL, JavaScript and HTML5. I am a proactive individual with a strong enthusiasm for self-directed learning and a continuous desire to acquire new skills.</p>
          <p>My primary career objective is to enhance my developer skills and leverage my knowledge to positively impact people's lives.</p>
          
          <hr />
          <br className="d-none d-print-block" />

          <h3>Professional experience</h3>

          <h6>2015 {'>'} Present</h6>
          <p>Orengia y Conforti ICSA - Project Manager / PHP developer (PHP, MYSQL, JavaScript, Jquery, Bootstrap and Java).</p>

          <h4> Projects</h4>

          <h6>2020 {'>'} Present</h6>
          <p>Neutrinus – Business general data manager (Laravel, Bootstrap, MYSQL, JavaScript, Jquery and Python).</p>

          <h6>2010 {'>'} 2013</h6>
          <p>Web campus for students of Mar del Plata University. (PHP, JavaScript, CSS, HTML).</p>

          <hr />

          <h3>Courses and certificates</h3>
          <p className="my-0"><span className="text-secondary">2022</span> - <b>React Js</b> (<a className="text-decoration-none" href="https://www.coderhouse.com/certificados/61e7654e6dd5d6007ce70afd" target="_blank" rel="noreferrer">certified by Coderhouse</a>) <small className="text-secondary">Top 10% of 150 students</small></p>
          <p className="my-0"><span className="text-secondary">2022</span> - <b>Metodologías ágiles (SCRUM)</b> (<a className="text-decoration-none" href="https://www.coderhouse.com/certificados/631f298bcd57750024b017bc" target="_blank" rel="noreferrer">certified by Coderhouse</a>)</p>
          <p className="my-0"><span className="text-secondary">2022</span> - <b>C1 advanced English level</b> (<a className="text-decoration-none" href="https://www.efset.org/cert/CNpdKG" target="_blank" rel="noreferrer">certified by EF SET</a>)</p>
          <p className="my-0"><span className="text-secondary">2021</span> - Introduction to Computer Science and Programming Using <b>Python</b> (by MIT)</p>
          <p className="my-0"><span className="text-secondary">2014</span> - <b>Autocad 2D / 3D</b> (50hs ; ERP Campus Virtual)</p>
          <p className="my-0"><span className="text-secondary">2005</span> {'>'} 2007 - <b>AutoCAD 2D y 3D</b> (144hs ; Instituto Industrial Pablo Tavelli)</p>

          <hr />

          <h3>Academic training</h3>

          <h6>University studies</h6>
          <p>2008 {'>'} 2014 – Mechanical Engineer (5 year career). General average: 7,40 (Facultad de Ingeniería de la Universidad Nacional de Mar del Plata)</p>

          <hr className="my-4" />

          <h3>Languages</h3>

          <h6>English</h6>
          <p>C1 Advanced (<a className="text-decoration-none" href="https://www.efset.org/cert/CNpdKG" target="_blank" rel="noreferrer">certified by EF SET</a>)</p>
          
          <h6>Spanish</h6>
          <p>Native</p>

        </article>
      </div>
    </section>
  )
}

export default Resume