import React from 'react'

const Header = () => {
	return (
		<div className="">
			<img className="w-screen max-h-[300px]" src="/assets/images/headerBackground.gif" />
			<div className="absolute top-0 bg-slate-700 p-4 rounded-md m-2 opacity-80">
				<h1 className="font-bold text-4xl text-neutral-50">Elevation Weather App</h1>
				<h4 className="font-bold text-neutral-50">realtime weather search based on location or elevation</h4>
			</div>
		</div>
	)
}

export default Header
