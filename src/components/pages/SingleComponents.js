import React, { Fragment } from 'react'
import blankets from '../../assets/charity_desc/1-Blankets.png'

import { Icon,  } from '@iconify/react';
import tshirtIcon from '@iconify-icons/raphael/tshirt';


export const SingleHeader = ({ props }) => {
	const { name, charity_no, image_gallery } = props;
	const image_header = image_gallery ? 	<img src={image_gallery[2]} alt={name}/> : null

	return (
		<div className="single_header">
			{image_header}
		<div className="hero_text">
			<h3>{name}</h3>
			<strong>Charity/BN: {charity_no}</strong>
		</div>

	</div>
)
}

export const SingleInfo = ({ mission, vision }) => {

	const renderMission = () => {
		return (
			<div className="single_items" id="mission">
			<h3>Mission</h3>
			<h6>{mission}</h6>
			</div>
		)
	}

	const renderVision = () => {
		return (
				<div className="single_items" id="vision">
					<h3>Vision</h3>
					<h6>{vision}</h6>
				</div>
		)
	}

		return (
			<Fragment>
				{mission ? renderMission() : null}
				{vision ? renderVision() : null}
			</Fragment>
		);
	}


export const SingleAbout = ({ summary}) => {
	return (
		<div className="single_items" id="about">
			<h3>About</h3>
			<h6>{summary}</h6>
		</div>
	)
}

export const SingleFinance = ({ props }) => {
	const { expenses, revenue, name } = props;
	const { charitable_programs, fundraising, gifts, management_admin, expense_other  } = expenses;
	const { gov_funding, receipted_donations, non_receipted_donations, other_charity_gifts, rev_other } = revenue;

	const expenses_total = charitable_programs + fundraising + gifts + management_admin + expense_other;
	const rev_total = gov_funding + receipted_donations + non_receipted_donations + other_charity_gifts + rev_other;

	const charitable_percent = Math.ceil((charitable_programs / expenses_total) * 100)
	const admin = Math.ceil((management_admin / expenses_total) * 100)
	const gov = Math.ceil((gov_funding / rev_total) * 100)
	const fundraised = Math.ceil((fundraising / expenses_total) * 100)

	const financeArr = [
		{
			value: `${charitable_percent}%`,
			label: 'Goes toward charitable programs'
		},
		{
			value: `${admin}%`,
			label: 'Total compensation for employees'
		},
		{
			value: `${gov}%`,
			label: 'Funding from the government'
		},
		{
			value: `${fundraised}%`,
			label: 'From fundraising efforts'
		}
	]

	return (
		<div className="single_items" id="financial">
			<h3>Financial</h3>
			<div>
				<div className="statistics">
					{financeArr.map((item, index) => {
						return (
							<div className="statistic" key={index}>
								<h3 className="value"><strong>{item.value}</strong></h3>
								<div className="label">{item.label}</div>
						</div>
						)
					})}
				</div>
				<p>Financial information is provided by Statistics Canada on a yearly basis. {name } believes in the transparency of their financial information to ensure donors are aware where their donations are going towards. If you require further information, please email the charity.</p>
			</div>
		</div>

		)
}

export const SingleContact = ({ props }) => {
	const {phone, email, address_object, website} = props

	return (
		<div className="single_contact" id="contact">
			<h3>Contact</h3>
		<div className="info">
			<iframe title="map"
				frameBorder="0"
				width="75%"
				height="300px"
			loading="lazy"
			allowFullScreen
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
		</div>
	</div>
			<div className="contact_buttons">
			<a href={website} className="button">Website</a>
				<a href={`tel:${phone}`} className="button">Call Charity</a>
				<a href={ `mailto:${email}`} className="button">Email Charity</a>
			</div>
		</div>
	)
}

export const SingleGallery = ({ props }) => {
	const {image_gallery, name} = props
	return (
	<div className="single_gallery" id="gallery">
		{image_gallery.map((el, index) => {
			return (
				<img src={el} alt={`${name} Gallery`} key={index}/>
			)
			
		})}
	</div>
	)
}

export const SingleServices = ({props}) => {
	return (
		<div className="single_services" id="services">
			<h3>Services</h3>
			<ul>
				{props.map((el, index) => {
					return (
						<li key={ index}>{el}</li>
						)
				})}
			</ul>
		</div>		
	)
}

export const SingleItems = ({ props }) => {
	const { item_accepted_currently, items_accepted_precovid } = props;
	return (
		<div className="single_services" id="accepted-items">
		<h3>Accepted Items</h3>
		<div>
			<div className="single_icons">
				{/* <Icon icon={tshirtIcon} />
				<Icon icon={tshirtIcon} />
				<Icon icon={tshirtIcon} /> */}
			</div>
			<ul>
				{items_accepted_precovid.map((el, index) => {
					return (
						<li key={index}>{el}</li>
					)
				})}
				
			<li>Current Covid Restrictions: <em>{ item_accepted_currently}</em></li>
			</ul>
		</div>
	</div>
	)
}