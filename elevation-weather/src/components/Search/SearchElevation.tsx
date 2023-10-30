import React, { useState } from 'react'

const SearchElevation = () => {
	const [elevation, setElevation] = useState('')

	return (
		<div className="bg-gradient-to-br from-emerald-400 to-blue-600 h-fit md:px-12 lg:px-32 py-12 px-4 shadow-xl shadow-gray-400">
			<h3>Weather by Elevation</h3>
			<p>Search by Elevation</p>
			<button>current elevation</button>
			<input className="search-input" type="textbox" placeholder="5280 above sea level"></input>
		</div>
	)
}

export default SearchElevation
