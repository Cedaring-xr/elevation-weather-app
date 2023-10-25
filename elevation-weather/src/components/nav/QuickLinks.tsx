import React from 'react'

type LinkProps = {
	cities: {
		id: number
		name: string
	}[]
}

const QuickLinks: React.FC<LinkProps> = ({ cities }) => {
	return (
		<div className="flex flex-row justify-around items-center m-4 px-8 bg-neutral-100 rounded-lg">
			{cities.map((city) => (
				<div key={city.id} className="uppercase font-bold text-stone-800">
					{city.name}
				</div>
			))}
		</div>
	)
}

export default QuickLinks
