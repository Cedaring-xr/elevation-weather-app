import React from 'react'
import { iconsUrlFromCode } from '../../utils/weatherService'

type ForcastDailyProps = {
	title: string
	items: {
		dt: number
		sunrise: number
		sunset: number
		moonrise: number
		moonset: number
		moon_phase: number
		summary: string
		temp: {
			day: number
			min: number
			max: number
			night: number
			eve: number
			morn: number
		}
	}[]
}

const DailyForcast: React.FC<any> = ({ title, items }) => {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

	return (
		<div className="text-white">
			<div className="mt-12">
				<h4 className="text-xl">{title}</h4>
				<hr className="my-1" />
			</div>
			<div className="flex items-center justify-between">
				{items
					? items.map((item: any) => (
							<div key={item.dt}>
								<div className="flex flex-col items-center justify-center">
									<p>{item.description}</p>
									<img src={iconsUrlFromCode(item.weather[0].icon)} alt="icon" />
									<p>{item.temp.day.toFixed()}&deg;</p>
								</div>
								<div className="">{item.weather[0].description}</div>
							</div>
					  ))
					: ''}
			</div>
		</div>
	)
}

export default DailyForcast
