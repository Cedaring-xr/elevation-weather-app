import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import SlideSelect from './components/SlideSelect'
import QuickLinks from './components/nav/QuickLinks'
import SearchLocation from './components/Search/SearchLocation'

function App() {
	return (
		<div className="bg-gradient-to-b from-stone-500 to-slate-700 relative flex justify-center">
			<Header />

			<SearchLocation />
			{/* <SlideSelect /> */}
		</div>
	)
}

export default App
