import React from 'react'
import { TiWeatherShower } from 'react-icons/ti'

type ForcastProps = {
	title: string
}

const Forcast: React.FC<ForcastProps> = ({ title }) => {
	return (
		<div className="">
			<div className="">
				<h4>{title}</h4>
				<hr />
			</div>
			<div className="">
				<div className="">
					<p>time</p>
					<span>
						<TiWeatherShower className="" />
					</span>
					<p>55 degrees</p>
				</div>
				<div className="">
					<p>time</p>
					<span>
						<TiWeatherShower className="" />
					</span>
					<p>55 degrees</p>
				</div>
				<div className="">
					<p>time</p>
					<span>
						<TiWeatherShower className="" />
					</span>
					<p>55 degrees</p>
				</div>
				<div className="">
					<p>time</p>
					<span>
						<TiWeatherShower className="" />
					</span>
					<p>55 degrees</p>
				</div>
				<div className="">
					<p>time</p>
					<span>
						<TiWeatherShower className="" />
					</span>
					<p>55 degrees</p>
				</div>
			</div>
		</div>
	)
}

export default Forcast
