import React, { useState, useEffect, useCallback } from 'react'
import isoMtn from '../../assets/iso-mtn-color.png'
import isoMtn2 from '../../assets/iso-mtn-bw.png'
import { BiSearchAlt2 } from 'react-icons/bi'
import list from '../../data/coloradoCities.json'
import { getCityWeatherData } from '../../utils/weatherService'
import { findClosestElevation } from '../../utils/weatherService'
import ComparisonSlider from '../ComparisonSlider'
import { TweatherData } from '../../userTypes'
import Banner from './Banner'
import WeatherCity from './WeatherCity'

const SearchElevation = () => {
	const [units, setUnits] = useState('Imperial') // switching units is not implemented yet
	//state for child component
	const [elevation, setElevation] = useState<string>('7,030')
	const [sliderPosition, setSliderPosition] = useState(50) //percentage of slider line between images
	const [isDragging, setIsDragging] = useState(false)
	const [weatherList, setWeatherList] = useState<any>([])
	const [search, setSearch] = useState(false)

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
	const handleTouchStart = () => {
		setIsDragging(true)
	}
	const handleTouchEnd = () => {
		setIsDragging(false)
	}

	const handleElevationSearch = useCallback(async () => {
		const elevationNumber = parseInt(elevation.replace(/,/g, '')) //remove comma and convert to number
		const sortedList = findClosestElevation(list.cities, elevationNumber, 'elevation', 5)

		try {
			const cityList: TweatherData[] = []
			// console.log('sorted list', sortedList)
			for (const city of sortedList) {
				await getCityWeatherData(city.location).then((data) => {
					cityList.push(data)
				})
			}
			// console.log('cityList', cityList)
			setSearch(true)
			return cityList
		} catch (error) {
			console.log('Error fetching data:', error)
		}
	}, [search]) // do not included elevation as a dependency here, it makes too many requests

	useEffect(() => {
		handleElevationSearch().then((result) => {
			setSearch(false)
			setWeatherList(result)
		})
	}, [handleElevationSearch])

	return (
		<div className="bg-gradient-to-br from-cyan-600 to-sky-800 h-fit md:px-12 lg:px-32 py-8 md:py-12 shadow-xl shadow-gray-400 flex flex-col">
			<h3 className="m-1 lg:m-4 px-4 md:px-8 py-1 bg-neutral-100 rounded-lg md:text-xl sans-font text-center uppercase font-bold text-stone-800 max-w-[500px] self-center">
				Search Weather by Elevation
			</h3>
			<Banner
				message="This is a test placeholder feature for getting weather based on a given elevation height. Currently
					I am limiting the search to cities whithin Colorado because it has a wide range of elevations."
			/>
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
						handleTouchStart={handleTouchStart}
						handleTouchEnd={handleTouchEnd}
					/>
				</div>
			</div>
			<div className="flex flex-row m-4 justify-around md:mx-12">
				<button className="button flex flex-row justify-center text-xl mr-1" onClick={handleElevationSearch}>
					Search <BiSearchAlt2 className="text-xl text-white m-1 mx-2 transition ease-out hover:scale-110" />
				</button>
				<button className="disabled-button w-[200px]" disabled>
					Find Current Elevation
				</button>
			</div>
			<div className="text-white m-4">
				<h3 className="my-2 text-xl">Cities close to the selected elevation</h3>
				<hr />
				{weatherList && weatherList.length > 1 ? (
					<div>
						{weatherList.map((city: any) => (
							<WeatherCity key={city.lat} oneCity={city[0]} />
						))}
					</div>
				) : (
					''
				)}
			</div>
		</div>
	)
}

export default SearchElevation
