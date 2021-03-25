import React,{ useState, Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import SingleCard from './SingleCard'
import Loader from '../reusables/Loader'

const AllPages = ({ toRender, search, activeFilter, filterList, filteredList, onChange, locationsList }) => {

	
	if (toRender === []) {
		return (
			<Loader />
			);
		} else {
		const allMapped = toRender.map(card => {
			return (
				<NavLink to={`/page/${card.slug}`} key={card._id} className="card">
					<SingleCard card={card} />
				</NavLink>
			);
		});

		return (
			<div className="wrapper">
        <div className="container">
          <h3>{search}</h3>
          <p>{`${toRender.length} items` }</p>
          <div className="cards">
					{allMapped}
          </div>
        </div>
			</div>
		);
	}
}


export default AllPages