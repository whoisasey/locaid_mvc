import React, { Fragment } from 'react';
import img from '../../assets/about_page/Illustration/what_we_do_img.png'
import tshirt from '../../assets/about_page/Icons/1-GoodCondition.png'
import toosmall from '../../assets/about_page/Icons/2-TooSmall.png'
import dontwear from '../../assets/about_page/Icons/3-DontWear.png'
import nounders from '../../assets/about_page/Icons/4-NoUndergarments.png'
import formal from '../../assets/about_page/Icons/5-FormalAttire.png'
import nosmell from '../../assets/about_page/Icons/6-NoSmell.png'


export const donations = [
	{
		img: {0: tshirt},
		text: 'Good condition (no stains, holes, or tears) '
	},
	{
		img: {0: toosmall},
		text: 'Too small? Too tight?'
	},
	{
		img: {0: dontwear},
		text: 'Don’t wear it anymore? '
	},
	{
		img: {0: nounders},
		text: 'No undergarments '
	},
	{
		img: {0: formal},
		text: 'Old formal attire?'
	},			
	{
		img: { 0: nosmell},
		text: 'No weird smell'
	},
]
const About = () => {
	return (
		<Fragment>
		<div className="about_hero">
				<h2>What we do</h2>
				<div className="hero_right"><img src={img} alt="woman on computer with a drink" /></div>
			</div>
				<div className="wrapper">
				<div className="about_single">
					<div><h3>What is Second Life?</h3></div>
				<div>
					<p>A curated list of organizations and charities that provide full transparency of where your donations go. <br/> <br/> Donors are able to search for organizations and charities based on their own values and beliefs to have maximum impact towards their community.
					</p>
				</div>
				</div>

				<div className="about_single">
					<h3>Why is this <br/>important? </h3>

					<p>We want to ensure donors are aware where their donations are going too and how much impact their donation is. <br/> <br/>Many charities receive thousands and thousands of donations yearly and still 90% of that donation ends up with textile recyclers and 14 million tonnes goes to land fills. We want to help donors find charities where their donation will go further. </p>
				</div>

			<div className="about_single">
				<h3>Tips for clothing <br/>donations</h3>
				<div className="about_icons">
					{donations.map((el, index) => {
						return (
							<li key={index} className="icon">
								<img src={el.img[0] } alt="" />
								<p>{el.text}</p>
							</li>
						)
					})}
				</div>
			</div>
			</div>
			</Fragment>
	)
}

export default About
