import React from 'react'
import { NavLink,  } from 'react-router-dom';

const Nav = () => {
	return (

		<div  className="nav">
			<NavLink to="/" className="logo"><h3>Second Life</h3></NavLink>
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
