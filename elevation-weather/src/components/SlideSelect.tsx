import React, { useState } from 'react'
import SearchLocation from './Search/SearchLocation'
import SearchElevation from './Search/SearchElevation'
import { TbArrowBigRightLine } from 'react-icons/tb'
import { TbArrowBigLeftLine } from 'react-icons/tb'

const SlideSelect = () => {
	const [menu, setMenu] = useState(false)

	return (
		<>
			<div className="flex flex-col justify-center absolute top-[150px] border-2 border-stone-800 md:rounded-3xl max-w-screen-lg p-0">
				<button className="text-white w-full md:rounded-t-[20px] bg-zinc-800" onClick={() => setMenu(!menu)}>
					{!menu ? (
						<span className="text-xl flex m-2 justify-center">
							Switch to Elevation
							<TbArrowBigRightLine className="text-2xl mx-4" />
						</span>
					) : (
						<span className="text-xl flex m-2 justify-center">
							<TbArrowBigLeftLine className="text-2xl mx-4" />
							Switch to Location
						</span>
					)}
				</button>
				{!menu ? (
					<div className="relative flex justify-center">
						<SearchLocation />
					</div>
				) : (
					<div className="relative flex justify-center">
						<SearchElevation />
					</div>
				)}
			</div>
		</>
	)
}

export default SlideSelect
