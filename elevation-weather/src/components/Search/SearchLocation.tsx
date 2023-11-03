import React from 'react'
import { useState, useEffect } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import CurrentWeather from '../CurrentWeather'
import TimeAndLocation from '../TimeAndLocation'
import getFormattedWeatherData from '../../utils/weatherService'
import Forcast from '../forcast/Forcast'
import QuickLinks from '../nav/QuickLinks'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
	const [query, setQuery] = useState<{ q: string } | { lat: number; lon: number }>({ q: 'Denver' })
	const [units, setUnits] = useState('Imperial')
	const [weather, setWeather] = useState<TweatherData | null>(null)
	const [city, setCity] = useState('')

	const handleSearchClick = () => {
		if (city) {
			setQuery({ q: city })
		}
	}

	const formatBackground = () => {
		if (!weather) return 'from-cyan-700 to blue-700'
		const threshold = units === 'metric' ? 20 : 60
		//todo: normalize weather.temp for both celcius and farenheit
		const thresholdValue = Math.round(weather.temp / 10)
		switch (thresholdValue) {
			case 0:
				return 'from-zinc-400 to-sky-800'
			case 1:
				return 'from-zinc-400 to-sky-800'
			case 2:
				return 'from-zinc-400 to-sky-700'
			case 3:
				return 'from-zinc-400 to-sky-700'
			case 4:
				return 'from-cyan-600 to-sky-800'
			case 5:
				return 'from-cyan-600 to-sky-800'
			case 6:
				return 'from-emerald-400 to-blue-600'
			case 7:
				return 'from-emerald-400 to-blue-700'
			case 8:
				return 'from-amber-600 to-orange-700'
			case 9:
				return 'from-amber-600 to-orange-700'
			case 10:
				return 'from-amber-600 to-rose-600'
			default:
				return 'from-cyan-600 to-sky-800'
		}
	}

	const handleLocationClick = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				let lat = position.coords.latitude
				let lon = position.coords.longitude

				setQuery({ lat, lon })
			})
		} else {
			alert('Application does not have permission to use local geolocation')
		}
	}

	const handleSearch = (e: any) => {
		e.preventDefault()
		setQuery({ q: city })
	}

	const handleUnitsChange = (e: any) => {
		const selectedUnit = e.currentTarget.name
		if (units !== selectedUnit) setUnits(selectedUnit)
	}

	useEffect(() => {
		const fetchWeather = async () => {
			const message = query ? query : 'current location'
			if ('q' in query) {
				toast.info('Fetching weather for ' + query.q)
			} else if ('lat' in query) {
				toast.info('Fetching weather for ' + query.lat + ' ' + query.lon)
			} else {
				toast.info('Fetching weather info for current location')
			}
			await getFormattedWeatherData({ ...query, units }).then((data) => {
				setWeather(data)
			})
		}

		fetchWeather()
	}, [query, units])

	return (
		<div
			id="search-location-container"
			className={` bg-gradient-to-br ${formatBackground()} h-fit md:px-12 lg:px-32 pt-8 pb-12 px-4 shadow-xl shadow-gray-400`}
		>
			<div>
				<QuickLinks setQuery={setQuery} />
				<div className="flex justify-center mt-8">
					<button className="button" onClick={handleLocationClick}>
						Local Weather
					</button>
				</div>
				<div className="flex flex-row">
					<div className="flex flex-col justify-center relative pr-2 w-4/5">
						<form onSubmit={handleSearch}>
							<input
								value={city}
								onChange={(e) => setCity(e.currentTarget.value)}
								type="text"
								placeholder="search by City..."
								className="text-md p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-l-lg"
							></input>
						</form>

						<div
							className="absolute right-0 top-0 bg-slate-900 h-[40px] w-[50px] rounded-r-lg"
							onClick={handleSearchClick}
						>
							<BiSearchAlt2 className="text-4xl text-white m-1 mx-2 transition ease-out hover:scale-110" />
						</div>
					</div>
					<div className="flex flex-row w-1/5 items-center pl-4">
						<button name="metric" className="text-xl text-white" onClick={handleUnitsChange}>
							&deg;C
						</button>
						<p className="text-2xl text-white font-light m-1">|</p>
						<button name="imperial" className="text-xl text-white" onClick={handleUnitsChange}>
							&deg;F
						</button>
					</div>
				</div>
				{weather ? (
					<>
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
					</>
				) : (
					''
				)}
			</div>
			<ToastContainer autoClose={5000} theme="colored" newestOnTop={true} />
		</div>
	)
}

export default SearchLocation
