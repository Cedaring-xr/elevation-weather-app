import React, { useState } from 'react'
import SearchLocation from './Search/SearchLocation'
import SearchElevation from './Search/SearchElevation'

const SlideSelect = () => {
	const [menu, setMenu] = useState(false)

	return (
		<>
			<div className="slide-container">
				<button onClick={() => setMenu(!menu)}>{!menu ? `Switch to Elevation` : `Switch to Location`}</button>
				{!menu ? (
					<div className="slide-1">
						<SearchLocation />
					</div>
				) : (
					<div className="slide-2">
						<SearchElevation />
					</div>
				)}
			</div>
		</>
	)
}

export default SlideSelect
