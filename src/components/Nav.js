import React, {useState} from 'react'
import { NavLink, } from 'react-router-dom';
import Dropdown from 'react-multilevel-dropdown';


const Nav = ({ props, setSearch }) => {
	// const { setSearch } = props;
	const [searchVal, setSearchVal] = useState('')
	// const [search, setSearch] = useState("")
	// console.log(search)

	const cohorts = props.map((item) => {
		return item.service_cohort
	})
	const categories = [...new Set(cohorts)]

	const locationsArr = props.map(item => {
		return item.location
	})
	
	const locations = [...new Set(locationsArr)]

		  const searchSpace = (e) => {
				let keyword = e.target.value;
				// console.log(keyword)
			setSearch(keyword)
			setSearchVal(keyword)
		}
	return (

		<div  className="nav">
			<NavLink to="/" className="logo"><h3>Second Life</h3></NavLink>

			<ul className="menu">
				<NavLink to="/search">
					<input type="text" placeholder="Search Charities" value={searchVal} onChange={(e) => searchSpace(e)} />
				</NavLink>
				
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
						<Dropdown.Item className="dropdown" key={index}>{ el}</Dropdown.Item>
					)
				})}
						</Dropdown.Submenu>
					</Dropdown.Item>
				
					<Dropdown.Item>
						<NavLink to="/" className="dropdown">Location</NavLink>
						<Dropdown.Submenu>
				{locations.map((el, index) => {
					return (
						<Dropdown.Item className="dropdown" key={index}>{ el}</Dropdown.Item>
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
