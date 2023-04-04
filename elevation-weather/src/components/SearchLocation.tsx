import React from 'react'
import { useState, useEffect } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import CurrentWeather from './CurrentWeather'
import TimeAndLocation from './TimeAndLocation'
import Forcast from './Forcast'



const SearchLocation = () => {
  const [location, setLocation] = useState('')


  return (
    <div className='main-container'>
      <div className='search-container'>
        <h3>Weather by Location</h3>
        <p>Search by Location</p>
        <button>current elevation</button>
        <input className='search-input' type='textbox' placeholder='search major city'></input>
        <div className='icon-box'><BiSearchAlt2/></div>
      </div>
      <div className='location-container'>
        <TimeAndLocation />
      </div>
      <div className='weather-container'>
        <CurrentWeather />
      </div>
      <div className='forcast-container'>
        <Forcast title='Hourly Forcast'/>
        <Forcast title='Daily Forcast'/>
      </div>
    </div>
    
  );
}

export default SearchLocation;