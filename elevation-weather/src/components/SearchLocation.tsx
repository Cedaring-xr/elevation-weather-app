import { useState, useEffect } from 'react';

const SearchLocation = () => {
  const [location, setLocation] = useState('')


  return (
    <div className='search-container'>
      <h3>Weather by Location</h3>
      <p>Search by Location</p>
      <button>current elevation</button>
      <input className='search-input' type='textbox' placeholder='search major city'></input>
    </div>
  );
}

export default SearchLocation;