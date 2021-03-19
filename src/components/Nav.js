import React from 'react'
import { NavLink, } from 'react-router-dom';
import Dropdown from 'react-multilevel-dropdown';

export const categories = [
	'Animal',
	'Arts and Culture',
	'Community',
	'Education',
	'Environmental',
	'Health',
	'International',
	'Food',
	'Health'
]

export const locations = [
	'Downtown Toronto',
	'North Toronto',
	'East Toronto',
	'West Toronto'
]

const Nav = () => {
	return (

		<div  className="nav">
			<NavLink to="/" className="logo"><h3>Second Life</h3></NavLink>

			<ul className="menu">
				<Dropdown
					className="menu"
					title='Trusted Charities'
				>
					<Dropdown.Item className="dropdown"
					>
						<NavLink to="/all">All</NavLink>
					</Dropdown.Item>
					<Dropdown.Item >
						<NavLink to='/all'>Categories</NavLink>
						<Dropdown.Submenu>
				{categories.map((el, index) => {
					return (
						<Dropdown.Item className="dropdown">{ el}</Dropdown.Item>
					)
				})}
						</Dropdown.Submenu>
					</Dropdown.Item>
				
					<Dropdown.Item>
						<NavLink to="/" className="dropdown">Location</NavLink>
						<Dropdown.Submenu>
				{locations.map((el, index) => {
					return (
						<Dropdown.Item className="dropdown">{ el}</Dropdown.Item>
					)
				})}
						</Dropdown.Submenu>
					</Dropdown.Item >
					<Dropdown.Item className="dropdown">
						<NavLink to="/"  className="dropdown">Top Viewed</NavLink>
					</Dropdown.Item>
					<Dropdown.Item >
						<NavLink to="/" className="dropdown">High Impact</NavLink>
					</Dropdown.Item>
				</Dropdown>
				
				<NavLink to="/about">About</NavLink>
			</ul>
		</div>
	)
}

export default Nav
