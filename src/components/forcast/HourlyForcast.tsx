import React from 'react'
import { iconsUrlFromCode, formatToTimezone } from '../../utils/weatherService'
import { ForcastHourlyProps } from '../../userTypes'

const HourlyForcast: React.FC<any> = ({ title, items, timezone }) => {

	return (
		<div className="text-white">
			<div className="mt-12">
				<h4 className="text-xl">{title}</h4>
				<hr className="my-1" />
			</div>
			<div className="flex items-start justify-between">
				{(items as ForcastHourlyProps)
					? items.slice(0, 8).map((item: any, index: number) => (
							<div key={item.dt} className="flex flex-col items-center text-center w-20">
								<p className="font-medium h-6">
									{index === 0 ? 'Now' : formatToTimezone(item.dt, timezone, 'h a')}
								</p>
								<img src={iconsUrlFromCode(item.weather[0].icon)} alt="icon" className="w-12 h-12" />
								<p className="h-6">{item.temp.toFixed()}&deg;</p>
								<p className="text-xs mt-1">{item.weather[0].description}</p>
							</div>
					  ))
					: ''}
			</div>
		</div>
	)
}

export default HourlyForcast
