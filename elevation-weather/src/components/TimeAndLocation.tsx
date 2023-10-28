import React from 'react'
import { formatToLocalTime } from '../services/weatherService'

const TimeAndLocation = ({ weather: { dt, timezone, name, country } }: any) => {
	return (
		<div>
			<div className="flex items-center justify-center my-6">
				{dt && <p className="text-white text-xl">{formatToLocalTime(dt, timezone)}</p>}
			</div>
			<div className="flex items-center justify-center my-3">
				<p className="text-white text-3xl sans-font">{`${name}, ${country}`}</p>
			</div>
		</div>
	)
}

export default TimeAndLocation
