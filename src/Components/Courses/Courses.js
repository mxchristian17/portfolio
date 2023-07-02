import { faGraduationCap, faTrophy } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export const Courses = () => {
  return (
    <div className="col col-lg-10 text-light text-start py-4 px-4">
        <h3 className="pb-4">Courses and certifications</h3>
        <p><FontAwesomeIcon icon={ faGraduationCap } /> CoderHouse - React Js (Top10% of 120 students)<a className="mx-2 btn btn-sm btn-outline-light" target="_blank" rel="noreferrer" href="https://www.coderhouse.com/certificados/61e7654e6dd5d6007ce70afd?lang=es">Show certificate</a></p>
        <p><FontAwesomeIcon icon={ faGraduationCap } /> CoderHouse - Metodologías ágiles (SCRUM)<a className="mx-2 btn btn-sm btn-outline-light" target="_blank" rel="noreferrer" href="https://www.coderhouse.com/certificados/631f298bcd57750024b017bc?lang=es">Show certificate</a></p>
        <p><FontAwesomeIcon icon={ faGraduationCap } /> Massachusetts Institute of Technology - Introduction to Computer Science and Programming Using Python - MITx 6.00.1x</p>
        <p><FontAwesomeIcon icon={ faTrophy } /> LinkedIn - Top-five percentile ranking in the PHP skill test</p>
        <p><FontAwesomeIcon icon={ faTrophy } /> LinkedIn - Top-five percentile ranking in the JavaScript skill test</p>
    </div>
  )
}
