import React from 'react'

const Header = () => {
	return (
		<div className="bg-stone-900">
			<img
				className="w-screen min-h-[220px] xl:max-w-[1600px] max-h-[220px] md:max-h-[280px] mx-auto"
				src="/assets/images/headerBackground.gif"
			/>
			<div className="absolute top-0 bg-slate-700 p-4 rounded-md m-2 opacity-80">
				<h1 className="font-bold text-4xl text-neutral-50 sans-font">Elevation Weather App</h1>
				<h4 className="text-neutral-50 serif-font">realtime weather search based on location or elevation</h4>
			</div>
		</div>
	)
}

export default Header
