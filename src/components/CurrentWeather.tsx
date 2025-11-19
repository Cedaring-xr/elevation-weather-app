import React from 'react'
import { iconsUrlFromCode, formatToTimezone, convertTemperature } from '../utils/weatherService'
import { BsThermometerSun } from 'react-icons/bs'
import { BsThermometerSnow } from 'react-icons/bs'
import { TweatherData } from '../userTypes'

type WeatherProps = {
	weather: TweatherData | null
	units: 'F' | 'C'
}

const CurrentWeather: React.FC<WeatherProps> = ({ weather, units }) => {
	return (
		<div>
			<div className="flex items-center justify-center pt-6 pb-2">
				<p className="text-xl text-white"></p>
			</div>
			{weather && weather.current ? (
				<>
					<div className="flex flex-row justify-between items-center text-white py-3">
						<img src={iconsUrlFromCode(weather.current.weather[0].icon)} alt="" />
						<p className="flex flex-col space-y-2 text-4xl">{convertTemperature(weather.current.temp, units)}&deg;{units}</p>
						<div className="flex flex-col space-y-1 md:space-y-2">
							<p>humidity: {weather.current.humidity}%</p>
							<p>wind: {weather.current.wind_speed.toFixed()} km/h</p>
							<p>feels like: {convertTemperature(weather.current.feels_like, units)}&deg;</p>
						</div>
					</div>
					<div className="flex flex-row items-center justify-center space-x-2 text-white py-3">
						<p className="text-sm">sunrise: {formatToTimezone(weather.current.sunrise, weather.timezone)}</p>
						<span className="text-xl text-neutral-100 font-light m-1">|</span>
						<p className="text-sm">sunset: {formatToTimezone(weather.current.sunset, weather.timezone)}</p>
						<span className="text-xl text-neutral-100 font-light m-1">|</span>
						<p className="text-sm flex">
							<BsThermometerSnow className="text-xl mr-1" />
							Low: {convertTemperature(weather.daily[0].temp.min, units)}&deg;
						</p>
						<span className="text-xl text-neutral-100 font-light m-1">|</span>
						<p className="text-sm flex">
							<BsThermometerSun className="text-xl mr-1" />
							High: {convertTemperature(weather.daily[0].temp.max, units)}&deg;
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
