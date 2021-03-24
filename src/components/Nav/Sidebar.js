import React from 'react'
import { NavLink, } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

const Sidebar = () => {
	return (
		<div className="sidebar">
			<Menu >
				<NavLink to="/all" className="menu-item">View All</NavLink>
				<NavLink to="/categories" className="menu-item">Categories</NavLink>

				<NavLink to="/about" className="menu-item">About</NavLink>

			</Menu>
		</div>
	)
}

export default Sidebar
