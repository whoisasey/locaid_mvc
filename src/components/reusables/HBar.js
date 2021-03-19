import React, { useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';

export const h_bar_links = [
	{
	name: 'About',
	section: 'about'
	},
	{
	name: 'Mission',
	section: 'mission'
	},
	{
	name: 'Vision',
	section: 'vision'
	},
	{
	name: 'Gallery',
	section: 'gallery'
	},
	{
	name: 'Services',
	section: 'services'
	},
	{
	name: 'Accepted Items',
	section: 'accepted-Items'
	},
	{
	name: 'Financial',
	section: 'financial'
	},
		{
	name: 'Contact',
	section: 'contact'
	},
]

const HBar = () => {
	let history = useHistory();
	console.log(history)

	return (
		<ul className="h_bar">
			{h_bar_links.map((el, index) => {
				return (
					<Link to={{
						pathname: `${history.location.pathname}`,
						hash: `#${el.section}`
					}} key={index}>{ el.name}</Link>
					)
				})}
		</ul>
	)
}

export default HBar
