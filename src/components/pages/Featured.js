/* eslint-disable array-callback-return */
import React, { Fragment } from 'react'
import Loader from '../reusables/Loader'
import { NavLink } from 'react-router-dom';
import SingleCard from '../pages/SingleCard'


const Featured = ({ props }) => {
	if (props === undefined) {
		return (
			<Loader />
		);
	} else {

		const fundingArr = []
		props.map(card => {
			const {revenue } = card;
			const { gov_funding, receipted_donations, non_receipted_donations, other_charity_gifts, rev_other } = revenue;
			const rev_total = gov_funding + receipted_donations + non_receipted_donations + other_charity_gifts + rev_other;
			const gov = Math.ceil((gov_funding / rev_total) * 100);

			if (gov < 40)
			fundingArr.push(card)
		})

		const foundIn = [0,1,2,3]

		const newSet = new Set(foundIn)
		const featured = fundingArr.filter((_, index) => !newSet.has(index))

		return (
			<div className="featured_cards">
				{featured.map(card => {
					return (
				<NavLink to={`/page/${card.slug}`} key={card._id} className="card">
					<SingleCard card={card} />
				</NavLink>
					)
				})}
			</div>
		);
	}
}

export default Featured