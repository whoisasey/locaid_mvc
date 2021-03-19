import React, { Fragment } from 'react'
import Back from '../reusables/Back'
import { SingleHeader, SingleInfo, SingleAbout, SingleFinance, SingleContact, SingleGallery, SingleServices, SingleItems } from './SingleComponents'
import HBar from '../reusables/HBar'
require('dotenv').config()

const SinglePage = (props) => {
	const slug = props.match.params.slug;

	const data = props.data;

	const page = data.filter((single) => {
		if (single.slug === slug) {
			return single;
		} else {
			return null;
		}
	});

	const single = page[0];

	if (single === undefined) {
		return null;
	} else {
		const { name,  charity_no, summary, mission, vision, services,  expenses, } = single;

		const { charitable_programs, fundraising, gifts, management_admin, other } = expenses;
		const total = charitable_programs + fundraising + gifts + management_admin + other;
		const charitable_percent = Math.ceil((charitable_programs / total) * 100)

		return (
			<Fragment>
				<Back />
			<div className="single">
				<div className="single wrapper">
					<SingleHeader name={name} charity_no={charity_no}/>
					</div>
						<HBar />
					<SingleAbout summary={summary}/>
					
					<SingleInfo vision={vision} mission={mission} />

					<SingleGallery props={single} />
					
					<SingleServices props={services} />

					<SingleItems props={single} />


					<SingleFinance props={charitable_percent} />
					
					<SingleContact props={single}/>

				</div>
				</Fragment>
		);
	}
}

export default SinglePage
