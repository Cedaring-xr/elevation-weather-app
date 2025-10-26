import React, { ChangeEvent } from 'react'
import { useState, useEffect } from 'react'
import { BiSearchAlt2 } from 'react-icons/bi'
import CurrentWeather from '../CurrentWeather'
import TimeAndLocation from '../TimeAndLocation'
import { fetchLocationWeather } from '../../utils/weatherService'
import Forcast from '../forcast/Forcast'
import QuickLinks from '../nav/QuickLinks'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { TweatherData, CitySearchData, optionType, ReverseGEO } from '../../userTypes'

const DenverDefault = [
	{
		name: 'Denver',
		local_names: {},
		lat: 39.7392364,
		lon: -104.984862,
		country: 'US',
		state: 'Colorado'
	}
]

type CityType = {
	q: string
}

const SearchLocation = () => {
	const [query, setQuery] = useState<{ lat: number; lon: number }>({ lat: 39.7392364, lon: -104.984862 }) // default to Denver
	const [units, setUnits] = useState('Imperial')
	const [weather, setWeather] = useState<TweatherData | null>(null)

	const [city, setCity] = useState<string>('')
	const [cityOption, setCityOption] = useState<optionType | null>(null)
	const [searchOptions, setSearchOptions] = useState<[]>([])
	const [citySearched, setCitySearched] = useState<CityType | null>(null)
	const [locationData, setLocationData] = useState<ReverseGEO | null>(null)

	const [cityResult, setCityResult] = useState<CitySearchData>(DenverDefault[0])

	const formatBackground = () => {
		if (!weather) return 'from-cyan-700 to blue-700'
		// const threshold = units === 'metric' ? 20 : 60
		//todo: normalize weather.temp for both celcius and farenheit
		const thresholdValue = Math.round(weather.current.temp / 10)
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

	const handleLocalLocationClick = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				let lat = position.coords.latitude
				let lon = position.coords.longitude
				fetch(
					`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude=minutely&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
				)
					.then((res) => res.json())
					.then((data) => setWeather(data))
				fetch(
					`https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${process.env.REACT_APP_API_KEY}`
				)
					.then((res) => res.json())
					.then((data) => {
						console.log('data', data)
						setLocationData(data)
					})
			})
		} else {
			alert('Application does not have permission to use local geolocation')
		}
	}

	// const getForcast = (cityOption: optionType) => {
	// 	fetch(
	// 		`https://api.openweathermap.org/data/3.0/onecall?lat=${cityOption.lat}&lon=${cityOption.lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
	// 	)
	// 		.then((res) => res.json())
	// 		.then((data) => setWeather(data))

	// 	console.log(weather)
	// }

	// search bar button
	// const handleSearchClick = () => {
	// 	if (!cityOption) return
	// 	getForcast(cityOption)
	// }

	// pressing 'enter' on search bar jumps directly to here
	// const handleSearch = async (e: { preventDefault: () => void }) => {
	// 	e.preventDefault()
	// 	setCitySearch({ q: city })
	// 	console.log('second search function for city: ', city)
	// }

	const getSearchOptions = (value: string) => {
		fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=1&appid=${
				process.env.REACT_APP_API_KEY
			}`
		)
			// .then((data) => setSearchOptions(data))
			.then((data) => setCitySearched(null))
	}

	const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value.trim()
		setCity(value)
		if (value === '') return
		// getSearchOptions(value)
	}

	const onOptionSelect = (option: optionType) => {
		toast.info('Fetching weather for ' + option.name)
		setCityOption(option)
		fetch(
			`https://api.openweathermap.org/data/3.0/onecall?lat=${option.lat}&lon=${option.lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
		)
			.then((res) => res.json())
			.then((data) => setWeather(data))

		console.log('option select weather', weather)
	}

	const handleUnitsChange = (e: { currentTarget: { name: string } }) => {
		const selectedUnit = e.currentTarget.name
		if (units !== selectedUnit) setUnits(selectedUnit)
	}

	// full search for quicklinks tabs
	const fullSearch = async (value: string) => {
		await fetch(
			`https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=1&appid=${
				process.env.REACT_APP_API_KEY
			}`
		)
			.then((res) => res.json())
			.then((data) => {
				setLocationData(data)
				setCityResult(data)
			})

			.then(() => {
				if (cityResult) {
					console.log('city result', cityResult)
					fetchWeather(cityResult)
				}
			})
	}

	const fetchWeather = async (cityData: CitySearchData) => {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/3.0/onecall?lat=${cityData.lat}&lon=${cityData.lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
			)
			if (!response.ok) {
				throw new Error('Error with weather response')
			}
			const data = await response.json()
			return data
		} catch (error) {
			console.log('Fetch Weather Error', error)
		}
	}

	useEffect(() => {
		if (cityOption) {
			setCity(cityOption.name)
			setSearchOptions([])
		}
	}, [cityOption, locationData])

	useEffect(() => {
		if (!city) {
			// fullSearch('Denver')
			fetchWeather(cityResult)
			setLocationData(DenverDefault)
		}
	}, [])

	// useEffect(() => {
	// 	const fetchWeather = async () => {
	// 		//initial action on load
	// 		if (citySearched === undefined) {
	// 			setCitySearched({ q: 'Denver' })
	// 		} else if (citySearched == null) {
	// 			setCitySearched({ q: 'Denver' })
	// 		} else if (citySearched.q.length > 1) {
	// 			console.log('useEffect fetch weather if')
	// 			toast.info('Fetching weather for ' + citySearched.q)

	// 			// await getCityWeatherData({ ...citySearch, units }).then((data) => {
	// 			// 	console.log('return city data', data)
	// 			// 	setQuery({ lat: 39.7392364, lon: -104.984862 }) // this is temp data
	// 			// })
	// 			// await getFormattedLocationWeatherData({ ...query, units }).then((data) => {
	// 			// 	console.log('return from weather fetch', data)
	// 			// 	setWeather(null)
	// 			// 	console.log(weather)
	// 			// })
	// 		} else {
	// 			toast.info('Fetching weather for ' + query.lat + ' ' + query.lon)
	// 			// await getFormattedLocationWeatherData({ ...query, units }).then((data) => {
	// 			// 	setWeather(null)
	// 			// 	console.log(weather)
	// 			// })
	// 		}
	// 	}

	// 	fetchWeather()
	// }, [citySearched, query.lat, query.lon])

	return (
		<div
			id="search-location-container"
			className={` bg-gradient-to-br ${formatBackground()} h-fit md:px-12 lg:px-32 pt-8 pb-12 px-4 shadow-xl shadow-gray-400 rounded-2xl`}
		>
			<div>
				<QuickLinks onButtonClick={fullSearch} />
				<div className="flex justify-center mt-8">
					<button className="button" onClick={handleLocalLocationClick}>
						Local Weather
					</button>
				</div>
				<div className="flex flex-row">
					<div className="flex flex-col justify-center relative pr-2 w-4/5">
						<input
							value={city}
							onChange={onInputChange}
							type="text"
							placeholder="search by City..."
							className="text-md p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase rounded-l-lg"
						></input>
						<ul className="absolute top-9 bg-white ml-1 rounded-b-md">
							{searchOptions.map((option: optionType, index: number) => (
								<li key={option.name + '-' + index}>
									<button
										className="text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer"
										onClick={() => onOptionSelect(option)}
									>
										{option.name}
									</button>
								</li>
							))}
						</ul>

						<div
							id="searchButton"
							className="absolute right-0 top-0 bg-slate-900 h-[40px] w-[50px] rounded-r-lg"
							onClick={() => getSearchOptions(city)}
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
							<TimeAndLocation weather={weather} location={locationData} />
						</div>
						<div className="weather-container">
							<CurrentWeather weather={weather} />
						</div>
						<div className="forcast-container">
							{/* <Forcast title="Hourly Forcast" items={weather?.hourly} /> */}
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
