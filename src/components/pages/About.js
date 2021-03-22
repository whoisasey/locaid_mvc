import React, {Fragment} from 'react'
import { Icon,  } from '@iconify/react';
import tshirtIcon from '@iconify-icons/raphael/tshirt';
import img from '../../assets/about.png'

export const donations = [
	{
		text: 'Good condition (no stains, holes, or tears) '
	},
	{
		text: 'Too small? Too tight?'
	},	{
		text: 'Don’t wear it anymore? '
	},
		{
		text: 'No undergarments '
	},
			{
		text: 'Old formal attire?'
	},
				{
		text: 'No weird smell'
	},
]
const About = () => {
	return (
		<Fragment>
			<div className="about_hero">
				<h2>What we do</h2>
				<img src={img} alt="woman on computer with a drink" />
			</div>
			<div className="about_single">
				<h3>Why is this important? </h3>
				<div>
					<p>A curated list of organizations and charities that provide full transparency of where your donations go. <br/> <br/> Donors are able to search for organizations and charities based on their own values and beliefs to have maximum impact towards their community.
					</p>
					<p>We want to ensure donors are aware where their donations are going too and how much impact their donation is. <br/> <br/>Many charities receive thousands and thousands of donations yearly and still 90% of that donation ends up with textile recyclers and 14 million tonnes goes to land fills. We want to help donors find charities where their donation will go further. </p>
				</div>
			</div>
			<div className="about_single">
				<h3>Tips for clothing donations</h3>
				<div className="about_icons">
					{donations.map((el, index) => {
						return (
							<div key={index}>
							<Icon icon={tshirtIcon} />
								<p>{el.text}</p>
							</div>
						)
					})}
				</div>


			</div>
		</Fragment>
	)
}

export default About
