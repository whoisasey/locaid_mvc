import React, { Fragment } from 'react'
import { Icon,  } from '@iconify/react';
import tshirtIcon from '@iconify-icons/raphael/tshirt';


export const SingleHeader = ({ name, charity_no }) => {
	return (
		<div className="single_header">
		<h3>{name}</h3>
		<strong>Charity/BN: {charity_no}</strong>

	</div>
)
}

export const SingleInfo = ({mission, vision }) => {
	return (
		<Fragment>
	<div className="single_items" id="mission"> 
			<h3>Mission</h3>
			<h6>{mission }</h6>
		</div>
		<div className="single_items" id="vision">
			<h3>Vision</h3>
			<h6>{vision}</h6>
			</div>
		</Fragment>
	)
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
	return (
		<div className="single_items" id="financial">
			<h3>Financial</h3>
			<div>
				<div className="statistics">
						<div className="statistic" >
							<div className="value"><strong>{props}%</strong></div>
							<div className="label">goes toward charitable programs</div>
						</div>
				</div>
			</div>
		</div>

		)
}

export const SingleContact = ({ props }) => {
	const {phone, email, address_object} = props

	return (
						<div className="single_contact">
						<h3>Contact</h3>
					<div className="info">
						<iframe title="map"
							frameBorder="0"
							width="100%"
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
						<div className="contact_buttons">
							<a href={`tel:${phone}`} className="button">Call Charity</a>
							<a href={ `mailto:${email}`} className="button">Email Charity</a>
						</div>
					</div>
				</div>
					</div>
	)
}

export const SingleGallery = ({ props }) => {
	const {image_gallery, name} = props
	return (
	<div className="single_gallery">
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
		<div className="single_services">
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
						<li>Current Covid Restrictions: <em>{ item_accepted_currently}</em></li>
					</div>
				</div>
	)
}