// import { useHistory, Link } from 'react-router-dom'
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

	// componentDidMount: function() {
  //   Events.scrollEvent.register('begin', function(to, element) {
  //     console.log('begin', arguments);
  //   });

  //   Events.scrollEvent.register('end', function(to, element) {
  //     console.log('end', arguments);
  //   });

  //   scrollSpy.update();
  // },
  // componentWillUnmount: function() {
  //   Events.scrollEvent.remove('begin');
  //   Events.scrollEvent.remove('end');
  // },
  // scrollToTop: function() {
  //   scroll.scrollToTop();
  // },
  // scrollToBottom: function() {
  //   scroll.scrollToBottom();
  // },
  // scrollTo: function() {
  //   scroll.scrollTo(100);
  // },
  // scrollMore: function() {
  //   scroll.scrollMore(100);
  // },
  // handleSetActive: function(to) {
  //   console.log(to);
  // },
	// let history = useHistory();

	return (
		<ul className="h_bar">
		
		</ul>
	)
}

export default HBar
