import React from 'react'

type LinkProps = {
	query: { q: string } | { lat: number; lon: number } // is this needed???
	setCitySearch: React.Dispatch<React.SetStateAction<{ q: string } | null>>
}

const citiesList = [
	{ id: 1, name: 'Paris' },
	{ id: 2, name: 'Tokyo' },
	{ id: 3, name: 'Los Angeles' },
	{ id: 4, name: 'Denver' }
]

const QuickLinks: React.FC<LinkProps> = ({ setCitySearch }) => {
	const cities = citiesList
	// this needs to swap city name for lat / lon or make the first api call
	return (
		<div className="flex flex-row justify-around items-center m-1 lg:m-4 px-2 md:px-8 bg-neutral-100 rounded-lg text-sm md:text-base">
			{cities.map((city) => (
				<button
					key={city.id}
					className="uppercase font-bold text-stone-800"
					onClick={() => setCitySearch({ q: city.name })}
				>
					{city.name}
				</button>
			))}
		</div>
	)
}

export default QuickLinks
