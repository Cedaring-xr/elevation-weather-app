import React from 'react'
import { TiWeatherSunny } from 'react-icons/ti'
import Forcast from './forcast/Forcast'

const CurrentWeather = () => {
	return (
		<div className="">
			<div className="flex items-center justify-center py-6">
				<p className="text-xl text-cyan-300">Cloudy</p>
			</div>
			<div className="flex flex-row justify-between items-center text-white py-3">
				<TiWeatherSunny className="text-4xl" />
				<p className="flex flex-col space-y-2 text-2xl">55&deg;</p>
				<div className="flex flex-col space-y-2">
					<p className="inner-details">humidity: 10%</p>
					<p className="inner-details">wind: 5 mph</p>
					<p className="inner-details">feels like: 50&deg;</p>
				</div>
			</div>
			<div className="flex flex-row items-center justify-center space-x-2 text-white py-3">
				<p className="text-sm">sunrise: 6:30 AM</p>
				<span className="text-xl text-neutral-100 font-light m-1">|</span>
				<p className="text-sm">sunset: 8:00 PM</p>
				<span className="text-xl text-neutral-100 font-light m-1">|</span>
				<p className="text-sm">temp low: 34&deg;</p>
				<span className="text-xl text-neutral-100 font-light m-1">|</span>
				<p className="text-sm">temp high: 60&deg;</p>
			</div>
			<Forcast title="Hourly Forcast" />
			<Forcast title="Weekly Forcast" />
		</div>
	)
}

export default CurrentWeather
