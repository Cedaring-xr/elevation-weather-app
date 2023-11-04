import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import SlideSelect from './components/SlideSelect'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
	return (
		<div className="background relative flex justify-center h-[1550px] md:h-[1300px]">
			<Header />
			<SlideSelect />
			<Footer />
		</div>
	)
}

export default App
