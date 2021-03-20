import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import SingleCard from './SingleCard'

const AllPages = ({toRender}) => {

	const allMapped = toRender.map(card => {
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