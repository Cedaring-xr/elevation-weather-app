import React, { useState } from 'react'
import { TiArrowDownThick, TiArrowUpThick } from 'react-icons/ti'

type SliderProps = {
	beforeImage: string
	afterImage: string
}

const ComparisonSlider: React.FC<SliderProps> = ({ beforeImage, afterImage }) => {
	const [sliderPosition, setSliderPosition] = useState(50) //percentage of slider line between images
	const [isDragging, setIsDragging] = useState(false)
	const [elevation, setElevation] = useState<number>(7030)

	const handleDrag = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
		if (!isDragging) return
		const rect = e.currentTarget.getBoundingClientRect()
		const y = Math.max(0, Math.min(e.clientY - rect.top, rect.height))
		const percent: number = Math.max(0, Math.min((y / rect.height) * 100, 100))
		const elevationPercent = 100 - percent
		const elevationRange = elevationPercent * 65.38 + 3619 //low = Lamar(3619), hight = Leadville(10157)
		setSliderPosition(percent)
		setElevation(elevationRange)
	}

	const handleMouseDown = () => {
		setIsDragging(true)
	}

	const handleMouseUp = () => {
		setIsDragging(false)
	}

	return (
		<div id="slider-container" className="relative flex" onMouseUp={handleMouseUp} onMouseLeave={handleMouseUp}>
			<div
				id="image-container"
				className="relative w-5/6 m-auto overflow-hidden border-4 border-slate-900"
				onMouseDown={handleMouseDown}
				onMouseMove={handleDrag}
			>
				<img id="before-image" src={beforeImage} alt="black and white version of mountain slider image" />
				<div className="absolute w-full top-0" style={{ clipPath: `inset(0 0 ${100 - sliderPosition}%  0)` }}>
					<img id="after-image" src={afterImage} alt="color version of mountain slider image" />
				</div>
				<div
					className="absolute top-0 h-1 w-full bg-white cursor-pointer"
					style={{ top: `calc(${sliderPosition}% - 1px)` }}
				>
					<div
						id="slider-line"
						className="w-[50px] h-[50px] rounded-full border-4 border-white mx-auto -my-6 flex flex-col justify-center items-center bg-zinc-900"
					>
						<TiArrowDownThick className="text-white text-2xl" />
						<TiArrowUpThick className="text-white text-2xl" />
					</div>
				</div>
			</div>
			<div id="range-slider-container" className="p-4 w-1/6 overflow-hidden flex justify-center">
				<div className="w-4 h-full bg-sky-100 border-2 border-black rounded-full">
					<div
						className="w-3 h-3 bg-black rounded-full absolute"
						style={{ top: `calc(${sliderPosition}% - 1px)` }}
					></div>
				</div>
				<span
					className="text-white absolute -right-6 md:-right-2"
					style={{ top: `calc(${sliderPosition}% - 1px)` }}
				>
					{elevation.toFixed()}
				</span>
			</div>
		</div>
	)
}

export default ComparisonSlider
