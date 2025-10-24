import React from 'react'
import { formatToLocalTime } from '../utils/weatherService'
import { TweatherData } from '../userTypes'
import { CitySearchData } from '../userTypes'

type TimeAndLocationProps = {
	weather: TweatherData | null
	location: CitySearchData | null
}

const TimeAndLocation: React.FC<TimeAndLocationProps> = ({ weather, location }) => {
	return (
		<div>
			<div className="flex items-center justify-center my-6">
				{weather && weather.current.dt ? (
					<p className="text-white text-xl">{formatToLocalTime(weather.current.dt, weather.timezone)}</p>
				) : (
					''
				)}
			</div>
			<div className="flex items-center justify-center my-3">
				<p className="text-white text-3xl sans-font">
					{/* location name and coutry will be undefined for local search */}
					{weather && location && `${location.name}, ${location.country}`}
				</p>
			</div>
		</div>
	)
}

export default TimeAndLocation
