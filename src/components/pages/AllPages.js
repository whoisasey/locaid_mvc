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
				  {/* <div className="searchContainer">
        <form>
          <label htmlFor="myInput">All</label>
          <input
            id="myInput"
            type="checkbox"
            onClick={() => onChange("ALL")}
            checked={activeFilter.length === locationsList.length}
          />
          {locationsList.map((filter, index) => (
            <li key={index}>
              <label htmlFor={filter.id}>{filter.name}</label>
              <input
                id={filter.id}
                type="checkbox"
                checked={activeFilter.includes(filter.value)}
                onClick={() => onChange(filter.value)}
              />
            </li>
          ))}
        </form>
        <ul >
          {filteredList.map(item => (
              <li key={item.id}>
                {item.name}
              </li>
          ))}
        </ul>
      </div> */}
				<h3>{search}</h3>
				<p>{`${toRender.length} items` }</p>
				<div className="cards">

					{allMapped}
				</div>
			</div>
		);
	}
}


export default AllPages