import { Popover, Button, OverlayTrigger } from 'react-bootstrap'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const WeatherWidget = () => {

    const [ showRestApi, setShowRestApi ] = useState(false);
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
        if(location == null & showRestApi) {
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
                    const dataExtended = {
                        ...data,
                        icon : weatherIcon(data.weather[0].icon),
                        temp : kelvin2Celsius(data.main.temp),
                        maxTemp : kelvin2Celsius(data.main.temp_max),
                        minTemp : kelvin2Celsius(data.main.temp_min),
                        humidity : data.main.humidity,
                        description : data.weather[0].description
                    }
                    setweather(dataExtended);
                },
                (error) => {
                    setError(error);
                }
            )
        }
    }, [location])

  return (
    <div className="w-100">
        {error && "Weather failed loading"}
        <div style={{fontSize : "1em"}} className="rounded d-flex align-items-center p-0 m-0">
        {
        typeof(weather.main) !== "undefined" & showRestApi ?
            <div>
                <div className="d-inline float-start me-3">
                    <OverlayTrigger trigger="focus" placement="top" overlay={popover}>
                        <Button className="btn-sm" variant="dark">REST Api usage<FontAwesomeIcon className="ms-2" icon={ faArrowRight } /></Button>
                    </OverlayTrigger>
                </div>
                { weather.temp }°C<span className="d-none d-sm-inline"> - Hum { weather.humidity }%</span>
                <img alt="weather icon" style={{height: "2.5em"}} src={ weather.icon } />
                { weather.description }
            </div>
        :   showRestApi ? 
            <h6>REST API usage <small className="text-secondary">(enable location on your browser to look one example here!)</small></h6>
            :
            <div><h6 className="d-inline pe-2">REST API usage<FontAwesomeIcon className="ms-2" icon={ faArrowRight } /></h6><button className="btn btn-sm btn-dark" onClick={()=>{setShowRestApi(true)}}>Show example</button></div>
        }
        </div>
    </div>
  )
}

export default WeatherWidget