import React, { Fragment } from 'react'
import { Icon,  } from '@iconify/react';
import tshirtIcon from '@iconify-icons/raphael/tshirt';
import {SingleHeader, SingleInfo, SingleAbout} from './SingleComponents'
require('dotenv').config()

const SinglePage = (props) => {
	// console.log(process.env.REACT_APP_GOOGLE_API)
	const slug = props.match.params.slug;

	const data = props.data;

	const page = data.filter((single) => {
		if (single.slug === slug) {
			return single;
		} else {
			return null;
		}
	});

	const single = page[0];

	if (single === undefined) {
		return null;
	} else {
		const { name, phone, email, charity_no, summary, mission, vision, services, items_accepted_precovid, item_accepted_currently, expenses, image_gallery, address_object } = single;

		const { charitable_programs, fundraising, gifts, management_admin, other } = expenses;
		const total = charitable_programs + fundraising + gifts + management_admin + other;
		const charitable_percent = Math.ceil((charitable_programs / total) * 100)

		return (
			<Fragment>
			<div className="single">
				<div className="single wrapper">
					<SingleHeader name={name} charity_no={charity_no}/>
					<SingleInfo vision={vision} mission={mission}/>
					</div>
					
					<SingleAbout summary={summary}/>

				{/* <div className="single_about">
					<h3>About</h3>
					<h6>{summary}</h6>
				</div> */}

				<div className="single_gallery">
					{image_gallery.map((el, index) => {
						return (
							<img src={el} alt={`${name} Gallery`} key={index}/>
						)
						
					})}
				</div>

				<div className="single_services">
					<h3>Services</h3>
					<ul>
						{services.map((el, index) => {
							return (
								<li key={ index}>{el}</li>
								)
						})}
					</ul>
				</div>
				
				<div className="single_items">
					<h3>Accepted Items</h3>
					<div>
						<div className="single_icons">
							<Icon icon={tshirtIcon} />
							<Icon icon={tshirtIcon} />
							<Icon icon={tshirtIcon} />
						</div>
						<ul>
							{items_accepted_precovid.map((el, index) => {
								return (
									<li key={index}>{el}</li>
								)
							})}
							
						</ul>
						<p>Current Covid Restrictions: <em>{ item_accepted_currently}</em></p>
					</div>
				</div>

				<div className="single_donations">
					<h3>Where Your Donations Go</h3>
					<div>
						<div className="statistics">
								<div className="statistic" >
									<div className="value"><strong>{charitable_percent}%</strong></div>
									<div className="label">goes toward charitable programs</div>
								</div>
						</div>
					</div>
				</div>

				<div className="single_contact">
						<h3>Contact</h3>
					<div className="info">
						<iframe title="map"
							frameBorder="0"
							width="100%"
							height="300px"
						loading="lazy"
						allowfullscreen
						src={`https://www.google.com/maps/embed/v1/place?key=${process.env.REACT_APP_GOOGLE_API}
							&q=${address_object.street},${address_object.locale}&zoom=16`}>
						</iframe>

					<div className="contact">
						<ul>
							<p>Address:</p>
							<li>{address_object.street}</li>
							<li>{address_object.locale}</li>
							<li>{address_object.postal_code}</li>
						</ul>
						<div className="contact_buttons">
							<a href={`tel:${phone}`} className="button">Call Charity</a>
							<a href={ `mailto:${email}`} className="button">Email Charity</a>
						</div>
					</div>
				</div>
					</div>

				</div>
				</Fragment>
		);
	}
}

export default SinglePage
