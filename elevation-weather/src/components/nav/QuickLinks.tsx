import React, { useState } from 'react'

interface ChildProps {
	onButtonClick: (name: string) => void
}

const QuickLinks = ({ onButtonClick }: ChildProps) => {
	const cities = [
		{ id: 1, name: 'Paris' },
		{ id: 2, name: 'Tokyo' },
		{ id: 3, name: 'Los Angeles' },
		{ id: 4, name: 'Denver' }
	]

	return (
		<div className="flex flex-row justify-around items-center m-1 lg:m-4 px-2 md:px-8 bg-neutral-100 rounded-lg text-sm md:text-base">
			{cities.map((city) => (
				<button
					key={city.id}
					className="uppercase font-bold text-stone-800 mx-2"
					onClick={() => onButtonClick(city.name)}
				>
					{city.name}
				</button>
			))}
		</div>
	)
}

export default QuickLinks
