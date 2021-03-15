import React from 'react'
import { NavLink,  } from 'react-router-dom';

const Nav = () => {
	return (

		<div to="/" className="nav">
			<div className="logo">placeholder</div>
			<div className="menu">
				{/* input bar goes here */}
				<NavLink to="/">Trusted Charities</NavLink>
				{/* drop down menu */}
				<NavLink to="/">About</NavLink>
				{/* about page */}
			</div>
		</div>
	)
}

export default Nav
