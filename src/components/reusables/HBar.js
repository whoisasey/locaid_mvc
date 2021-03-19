import {NavLink} from 'react-router-dom'

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
	section: 'Vision'
	},
	{
	name: 'Gallery',
	section: 'Gallery'
	},
	{
	name: 'Services',
	section: 'Services'
	},
	{
	name: 'Accepted Items',
	section: 'Accepted-Items'
	},
	{
	name: 'Financial',
	section: 'Financial'
	},
		{
	name: 'Contact',
	section: 'Contact'
	},
]

const HBar = () => {
	return (
		<ul className="h_bar">
			{h_bar_links.map((el, index) => {
				return (
					<NavLink to={`#${el.section}`} key={index}>{ el.name}</NavLink>
					)
				})}
		</ul>
	)
}

export default HBar
