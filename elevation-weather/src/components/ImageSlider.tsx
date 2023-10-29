import React from 'react'
import { FiArrowDown, FiArrowUp } from 'react-icons/fi'

const ImageSlider = () => {
	return (
		<div id="slider-container" className="relative p4 border-2 border-red-500">
			<div id="image-container">
				<img id="before-image" src="" alt="" />
				<img id="after-image" src="" alt="" />
				<span id="slider-line">
					<div className="w-[50px] h-[50px] rounded-full border-2 border-white">
						<FiArrowUp />
						<FiArrowDown />
					</div>
				</span>
			</div>
		</div>
	)
}

export default ImageSlider
