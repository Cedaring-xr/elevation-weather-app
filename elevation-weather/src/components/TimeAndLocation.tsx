import React from 'react'
import { formatToLocalTime } from '../utils/weatherService'
import { TweatherData } from '../userTypes'

type TimeAndLocationProps = {
	weather: TweatherData | null
}

const TimeAndLocation: React.FC<TimeAndLocationProps> = ({ weather }) => {
	return (
		<div>
			{/* <div className="flex items-center justify-center my-6">
				{weather && weather.dt ? (
					<p className="text-white text-xl">{formatToLocalTime(weather.dt, weather.timezone)}</p>
				) : (
					''
				)}
			</div>
			<div className="flex items-center justify-center my-3">
				<p className="text-white text-3xl sans-font">{weather && `${weather.name}, ${weather.country}`}</p>
			</div> */}
		</div>
	)
}

export default TimeAndLocation
