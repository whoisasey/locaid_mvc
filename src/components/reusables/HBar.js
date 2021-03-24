import React, { Fragment, useEffect, useState} from 'react'
// import * as Scroll from 'react-scroll';
// import {Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'
import {Link, scrollSpy,  } from 'react-scroll'


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

export const mobile_links = [
	{
name: 'About',
section: 'about'
},
{
name: 'Vision',
section: 'vision'
},
{
name: 'Accepted Items',
section: 'accepted-items'
},
{
name: 'Contact',
section: 'contact'
},
]

export const HBar = () => {
	const [screenWidth, setScreenWidth] = useState(0)


	useEffect(() => {
		setScreenWidth(window.innerWidth)

		return () => {
			scrollSpy.update();
		}
	}, [screenWidth]);


	const ifMobile = (screenWidth <= 768)
	

	const desktop = h_bar_links.map((el, index) => {
			return (
				<Link activeclass="active" to={el.section} spy={true} smooth={true} offset={50} duration={500}  key={index}>{el.name }</Link>
			)
	})
	
	const mobile = mobile_links.map((el, index) => {
			return (
				<Link activeclass="active" to={el.section} spy={true} smooth={true} offset={50} duration={500}  key={index}>{el.name }</Link>
			)
	})

	return (
	<Fragment>
	<ul className="h_bar">
		{ifMobile ? mobile : desktop}
			</ul>
			</Fragment>
)
}
