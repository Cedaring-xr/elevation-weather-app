import React from 'react'

const CurrentWeather = () => {
    return (
        <div className='current-weather-container'>
            <div>
                <p>Curernt Weather, cloudy</p>
            </div>
            <div>
                <span>Icon</span>
                <p>55 degrees</p>
                <div className='inner-details-container'>
                    <p className='inner-details'>humidity:</p>
                    <p className='inner-details'>wind:</p>
                    <p className='inner-details'>feels like:</p>
                </div>
            </div>
            <div>
                <p>sunrise at:</p>
                <p>sunset at:</p>
                <p>temp low:</p>
                <p>temp high:</p>
            </div>
        </div>
    )
}

export default CurrentWeather
