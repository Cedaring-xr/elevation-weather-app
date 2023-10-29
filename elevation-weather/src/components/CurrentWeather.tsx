import React from 'react'
import { iconsUrlFromCode } from '../utils/weatherService'
import { formatToTime } from '../utils/weatherService'
import { BsThermometerSun } from 'react-icons/bs'
import { BsThermometerSnow } from 'react-icons/bs'

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
						<p className="flex flex-col space-y-2 text-4xl">{temp.toFixed()}&deg;</p>
						<div className="flex flex-col space-y-1 md:space-y-2">
							<p className="inner-details">humidity: {humidity}%</p>
							<p className="inner-details">wind: {speed.toFixed()} km/h</p>
							<p className="inner-details">feels like: {feels_like.toFixed()}&deg;</p>
						</div>
					</div>
					<div className="flex flex-row items-center justify-center space-x-2 text-white py-3">
						<p className="text-sm">sunrise: {formatToTime(sunrise)}</p>
						<span className="text-xl text-neutral-100 font-light m-1">|</span>
						<p className="text-sm">sunset: {formatToTime(sunset)}</p>
						<span className="text-xl text-neutral-100 font-light m-1">|</span>
						<p className="text-sm flex">
							<BsThermometerSnow className="text-xl mr-1" />
							Low: {temp_min.toFixed()}&deg;
						</p>
						<span className="text-xl text-neutral-100 font-light m-1">|</span>
						<p className="text-sm flex">
							<BsThermometerSun className="text-xl mr-1" />
							High: {temp_max.toFixed()}&deg;
						</p>
					</div>
				</>
			) : (
				''
			)}
		</div>
	)
}

export default CurrentWeather
