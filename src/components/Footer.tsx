import React from 'react'

type FooterProps = {
	modal: () => void
}

const Footer: React.FC<FooterProps> = ({ modal }) => {
	return (
		<div className="w-full h-[30px] flex flex-row justify-between items-center bg-stone-900 bottom-0 fixed px-4 md:px-12 text-xs md:text-base">
			<span className="text-white">
				created by:{' '}
				<a className="text-blue-400" href="https://mattraydev.com" target="_blank" rel="noreferrer">
					Matt Ray
				</a>
			</span>
			<span className="text-white">
				<p className="text-blue-400 cursor-pointer" onClick={modal}>
					Furture Features
				</p>
			</span>
		</div>
	)
}
export default Footer
