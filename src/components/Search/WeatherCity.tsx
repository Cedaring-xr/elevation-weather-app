import React, { useEffect, useState } from 'react'
import { iconsUrlFromCode } from '../../utils/weatherService'
import { BsThermometerSnow, BsThermometerSun, BsWind, BsDropletHalf } from 'react-icons/bs'
import { TweatherData } from '../../userTypes'
import { toast } from 'react-toastify'

// elevation search is the only one that uses this
export default function WeatherCity(oneCity: any, elevation: any) {
	const [cityWeather, setCityWeather] = useState<TweatherData | null>(null)

	const formatElevation = (elevation: number) => {
		return elevation.toLocaleString('en-US')
	}

	const convertToWeather = async (city: any) => {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/3.0/onecall?lat=${city.lat}&lon=${city.lon}&units=imperial&appid=${process.env.REACT_APP_API_KEY}`
			)
			if (!response.ok) {
				throw new Error('Error with weather response')
			}
			const data = await response.json()
			toast.info('Fetching weather for ' + city.name)
			setCityWeather(data)
			return data //not sure I actually need a return here
		} catch (error) {
			console.log('Fetch Weather Error', error)
		}
	}

	useEffect(() => {
		// this works but makes too many extra calls
		convertToWeather(oneCity.oneCity)
		console.log('city weather', oneCity)
	}, [oneCity.oneCity])

	return (
		<div>
			{cityWeather ? (
				<>
					<h2 className="flex justify-center text-2xl">{oneCity.oneCity.name}</h2>
					<div className="flex flex-row justify-between items-center text-white w-2/3 md:w-1/2 mx-auto">
						<span className="text-2xl">{formatElevation(oneCity.elevation)}</span>
						<img src={iconsUrlFromCode(cityWeather.current.weather[0].icon)} alt="" />
						<p className="flex flex-col text-3xl">{cityWeather.current.temp.toFixed()}&deg;</p>
					</div>
					<div className="flex flex-row items-center justify-center space-x-2 text-white py-1">
						<p className="text-sm flex">
							<BsDropletHalf className="text-sm flex" />
							humidity: {cityWeather.current.humidity}%
						</p>
						<span className="text-xl text-neutral-100 font-light mb-1">|</span>
						<p className="text-sm flex">
							<BsWind className="text-xl mr-1" />
							wind: {cityWeather.current.wind_speed.toFixed()} km/h
						</p>
						<span className="text-xl text-neutral-100 font-light mb-1">|</span>
						<p className="text-sm flex">
							<BsThermometerSnow className="text-xl mr-1" />
							Low: {cityWeather.daily[0].temp.min.toFixed()}&deg;
						</p>
						<span className="text-xl text-neutral-100 font-light mb-1">|</span>
						<p className="text-sm flex">
							<BsThermometerSun className="text-xl mr-1" />
							High: {cityWeather.daily[0].temp.max.toFixed()}&deg;
						</p>
					</div>
				</>
			) : (
				<></>
			)}
		</div>
	)
}
