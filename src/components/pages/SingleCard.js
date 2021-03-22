import React, { Fragment } from 'react'

const SingleCard = ({ card }) => {
	if (card === undefined) {
		return null;
	} else {
		const { logo, name, service_cohort, location } = card;
		
		return (
			<Fragment>
				<div className="image"><img src={logo} alt={`${name}'s Logo`} /></div>
				<div className="content">
					<div className="card_header">{name}</div>
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
