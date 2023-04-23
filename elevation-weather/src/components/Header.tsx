import React from 'react'
import Navbar from './Navbar'

const Header = () => {
	return (
		<div className="header-container">
			<img className="header-gif" src="/assets/images/headerBackground.gif" />
			<div className="header-elements">
				<h1 className="title main-title">Elevation Weather</h1>
				<h4>realtime weather search based on location or elevation</h4>
				<Navbar />
			</div>
		</div>
	)
}

export default Header
