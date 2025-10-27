import React from 'react'

const Header = () => {
	return (
		<div className="w-screen overflow-hidden h-[220px] bg-stone-900">
			{/* maybe switch gif image to pull from S3? */}
			<img
				className="w-screen min-h-[200px] xl:max-w-[1800px] max-h-[220px] mx-auto"
				src="https://mray-dev-resources.s3.us-east-2.amazonaws.com/weather-app/headerBackground.gif"
				alt="mist tree background"
			/>
			<div className="absolute top-0 bg-slate-800 py-3 px-4 md:px-12 lg:px-24 lg:ml-[28%] rounded-md m-2 opacity-80">
				<h1 className="font-bold text-4xl text-neutral-50 sans-font">Elevation Weather App</h1>
				<h4 className="text-neutral-50 serif-font">real-time weather search</h4>
			</div>
		</div>
	)
}

export default Header
