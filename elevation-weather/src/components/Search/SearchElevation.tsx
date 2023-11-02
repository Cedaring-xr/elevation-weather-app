import React, { useState } from 'react'
import isoMtn from '../../assets/iso-mtn-color.png'
import isoMtn2 from '../../assets/iso-mtn-bw.png'
import ComparisonSlider from '../ComparisonSlider'
import { GrFormClose } from 'react-icons/gr'
import { BiSearchAlt2 } from 'react-icons/bi'
import list from '../../data/coloradoCities.json'
import CurrentWeather from '../CurrentWeather'
import getFormattedWeatherData from '../../utils/weatherService'
import { findClosestElevation } from '../../utils/weatherService'

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

type City = {
	name: string
	elevation: number
	location: {
		lat: number
		lon: number
	}
}

const SearchElevation = () => {
	const [bannerVisible, setBannerVisible] = useState(true)
	// const [query, setQuery] = useState<{ q: string }>({ q: 'Denver' })
	const [units, setUnits] = useState('Imperial')
	const [weather, setWeather] = useState<TweatherData | null>(null)
	const [currentLocationWeather, setCurrentLocationWeather] = useState(false)
	const [showCitiesWeather, setShowCitiesWeather] = useState(false)

	//state for child component
	const [elevation, setElevation] = useState<string>('7,030')
	const [sliderPosition, setSliderPosition] = useState(50) //percentage of slider line between images
	const [isDragging, setIsDragging] = useState(false)
	const [weatherList, setWeatherList] = useState<TweatherData[]>([])

	// const weatherList: any = []

	// functions that are passed down to comparison slider
	const handleDrag = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (!isDragging) return
		const rect = e.currentTarget.getBoundingClientRect()
		const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height))
		const percent: number = Math.max(0, Math.min((y / rect.height) * 100, 100))
		if (percent < 2) {
			setSliderPosition(2)
		} else if (percent > 98) {
			setSliderPosition(98)
		} else {
			setSliderPosition(percent)
		}
		const elevationPercent = 100 - percent
		const elevationRange: string = Math.round(elevationPercent * 65.38 + 3619).toLocaleString() //low = Lamar(3619), hight = Leadville(10157)
		setElevation(elevationRange)
	}
	const handleMouseDown = () => {
		setIsDragging(true)
	}
	const handleMouseUp = () => {
		setIsDragging(false)
	}

	// sorts elevation list and fetches weather
	const handleElevationSearch = () => {
		setWeatherList([]) //not working???
		const elevationNumber = parseInt(elevation.replace(/,/g, '')) //remove comma and convert to number
		// console.log('sorted list', findClosestElevation(list.cities, elevationNumber, 'elevation', 5))
		const sortedList = findClosestElevation(list.cities, elevationNumber, 'elevation', 5)

		sortedList.forEach((city: City) => {
			console.log(city)
			// console.log(city.name, city.elevation)
			getFormattedWeatherData({ ...{ q: city.name }, units }).then((data) => {
				setWeatherList([...weatherList, data])
			})
		})
		setShowCitiesWeather(true)
		console.log('weather list', weatherList)
	}

	const findCurrentElevation = () => {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition((position) => {
				console.log(position)
				let lat = position.coords.latitude
				let lon = position.coords.longitude
				// need to ping the google maps api for elevation sending it lat and long coordinates
				// display both the current elevation and the current weather from both APIs
				setCurrentLocationWeather(true) //toglle section for displaying current location weather
			})
		}
	}

	return (
		<div className="bg-gradient-to-br from-cyan-600 to-sky-800 h-fit md:px-12 lg:px-32 py-8 md:py-12 shadow-xl shadow-gray-400 flex flex-col">
			<h3 className="m-1 lg:m-4 px-4 md:px-8 py-1 bg-neutral-100 rounded-lg md:text-xl sans-font text-center uppercase font-bold text-stone-800 max-w-[500px] self-center">
				Search Weather by Elevation
			</h3>
			{bannerVisible && (
				<div className="bg-fuchsia-800 text-white my-4 p-2 pt-4 md:p-4 border-2 border-black relative">
					<GrFormClose className="absolute top-0 right-0 text-2xl" onClick={() => setBannerVisible(false)} />
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
					<ComparisonSlider
						beforeImage={isoMtn}
						afterImage={isoMtn2}
						elevation={elevation}
						sliderPosition={sliderPosition}
						handleDrag={handleDrag}
						handleMouseDown={handleMouseDown}
						handleMouseUp={handleMouseUp}
					/>
				</div>
			</div>
			<div className="flex flex-row m-4 justify-around md:mx-12">
				<button className="button flex flex-row justify-center text-xl mr-1" onClick={handleElevationSearch}>
					Search <BiSearchAlt2 className="text-xl text-white m-1 mx-2 transition ease-out hover:scale-110" />
				</button>
				<button className="disabled-button w-[200px]" onClick={findCurrentElevation} disabled>
					Find Current Elevation
				</button>
			</div>
			{currentLocationWeather && <CurrentWeather weather={weather} />}
			<div className="text-white m-4">
				<h3 className="my-2 text-xl">Cities similar the selected elevation</h3>
				<hr />
				{showCitiesWeather && (
					<div>
						<span>List of cities</span>
						{weatherList.map((city: TweatherData) => (
							<div key={city.name}>
								<span>{city.name}</span>
								<span>{city.temp}</span>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default SearchElevation
