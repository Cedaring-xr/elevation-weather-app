import React, { useState } from 'react'
import { GrFormClose } from 'react-icons/gr'

type Props = {
	message: string
}

export default function Banner({ message }: Props) {
	const [bannerVisible, setBannerVisible] = useState(true)

	return (
		<>
			{bannerVisible && (
				<div className="bg-fuchsia-800 text-white my-4 p-2 pt-4 md:p-4 border-2 border-black relative">
					<GrFormClose
						className="absolute top-0 right-0 text-2xl cursor-pointer"
						onClick={() => setBannerVisible(false)}
					/>
					{message}
				</div>
			)}
		</>
	)
}
