import React from 'react'
import { TiWeatherShower } from 'react-icons/ti'

type ForcastProps = {
	title: string
}

const Forcast: React.FC<ForcastProps> = ({ title }) => {
	return (
		<div className="text-white">
			<div className="mt-12">
				<h4>{title}</h4>
				<hr className="my-1" />
			</div>
			<div className="flex items-center justify-between">
				<div className="flex flex-col items-center justify-center">
					<p>Monday</p>
					<TiWeatherShower className="text-3xl" />
					<p>55&deg;</p>
				</div>
				<div className="">
					<p>Tuesday</p>
					<span>
						<TiWeatherShower className="text-3xl" />
					</span>
					<p>55&deg;</p>
				</div>
				<div className="">
					<p>Wednesday</p>
					<span>
						<TiWeatherShower className="text-3xl" />
					</span>
					<p>55&deg;</p>
				</div>
				<div className="">
					<p>Thursday</p>
					<span>
						<TiWeatherShower className="text-3xl" />
					</span>
					<p>55&deg;</p>
				</div>
				<div className="">
					<p>Friday</p>
					<span>
						<TiWeatherShower className="text-3xl" />
					</span>
					<p>55&deg;</p>
				</div>
			</div>
		</div>
	)
}

export default Forcast
