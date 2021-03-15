import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import SingleCard from './SingleCard'

const AllPages = ({data}) => {
	// console.log(data)

	const allMapped = data.map(card => {
		// console.log(card, card._id)
		return (
			<NavLink to={`/page/${card.slug}`} key={card._id} className="card">
				<SingleCard card={card}/>
			</NavLink>
		)
	})

		
		return (
			<Fragment>
				<div className="cards">

				{allMapped}
				</div>
			</Fragment>
		);
	}


export default AllPages