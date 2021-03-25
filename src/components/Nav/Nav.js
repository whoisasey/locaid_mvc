import React, {useState, useEffect} from 'react'
import { NavLink, } from 'react-router-dom';
import Dropdown from 'react-multilevel-dropdown';
import {Desktop, Mobile} from '../reusables/Logo'
 
// ! WORK ON MOBILE NAV
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
// https://codepen.io/maximakymenko/pen/aboWJpX/?editors=1010
const Nav = ({ props, setSearch, categories, locations, searchVal, setSearchVal, searchSpace }) => {
	const [screenWidth, setScreenWidth] = useState(0)

	useEffect(() => {
		setScreenWidth(window.innerWidth)
	}, [])
	// console.log(screenWidth)

	const ifMobile = (screenWidth <= 768)
	// console.log(ifMobile)
	const reset = (e) => {
	setSearchVal('')
	setSearch('')
	}

	
	return (

		<nav  className="nav_desktop">
			<NavLink to="/" className="logo" onClick={(e) => reset(e)}>
				{ifMobile? <Mobile /> :<Desktop />}
			</NavLink>

			<ul className="menu">
				<NavLink to="/about">About</NavLink>

				
				<Dropdown
					className="menu"
					title='All Charities'
				>
					<Dropdown.Item className="dropdown"
					>
						<NavLink to="/all" onClick={(e) => reset(e)}>All</NavLink>
					</Dropdown.Item>
					
					<Dropdown.Item >
							Categories
						<Dropdown.Submenu>
							{categories.map((el, index) => {
								const newLink = el.split('').filter(e => e.trim().length).join('')
					return (
						<NavLink key={index} to={`/categories/${newLink}`}>
							<Dropdown.Item className="dropdown" value={searchVal}
								onClick={(e) => searchSpace(e)}
							>{el}</Dropdown.Item>
						</NavLink>
					)
				})}
						</Dropdown.Submenu>
					</Dropdown.Item>
				
					<Dropdown.Item>Location<Dropdown.Submenu>
							{locations.map((el, index) => {
							const newLink = el.split('').filter(e => e.trim().length).join('')
					return (
						<NavLink  key={index} to={`/location/${newLink}`}>
							<Dropdown.Item className="dropdown"  value={searchVal}
								onClick={(e) => searchSpace(e)}>{el}</Dropdown.Item>
						</NavLink>
					)
				})}
						</Dropdown.Submenu>
					</Dropdown.Item >


					<Dropdown.Item >
						<NavLink to="/high-impact" className="dropdown">High Impact</NavLink>
					</Dropdown.Item>
				</Dropdown>
				
				
							<NavLink to="/search">
					<div className="search_bar">
						<input type="text" className="search_box" placeholder="Search Charities" value={searchVal} onChange={(e) => searchSpace(e)} />
						<div className="glyph_container">
							<span className="search_glyph"></span>
						</div>
					</div>
				</NavLink>
			</ul>
		</nav>
	)
}

export default Nav
