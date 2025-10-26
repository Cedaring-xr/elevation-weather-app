import React from 'react'
import { formatToLocalTime } from '../utils/weatherService'
import { TweatherData, ReverseGEO } from '../userTypes'

type TimeAndLocationProps = {
	weather: TweatherData | null
	location: ReverseGEO | null
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
					{/* need to change to something else if blank */}
					{weather && location && `${location[0].name}, ${location[0].country}`}
				</p>
			</div>
		</div>
	)
}

export default TimeAndLocation
