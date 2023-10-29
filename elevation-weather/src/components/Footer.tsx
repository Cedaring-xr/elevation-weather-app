import React, { useState } from 'react'

const Footer = () => {
	const [modal, setModal] = useState(false)

	const handleModalopen = () => {
		console.log('open modal')
		setModal(true)
	}

	return (
		<div className="w-full h-[30px] flex flex-row justify-between items-center bg-stone-900 bottom-0 fixed px-4 md:px-12 text-xs md:text-base">
			<span className="text-white">
				created by:{' '}
				<a className="text-blue-400" href="https://mattraydev.com" target="_blank">
					Matt Ray
				</a>
			</span>
			<span className="text-white">
				<p className="text-blue-400" onClick={() => handleModalopen}>
					Furture Features
				</p>
			</span>
		</div>
	)
}
export default Footer
