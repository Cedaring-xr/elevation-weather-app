import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'

type ModalProps = {
	message: string
	closeModal: () => void
}

const Modal: React.FC<ModalProps> = ({ message, closeModal }) => {
	return (
		<div
			id="overlay"
			className="w-full h-full fixed bg-slate-800 bg-opacity-90 flex justify-center items-center"
			onClick={closeModal}
		>
			<div
				id="modal-container"
				className="absolute w-5/6 md:w-3/4 max-w-[1000px] h-4/5 top-[100px] bg-slate-200 border-2 border-neutral-900 opacity-100 rounded-3xl"
			>
				<AiOutlineCloseCircle
					onClick={closeModal}
					className="text-3xl text-red-600 absolute right-8 top-6 cursor-pointer"
				/>
				<h1 className="text-xl md:text-2xl text-center m-6 mt-16 lg:mt-6">{message}</h1>
				<div id="list">
					<ul className="mt-12 list-disc ml-8 lg:ml-20">
						<li className="my-2">Adding a loading spinner on the elevation search page</li>
						<li className="my-2">Adding a click animation to butttons on the site</li>
						<li className="my-2">Adding elevation display on cities when searching by elevation</li>
						<li className="my-2">Allowing to search for current elevation by using google maps api</li>
						<li className="my-2">Persisting search data when switching back and forth between tabs</li>
						<li className="my-2">Adding more accurate city search for duplicate cities</li>
						<li className="my-2">Improve notification messages with more details and errors</li>
						<li className="my-2">Expand Elevation search to other US states with mountains</li>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Modal
