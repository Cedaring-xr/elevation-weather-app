import React, { useState } from 'react'

const SearchElevation = () => {
    const [elevation, setElevation] = useState('')


    return (
      <div className='search-container'>
        <h3>Weather by Elevation</h3>
        <p>Search by Elevation</p>
        <button>current elevation</button>
        <input className='search-input' type='textbox' placeholder='5280 above sea level'></input>
      </div>
    );
}

export default SearchElevation