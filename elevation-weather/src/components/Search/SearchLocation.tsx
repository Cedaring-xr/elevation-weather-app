import React from 'react'
import { useState, useEffect } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import CurrentWeather from '../CurrentWeather'
import TimeAndLocation from '../TimeAndLocation'
import getFormattedWeatherData from '../../services/weatherService'
import Forcast from '../forcast/Forcast'

type TweatherData = {
	timezone: string
	daily: any[]
	hourly: any[]
	lat: number
	lon: number
	temp: any
	feels_like: any
	temp_min: any
	temp_max: any
	humidity: any
	name: any
	dt: any
	country: any
	sunrise: any
	sunset: any
	details: any
	icon: any
	speed: any
}

const SearchLocation = () => {
	// const [location, setLocation] = useState('')
	const [query, setQuery] = useState({ q: 'Denver' })
	const [units, setUnits] = useState('Imperial')
	const [weather, setWeather] = useState<TweatherData | null>(null)

	const fetchWeather = async () => {
		console.log('fetch')
		const data = await getFormattedWeatherData({ q: 'London' })
		console.log(data)
	}

	useEffect(() => {
		const fetchWeather = async () => {
			await getFormattedWeatherData({ ...query, units }).then((data) => {
				setWeather(data)
			})
		}

		fetchWeather()
	}, [query, units])

	return (
		<div className="">
			<p>Search by Location</p>
			<button className="button w-[200px]" onClick={() => fetchWeather}>
				current Location
			</button>
			<div className="flex flex-row">
				<div className="flex flex-col justify-center relative pr-2 w-4/5">
					<input
						type="text"
						placeholder="search by location..."
						className="text-md p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
					></input>
					<div className="absolute right-0 top-0 bg-slate-900 h-[40px] w-[50px] rounded-r-lg">
						<BiSearchAlt2 className="text-4xl text-white m-1 mx-2 transition ease-out hover:scale-110" />
					</div>
				</div>
				<div className="flex flex-row w-1/5 items-center pl-4">
					<button name="metric" className="text-xl text-white">
						&deg;C
					</button>
					<p className="text-2xl text-white font-light m-1">|</p>
					<button name="imperial" className="text-xl text-white">
						&deg;F
					</button>
				</div>
			</div>
			<div className="location-container">
				<TimeAndLocation weather={weather} />
			</div>
			<div className="weather-container">
				<CurrentWeather weather={weather} />
			</div>
			<div className="forcast-container">
				<Forcast title="Hourly Forcast" items={weather?.hourly} />
				<Forcast title="Daily Forcast" items={weather?.daily} />
			</div>
		</div>
	)
}

export default SearchLocation
