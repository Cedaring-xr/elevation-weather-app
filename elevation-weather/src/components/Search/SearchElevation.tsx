import React, { useState } from 'react'
import isoMtn from '../../assets/iso-mtn-color.png'
import isoMtn2 from '../../assets/iso-mtn-bw.png'
import ComparisonSlider from '../ComparisonSlider'
import { GrFormClose } from 'react-icons/gr'
import { BiSearchAlt2 } from 'react-icons/bi'
import list from '../../data/coloradoCities.json'
import getFormattedWeatherData from '../../utils/weatherService'
import CurrentWeather from '../CurrentWeather'

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

const SearchElevation = () => {
	const [bannerVisible, setBannerVisible] = useState(true)
	const [query, setQuery] = useState<{ q: string } | { lat: number; lon: number }>({ q: 'Denver' })
	const [units, setUnits] = useState('Imperial')
	const [weather, setWeather] = useState<TweatherData | null>(null)
	const [currentWeather, setCurrentWeather] = useState(false)

	const handleCurrentElevationSearch = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				console.log(position)
				let lat = position.coords.latitude
				let lon = position.coords.longitude
				// need to ping the google maps api sending it lat and long coordinates
				// api will return elevation
				// display both the current elevation and the current weather from both APIs
				setCurrentWeather(true)
			})
		}
	}

	const handleElevationSearch = () => {
		// filter the list of all cities to only the closest 5 that match the given elevation
		// need to get the search elevation from the child component

		// ping weather api for each city and return current weather for each one
		// display the city, elevation, and weather for each one
		const fetchWeather = async () => {
			const message = query ? query : 'current location'
			console.log('query', message)
			// toast.info('Fetching weather for' + message)
			await getFormattedWeatherData({ ...query, units }).then((data) => {
				setWeather(data)
			})
		}

		// fetchWeather()
	}

	const closeBanner = () => {
		setBannerVisible(false)
	}

	return (
		<div className="bg-gradient-to-br from-cyan-600 to-sky-800 h-fit md:px-12 lg:px-32 py-8 md:py-12 shadow-xl shadow-gray-400 flex flex-col">
			<h3 className="m-1 lg:m-4 px-4 md:px-8 py-1 bg-neutral-100 rounded-lg md:text-xl sans-font text-center uppercase font-bold text-stone-800 max-w-[500px] self-center">
				Search Weather by Elevation
			</h3>
			{bannerVisible && (
				<div className="bg-fuchsia-800 text-white my-4 p-2 pt-4 md:p-4 border-2 border-black relative">
					<GrFormClose className="absolute top-0 right-0 text-2xl" onClick={closeBanner} />
					This is a test placeholder feature for getting weather based on a given elevation height. Currently
					I am limiting the search to cities whithin Colorado because it has a wide range of elevations.
				</div>
			)}
			<span className="sans-font text-white text-center m-4 text-3xl">
				Locations in Colorado <hr />
			</span>
			<span className="text-white m-2">
				Drag the slider to select an elevation, then click search to get a list of applicible cities.
			</span>
			<div id="elevation container" className="relative w-4/5 flex flex-row mx-auto">
				<div id="slider-container">
					<ComparisonSlider beforeImage={isoMtn} afterImage={isoMtn2} />
				</div>
			</div>
			<div className="flex flex-row m-4 justify-around md:mx-12">
				<button className="button flex flex-row justify-center text-xl mr-1" onClick={handleElevationSearch}>
					Search <BiSearchAlt2 className="text-xl text-white m-1 mx-2 transition ease-out hover:scale-110" />
				</button>
				<button className="button w-[200px]" onClick={handleCurrentElevationSearch}>
					Find Current Elevation
				</button>
			</div>
			{currentWeather && <CurrentWeather weather={weather} />}
			<div className="text-white m-4">
				<h3 className="my-2 text-xl">Cities that match the given elevation</h3>
				<hr />
				<table className="h-[400px]">
					<tbody>
						{list.cities.map((city) => (
							<tr key={city.name}>
								<td>{city.name}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	)
}

export default SearchElevation
