import React, { useState } from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import { GrFormClose } from 'react-icons/gr'

type Props = {
	message: string
}

export default function Banner({ message }: Props) {
	const [bannerVisible, setBannerVisible] = useState(true)

	return (
		<>
			{bannerVisible && (
				<div className="bg-zinc-700 text-white my-4 p-3 md:p-6 relative rounded-lg">
					{/* <GrFormClose
						className="absolute top-0 right-0 text-2xl cursor-pointer"
						onClick={() => setBannerVisible(false)}
					/> */}
					<AiOutlineCloseCircle
						onClick={() => setBannerVisible(false)}
						className="text-3xl text-red-600 absolute right-2 top-2 cursor-pointer"
					/>
					<p className="mr-6">{message}</p>
				</div>
			)}
		</>
	)
}
