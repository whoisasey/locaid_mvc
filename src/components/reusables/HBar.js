import React,{useEffect} from 'react'
import * as Scroll from 'react-scroll';
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'


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
section: 'accepted-items'
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

const HBar = ({handleSetActive}) => {

	useEffect(() => {


		return () => {

			scrollSpy.update();
		}
	}, []);



return (
	<ul className="h_bar">
		{h_bar_links.map((el, index) => {
			return (
				<Link activeClass="active" to={el.section} spy={true} smooth={true} offset={50} duration={500}  key={index}>{el.name }</Link>
			)
		})}

	</ul>
)
}

export default HBar
