import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import SlideSelect from './components/SlideSelect'
import QuickLinks from './components/nav/QuickLinks'
import SearchLocation from './components/Search/SearchLocation'
import Footer from './components/Footer'
import Modal from './components/Modal'

function App() {
	return (
		<div className="background relative flex justify-center h-[1200px] md:h-[1300px]">
			<Header />
			<SearchLocation />
			{/* <SlideSelect /> */}
			<Footer />
		</div>
	)
}

export default App
