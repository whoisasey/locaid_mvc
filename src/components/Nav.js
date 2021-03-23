/* eslint-disable array-callback-return */
import React, {useState, useEffect} from 'react'
import { NavLink, } from 'react-router-dom';
import Dropdown from 'react-multilevel-dropdown';
import {Desktop, Mobile} from './reusables/Logo'
 
// ! WORK ON MOBILE NAV
// https://css-tricks.com/hamburger-menu-with-a-side-of-react-hooks-and-styled-components/
// https://codepen.io/maximakymenko/pen/aboWJpX/?editors=1010
const Nav = ({ props, setSearch }) => {
	const [searchVal, setSearchVal] = useState('')
	const [screenWidth, setScreenWidth] = useState(false)

	useEffect(() => {
		updateImage();
		window.addEventListener("resize", updateImage)
	}, [])

	useEffect(() => {
		updateImage();
		window.removeEventListener("resize", updateImage)
	})

	const updateImage = () => {
		setScreenWidth(window.innerWidth < 480)
		// console.log(window.innerWidth <480)
	}

	const cohorts = props.map((item) => {
		return item.service_cohort
	})
	const categories = [...new Set(cohorts)]

	const locationsArr = props.map(item => {
		if (item.location !== "") 
			return item.location
	})
	
	const locations = [...new Set(locationsArr)]

	const searchSpace = (e) => {
		const { value, textContent } = e.target
	setSearch(value ||textContent)
	setSearchVal(value || textContent)
	}

	const reset = (e) => {
	setSearchVal('')
	setSearch('')
	}

	
	return (

		<div  className="nav">
			<NavLink to="/" className="logo" onClick={(e) => reset(e)}>
				{screenWidth ? <Mobile />: <Desktop /> }
			</NavLink>

			<ul className="menu">
				<NavLink to="/search">
					<input type="text" placeholder="&#x1F50D; Search Charities" value={searchVal} onChange={(e) => searchSpace(e)} />
				</NavLink>
				
				<Dropdown
					className="menu"
					title='Trusted Charities'
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

					{/* <Dropdown.Item className="dropdown">
						<NavLink to="/top-viewed"  className="dropdown">Top Viewed</NavLink>
					</Dropdown.Item> */}

					<Dropdown.Item >
						<NavLink to="/high-impact" className="dropdown">High Impact</NavLink>
					</Dropdown.Item>
				</Dropdown>
				
				<NavLink to="/about">About</NavLink>
			</ul>
		</div>
	)
}

export default Nav
