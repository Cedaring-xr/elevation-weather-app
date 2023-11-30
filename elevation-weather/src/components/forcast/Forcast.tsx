import React from 'react'
import { iconsUrlFromCode } from '../../utils/weatherService'

type ForcastProps = {
	title: string
	items: {
		title: string
		temp: number
		icon: string
	}[]
}

const Forcast: React.FC<ForcastProps> = ({ title, items }) => {
	return (
		<div className="text-white">
			<div className="mt-12">
				<h4 className="text-xl">{title}</h4>
				<hr className="my-1" />
			</div>
			<div className="flex items-center justify-between">
				{items
					? items.map((item) => (
							<div key={item.title}>
								<div className="flex flex-col items-center justify-center">
									<p>{item.title}</p>
									<img src={iconsUrlFromCode(item.icon)} alt="icon" />
									<p>{item.temp.toFixed()}&deg;</p>
								</div>
								<div className=""></div>
							</div>
					  ))
					: ''}
			</div>
		</div>
	)
}

export default Forcast
