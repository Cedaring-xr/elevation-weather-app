import React from 'react'
import { TiWeatherShower } from 'react-icons/ti'
import { iconsUrlFromCode } from '../../services/weatherService'

type ForcastProps = {
	title: string
	items: any
}

const Forcast: React.FC<ForcastProps> = ({ title, items }: any) => {
	return (
		<div className="text-white">
			<div className="mt-12">
				<h4>{title}</h4>
				<hr className="my-1" />
			</div>
			<div className="flex items-center justify-between">
				{items
					? items.map((item: any) => (
							<div key={item.title}>
								<div className="flex flex-col items-center justify-center">
									<p>{item.title}</p>
									<img src={iconsUrlFromCode(item.icon)} />
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
