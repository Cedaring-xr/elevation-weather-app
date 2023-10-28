import React from 'react'
import { iconsUrlFromCode } from '../services/weatherService'

const CurrentWeather = ({
	weather: { details, icon, temp, temp_max, temp_min, sunrise, sunset, speed, feels_like, timezone, humidity }
}: any) => {
	return (
		<div className="">
			<div className="flex items-center justify-center py-6">
				<p className="text-xl text-cyan-300">{details}</p>
			</div>
			{details ? (
				<>
					<div className="flex flex-row justify-between items-center text-white py-3">
						<img src={iconsUrlFromCode(icon)} alt="" />
						<p className="flex flex-col space-y-2 text-2xl">{temp.toFixed()}&deg;</p>
						<div className="flex flex-col space-y-2">
							<p className="inner-details">humidity: {humidity}%</p>
							<p className="inner-details">wind: {speed.toFixed()} km/h</p>
							<p className="inner-details">feels like: {feels_like.toFixed()}&deg;</p>
						</div>
					</div>
					<div className="flex flex-row items-center justify-center space-x-2 text-white py-3">
						<p className="text-sm">sunrise: {sunrise}</p>
						<span className="text-xl text-neutral-100 font-light m-1">|</span>
						<p className="text-sm">sunset: {sunset}</p>
						<span className="text-xl text-neutral-100 font-light m-1">|</span>
						<p className="text-sm">temp low: {temp_min.toFixed()}&deg;</p>
						<span className="text-xl text-neutral-100 font-light m-1">|</span>
						<p className="text-sm">temp high: {temp_max.toFixed()}&deg;</p>
					</div>
				</>
			) : (
				''
			)}
		</div>
	)
}

export default CurrentWeather
