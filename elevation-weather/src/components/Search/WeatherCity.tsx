import React from 'react'
import { iconsUrlFromCode } from '../../utils/weatherService'
import { BsThermometerSnow, BsThermometerSun, BsWind, BsDropletHalf } from 'react-icons/bs'
import { TweatherData } from '../../userTypes'

type Props = {
	city: TweatherData
}

export default function WeatherCity({ city }: Props) {
	return (
		<div>
			<div className="flex flex-row justify-between items-center text-white w-2/3 md:w-1/2 mx-auto">
				<span className="text-2xl">{city.name}</span>
				<img src={iconsUrlFromCode(city.icon)} alt="" />
				<p className="flex flex-col text-3xl">{city.temp.toFixed()}&deg;</p>
			</div>
			<div className="flex flex-row items-center justify-center space-x-2 text-white py-1">
				<p className="text-sm flex">
					<BsDropletHalf className="text-sm flex" />
					humidity: {city.humidity}%
				</p>
				<span className="text-xl text-neutral-100 font-light mb-1">|</span>
				<p className="text-sm flex">
					<BsWind className="text-xl mr-1" />
					wind: {city.speed.toFixed()} km/h
				</p>
				<span className="text-xl text-neutral-100 font-light mb-1">|</span>
				<p className="text-sm flex">
					<BsThermometerSnow className="text-xl mr-1" />
					Low: {city.temp_min.toFixed()}&deg;
				</p>
				<span className="text-xl text-neutral-100 font-light mb-1">|</span>
				<p className="text-sm flex">
					<BsThermometerSun className="text-xl mr-1" />
					High: {city.temp_max.toFixed()}&deg;
				</p>
			</div>
		</div>
	)
}
