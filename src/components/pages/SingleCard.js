import React from 'react'

const SingleCard = ({ card }) => {
	// console.log(card)
	if (card === undefined) {
		return null;
	} else {
		const { logo, name, address, summary } = card;
		return (
			<div className="ui card">
				<div className="image"><img src={logo} alt={`${name}'s Logo`} /></div>
				<div className="content">
					<div className="header">{name}</div>
					<div className="meta">{address}</div>
					<div className="description">{summary}</div>
				</div>
			</div>
		);
	}
}

export default SingleCard
