import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import SingleCard from './SingleCard'

const AllPages = ({data}) => {
	console.log(data)

	const allMapped = data.map(card => {
		console.log(card)
		return (
			<NavLink to={`/page/${card.slug}`} key={card._id.$oid}>
				<SingleCard card={card}/>
			</NavLink>
		)
	})

		
		return (
			<Fragment>
				{/* title */}
				<div className="ui cards">

				{allMapped}
				</div>
			</Fragment>
		);
	}


export default AllPages