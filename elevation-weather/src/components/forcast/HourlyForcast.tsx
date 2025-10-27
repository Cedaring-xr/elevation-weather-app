import React from 'react'
import { iconsUrlFromCode } from '../../utils/weatherService'
import { ForcastHourlyProps } from '../../userTypes'

const HourlyForcast: React.FC<any> = ({ title, items }) => {
	// need to display hours text title

	return (
		<div className="text-white">
			<div className="mt-12">
				<h4 className="text-xl">{title}</h4>
				<hr className="my-1" />
			</div>
			<div className="flex items-center justify-between">
				{(items as ForcastHourlyProps)
					? items.slice(0, 8).map((item: any) => (
							<div key={item.dt}>
								<div className="flex flex-col items-center justify-center">
									<p>{item.description}</p>
									<img src={iconsUrlFromCode(item.weather[0].icon)} alt="icon" />
									<p>{item.temp.toFixed()}&deg;</p>
								</div>
								<div className="">{item.weather[0].description}</div>
							</div>
					  ))
					: ''}
			</div>
		</div>
	)
}

export default HourlyForcast
