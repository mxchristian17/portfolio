import { Popover, Button, OverlayTrigger } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'

const WeatherWidget = () => {

    const [error, setError] = useState(null);
    const [weather, setweather] = useState([]);
    const [location, setLocation] = useState();

    const popover = (
        <Popover id="popover-basic">
          <Popover.Header as="h3">Why this widget?</Popover.Header>
          <Popover.Body>
            The reason for this widget here is to show an example of a <strong>REST Api</strong> in use
          </Popover.Body>
        </Popover>
      );

    const weatherIcon = (icon) => {
        return 'https://openweathermap.org/img/wn/'+icon+'.png'
    }

    const kelvin2Celsius = (T) => { return Math.round((T-273.15) * 10) / 10 }
    useEffect(() => {
        if(location == null) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition((loc) => {
                    setLocation( { latitude: loc.coords.latitude, longitude: loc.coords.longitude } )
                })
            }
        }
    })

    useEffect(() => {

        if(location != null) {

            fetch("https://api.openweathermap.org/data/2.5/weather?lat=" + location.latitude + "&lon=" + location.longitude + "&appid=" + process.env.REACT_APP_OPENWEATHER_ID)
            .then(res => res.json())
            .then(
                (data) => {
                    setweather(data);
                },
                (error) => {
                    setError(error);
                }
            )
        }
    }, [location])

  return (
    <div className="col-sm-auto">
        {error && "Weather failed loading"}
        {
        typeof(weather.main) !== "undefined" &&
        <div className="row bg-dark text-light rounded d-flex align-items-center p-0 m-0">
            <div style={{fontSize: "0.7em"}} className="col lh-1 py-0 pl-2">{kelvin2Celsius( weather.main.temp )}°C<br />
            Hum{weather.main.humidity}%</div>
            <div className="col py-0 px-1"><img alt="weather icon" style={{height: "2.5em"}} src={weatherIcon(weather.weather[0].icon)} /></div>
            <OverlayTrigger trigger="focus" placement="top" overlay={popover}>
                <Button variant="dark">Why this?</Button>
            </OverlayTrigger>
        </div>
        }
    </div>
  )
}

export default WeatherWidget