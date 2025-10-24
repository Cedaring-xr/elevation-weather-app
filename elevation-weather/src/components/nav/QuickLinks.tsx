import React, { useState } from 'react'
import { CitySearchData } from '../../userTypes'

const QuickLinks = () => {
	const cities = [
		{ id: 1, name: 'Paris' },
		{ id: 2, name: 'Tokyo' },
		{ id: 3, name: 'Los Angeles' },
		{ id: 4, name: 'Denver' }
	]

	const [cityResult, setCityResult] = useState<CitySearchData>()
	const [weather, setWeather] = useState<any>({}) //return of all weather data

	const fetchWeather = (cityData: CitySearchData) => {
		fetch(
			`https://api.openweathermap.org/data/3.0/onecall?lat=${cityData.lat}&lon=${cityData.lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => setWeather(data))

		console.log('full weather return', weather)
	}

	const fullSearch = async (value: string) => {
		await fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=1&appid=${
				process.env.REACT_APP_API_KEY
			}`
		)
			.then((res) => res.json())
			.then((data) => setCityResult(data[0]))
			.then(() => {
				if (cityResult) {
					console.log('city result', cityResult)
					fetchWeather(cityResult)
				}
			})
	}

	return (
		<div className="flex flex-row justify-around items-center m-1 lg:m-4 px-2 md:px-8 bg-neutral-100 rounded-lg text-sm md:text-base">
			{cities.map((city) => (
				<button
					key={city.id}
					className="uppercase font-bold text-stone-800 mx-2"
					onClick={() => fullSearch(city.name)}
				>
					{city.name}
				</button>
			))}
		</div>
	)
}

export default QuickLinks
