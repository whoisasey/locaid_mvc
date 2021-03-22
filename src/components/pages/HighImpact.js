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

		const filterView = props.map(card => {
			const { expenses, revenue, name } = card;
			// const { charitable_programs, fundraising, gifts, management_admin, expense_other } = expenses;
			const { gov_funding, receipted_donations, non_receipted_donations, other_charity_gifts, rev_other } = revenue;
			const rev_total = gov_funding + receipted_donations + non_receipted_donations + other_charity_gifts + rev_other;
			// const expenses_total = charitable_programs + fundraising + gifts + management_admin + expense_other;
			const gov = Math.ceil((gov_funding / rev_total) * 100);
			// const fundraised = Math.ceil((fundraising / expenses_total) * 100);
		// const charitable_percent = Math.ceil((charitable_programs / expenses_total) * 100);
		// const admin = Math.ceil((management_admin / expenses_total) * 100);

			// console.log(gov < 40)

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
				{/* <h2>high impact</h2> */}
				<div className="cards">

				{filterView}
				</div>
			</div>
		);
	}
}

export default HighImpact
