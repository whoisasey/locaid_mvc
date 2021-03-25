import React from 'react'
import { NavLink } from 'react-router-dom';
import Loader from '../reusables/Loader'
import SingleCard from '../pages/SingleCard'

const HighImpact = ({ props }) => {
	if (props === undefined) {
		return (
			<Loader />
		);
	} else {

		// eslint-disable-next-line array-callback-return
		const filterView = props.map(card => {
			const { revenue } = card;
			const { gov_funding, receipted_donations, non_receipted_donations, other_charity_gifts, rev_other } = revenue;
			const rev_total = gov_funding + receipted_donations + non_receipted_donations + other_charity_gifts + rev_other;
			const gov = Math.ceil((gov_funding / rev_total) * 100);
			// if gov funding is less than 40% of the revenue
			if (gov < 40) {
				
				return (
				<NavLink to={`/page/${card.slug}`} key={card._id} className="card">
					<SingleCard card={card} />
				</NavLink>
			)
		}
		})


		return (
			<div className="wrapper">
				<div className="container">
					<h3>High Impact</h3>
					<h6>Charities featured in the high impact page are organizations that are in need of more clothing and goods donations. The need for additional donations is determined by the lack of funding provided by the government.</h6>
					<div className="cards">
					{filterView}
					</div>
				</div>
			</div>
		);
	}
}

export default HighImpact
