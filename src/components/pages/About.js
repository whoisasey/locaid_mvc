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
				<div className="single_section">
					<di className="single_left"><h4>What is Second Life?</h4></di>
				<div className="single_right">
					<h6>A curated list of organizations and charities that provide full transparency of where your donations go. <br/> <br/> Donors are able to search for organizations and charities based on their own values and beliefs to have maximum impact towards their community.
					</h6>
				</div>
				</div>

				<div className="single_section">
					<div className="single_left">
						<h4>Why is this <br/>important? </h4>
					</div>

					<div className="single_right">
						<h6>We want to ensure donors are aware where their donations are going too and how much impact their donation is. <br/> <br/>Many charities receive thousands and thousands of donations yearly and still 90% of that donation ends up with textile recyclers and 14 million tonnes goes to land fills. We want to help donors find charities where their donation will go further. </h6>
					</div>
				</div>

				<div className="single_section">
					<div className="single_left">
						<h4>Verified &<br/> Certified</h4>
					</div>
					<div className="single_right">
						<h6>The charities in the Second Life website are charities from the list on the government of Canada website. We ensure donors are provided with the knowledge to make informed decisions in their donations. If you would like to learn more, please visit the <a href="https://www.canada.ca/en/revenue-agency/services/charities-giving/giving-charity-information-donors.html"rel="noreferrer" target="_blank">Canada.ca</a> donor website. 
</h6>
					</div>
			</div>

			<div className="single_section">
				<div className="single_left">
					<h4>Tips for clothing <br/>donations</h4>
				</div>
				<div className="about_icons single_right">
					{donations.map((el, index) => {
						return (
							<li key={index} className="icon">
								<img src={el.img[0] } alt="" />
								<h6>{el.text}</h6>
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
