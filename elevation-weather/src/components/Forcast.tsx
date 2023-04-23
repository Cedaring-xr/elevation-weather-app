import React from 'react'
import { TiWeatherShower } from 'react-icons/ti'

const Forcast = ({title}: {title: string}) => {
    return (
        <div className='forcast-container'>
            <div className='forcast-header'>
                <h4>{title}</h4>
                <hr />
            </div>
            <div className='forcast-data'>
                <div className='forcast-block'>
                    <p>time</p>
                    <span><TiWeatherShower className='show-weather-icon'/></span>
                    <p>55 degrees</p>
                </div>
                <div className='forcast-block'>
                    <p>time</p>
                    <span><TiWeatherShower className='show-weather-icon'/></span>
                    <p>55 degrees</p>
                </div>
                <div className='forcast-block'>
                    <p>time</p>
                    <span><TiWeatherShower className='show-weather-icon'/></span>
                    <p>55 degrees</p>
                </div>
                <div className='forcast-block'>
                    <p>time</p>
                    <span><TiWeatherShower className='show-weather-icon'/></span>
                    <p>55 degrees</p>
                </div>
                <div className='forcast-block'>
                    <p>time</p>
                    <span><TiWeatherShower className='show-weather-icon'/></span>
                    <p>55 degrees</p>
                </div>
            </div>
        </div>
    )
}

export default Forcast
