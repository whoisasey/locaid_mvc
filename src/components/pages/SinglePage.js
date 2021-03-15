import React, { Fragment } from 'react'
import {NavLink} from 'react-router-dom'
import { Icon, InlineIcon } from '@iconify/react';
import tshirtIcon from '@iconify-icons/raphael/tshirt';

const SinglePage = (props) => {
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
// console.log(single)
		const { name, logo, phone, email, charity_no, summary, mission, vision, services, items_accepted_precovid, item_accepted_currently, expenses, revenue, address_object } = single;
		// console.log(address)

		// console.log(expenses)
		const { charitable_programs, fundraising, gifts, management_admin, other } = expenses;
		const total = charitable_programs + fundraising + gifts + management_admin + other;
		const charitable_percent = Math.ceil((charitable_programs / total) * 100)

		return (
			<div className="single">
				<img src={logo} alt={`${name}'s Logo`} />
				
				<div className="single wrapper">
					<div className="single_header">
						<h3>{name}</h3>
						<strong>Charity/BN: {charity_no}</strong>
					</div>
				
					<div className="single_info"> 
					<div className="segment">
						<h4>Mission</h4>
						<p>{mission }</p>
					</div>
					<div className="segment">
						<h4>Vision</h4>
						<p>{vision}</p>
						</div>
					</div>
						
					{/* horizontal nav bar */}
					<hr/>
				</div>
					<div className="single_about">
						<h3>About</h3>
						<h6>{summary}</h6>
					</div>

				{/* gallery */}
					<div className="single_services">
					<h3>Services</h3>
					<ul>
						{/* {services.map((el, index) => {
							return (
								<li key={ index}>{el}</li>
								)
						})} */}
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
					<div>
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
		);
	}
}

export default SinglePage
