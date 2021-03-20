import React, { Fragment } from 'react'

const SingleCard = ({ card }) => {
	// console.log(card)
	if (card === undefined) {
		return null;
	} else {
		const { logo, name, service_cohort, location } = card;
		// console.log(card)


		
		return (
			<Fragment>
				<div className="image"><img src={logo} alt={`${name}'s Logo`} /></div>
				<div className="content">
					<h5 className="card_header">{name}</h5>
					<div className="card_meta">
						<p>{location}</p>
						<p>{service_cohort}</p>
					</div>
				</div>
			</Fragment>
		);
	}
}

export default SingleCard
