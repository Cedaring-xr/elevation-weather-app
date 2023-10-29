import React from 'react'

// type LinkProps = {
// 	cities: {
// 		id: number
// 		name: string
// 	}[]
// }

const citiesList = [
	{ id: 1, name: 'London' },
	{ id: 2, name: 'Tokyo' },
	{ id: 3, name: 'New York' },
	{ id: 4, name: 'Denver' }
]

const QuickLinks = ({ setQuery }: any) => {
	const cities = citiesList
	return (
		<div className="flex flex-row justify-around items-center m-1 lg:m-4 px-2 md:px-8 bg-neutral-100 rounded-lg text-sm md:text-base">
			{cities.map((city) => (
				<button
					key={city.id}
					className="uppercase font-bold text-stone-800"
					onClick={() => setQuery({ q: city.name })}
				>
					{city.name}
				</button>
			))}
		</div>
	)
}

export default QuickLinks
