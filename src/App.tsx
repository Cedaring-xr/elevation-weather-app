import React, { useState } from 'react'
import Header from './components/Header'
import SlideSelect from './components/SlideSelect'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
	const [showModal, setShowModal] = useState(false)

	const handleModalOpen = () => {
		setShowModal(true)
	}

	const handleModalClose = () => {
		setShowModal(false)
	}

	return (
		<div className="background relative flex justify-center h-[1550px] md:h-[1300px]">
			<Header />
			<SlideSelect />
			{showModal && <Modal message="Future features that I plan on adding" closeModal={handleModalClose} />}
			<Footer modal={handleModalOpen} />
		</div>
	)
}

export default App
