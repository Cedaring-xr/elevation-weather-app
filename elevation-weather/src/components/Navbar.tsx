import React from 'react'

const Navbar = () => {
	return (
		<div className="navbar-container">
			<ul className="navbar">
				<li className="nav-item">
					<a className='btn btn-success'>Nav item 1</a>
				</li>
				<li className="nav-item">
          <a className='btn btn-success'>Nav item 2</a>
        </li>
				<li className="nav-item">
					<a className="btn btn-success">Nav item 3</a>
				</li>
			</ul>
		</div>
	)
}

export default Navbar
