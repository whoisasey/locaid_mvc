import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import SingleCard from './SingleCard'
import Loader from '../reusables/Loader'

const AllPages = ({ toRender }) => {
	
	if (toRender === [] || toRender.length === 0) {
		return (
			<Loader />
			);
		} else {
		// console.log(toRender);

		const allMapped = toRender.map(card => {
			return (
				<NavLink to={`/page/${card.slug}`} key={card._id} className="card">
					<SingleCard card={card} />
				</NavLink>
			);
		});


		
		return (
			<Fragment>
				<div className="cards">

					{allMapped}
				</div>
			</Fragment>
		);
	}
}


export default AllPages