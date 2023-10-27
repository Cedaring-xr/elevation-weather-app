import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import SlideSelect from './components/SlideSelect'
import QuickLinks from './components/nav/QuickLinks'

const citiesList = [
	{ id: 1, name: 'London' },
	{ id: 2, name: 'Tokyo' },
	{ id: 3, name: 'New York' },
	{ id: 4, name: 'Denver' }
]

function App() {
	return (
		<div className="bg-gradient-to-b from-stone-300 to-slate-500">
			<Header />
			<div className="mx-auto max-w-screen-lg py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
				<QuickLinks cities={citiesList} />

				<SlideSelect />
			</div>
		</div>
	)
}

export default App
