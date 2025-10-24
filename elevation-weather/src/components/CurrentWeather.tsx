import React from 'react'
import { iconsUrlFromCode } from '../utils/weatherService'
import { formatToTime } from '../utils/weatherService'
import { BsThermometerSun } from 'react-icons/bs'
import { BsThermometerSnow } from 'react-icons/bs'
import { TweatherData } from '../userTypes'

type WeatherProps = {
	weather: TweatherData | null
}

const CurrentWeather: React.FC<WeatherProps> = ({ weather }) => {
	return (
		<div>
			<div className="flex items-center justify-center pt-6 pb-2">
				<p className="text-xl text-white"></p>
			</div>
			{weather && weather.current ? (
				<>
					<div className="flex flex-row justify-between items-center text-white py-3">
						<img src={iconsUrlFromCode(weather.current.weather[0].icon)} alt="" />
						<p className="flex flex-col space-y-2 text-4xl">{weather.current.temp.toFixed()}&deg;</p>
						<div className="flex flex-col space-y-1 md:space-y-2">
							<p>humidity: {weather.current.humidity}%</p>
							<p>wind: {weather.current.wind_speed.toFixed()} km/h</p>
							<p>feels like: {weather.current.feels_like.toFixed()}&deg;</p>
						</div>
					</div>
					<div className="flex flex-row items-center justify-center space-x-2 text-white py-3">
						<p className="text-sm">sunrise: {formatToTime(weather.current.sunrise)}</p>
						<span className="text-xl text-neutral-100 font-light m-1">|</span>
						<p className="text-sm">sunset: {formatToTime(weather.current.sunset)}</p>
						<span className="text-xl text-neutral-100 font-light m-1">|</span>
						<p className="text-sm flex">
							<BsThermometerSnow className="text-xl mr-1" />
							Low: {weather.daily[0].temp.min.toFixed()}&deg;
						</p>
						<span className="text-xl text-neutral-100 font-light m-1">|</span>
						<p className="text-sm flex">
							<BsThermometerSun className="text-xl mr-1" />
							High: {weather.daily[0].temp.max.toFixed()}&deg;
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
