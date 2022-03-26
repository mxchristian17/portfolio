import React from 'react'
import WeatherWidget from '../WeatherWidget/WeatherWidget'

const Footer = () => {
  return (
    <footer className="container-fluid py-4">
      <div className="row">
        <div className="col-sm">Christian Orengia Portfolio - 2022</div>
        <WeatherWidget />
      </div>
    </footer>
  )
}

export default Footer