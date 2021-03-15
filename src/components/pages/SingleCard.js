import React, { Fragment } from 'react'

const SingleCard = ({ card }) => {
	// console.log(card)
	if (card === undefined) {
		return null;
	} else {
		const { logo, name, address_object, service_cohort } = card;


		
		return (
			<Fragment>
				<div className="image"><img src={logo} alt={`${name}'s Logo`} /></div>
				<div className="content">
					<h5 className="card_header">{name}</h5>
					<div className="card_meta">
						<p>{address_object.locale}</p>
						<p>{service_cohort}</p>
					</div>
					{/* <p className="card_meta">{address}</p> */}
					{/* <div className="card_description">{summary}</div> */}
				</div>
			</Fragment>
		);
	}
}

export default SingleCard
