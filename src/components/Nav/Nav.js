import React, {useState, useEffect} from 'react'
import { NavLink, } from 'react-router-dom';
import Dropdown from 'react-multilevel-dropdown';
import {Desktop, Mobile} from '../reusables/Logo'
 
const Nav = ({ setSearch, categories, locations, searchVal, setSearchVal, searchSpace }) => {
	const [screenWidth, setScreenWidth] = useState(0);

	useEffect(() => {
		setScreenWidth(window.innerWidth)
	}, [])

	const ifMobile = (screenWidth <= 768)

	const reset = (e) => {
	setSearchVal('')
	setSearch('')
	}
	
	return (

		<nav  className="nav_desktop" aria-label="primary">
			<NavLink to="/" className="logo" tabIndex="0" onClick={(e) => reset(e)}>
				{ifMobile? <Mobile /> :<Desktop />}
			</NavLink>

			<div className="menu" aria-label="navigation">
				<ul >
					<NavLink to="/about" tabIndex="0">About</NavLink>
				
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
				
				</ul>
				
					<NavLink to="/search">
						<div className="search_bar">
						<input type="text" className="search_box" placeholder="Search Charities" value={searchVal} onChange={(e) => searchSpace(e)} aria-label="search bar" tabIndex="0"/>
				<div className="glyph_container">
					<span className="search_glyph"></span>
				</div>
						</div>
				</NavLink>
				
			</div>
		</nav>
	)
}

export default Nav
