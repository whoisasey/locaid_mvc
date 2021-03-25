import { Fragment } from 'react';
import { SingleHeader, SingleInfo, SingleAbout, SingleFinance, SingleContact, SingleGallery, SingleServices, SingleItems } from './SingleComponents'

import {HBar} from '../reusables/HBar'
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
	
		const { summary, mission, vision, services, image_gallery } = single;

		return (
			<Fragment>
				<div className="single">
			<div className="wrapper">
						<SingleHeader props={single} />
			<div className="banner">
				<p>Current Covid Restrictions: <strong>{ single.item_accepted_currently}</strong></p>
				</div>
					<HBar />
					{summary && <SingleAbout summary={summary}/>}
					
				{<SingleInfo vision={vision} mission={mission} />}

					{image_gallery &&<SingleGallery props={single} />}
					
					{services && <SingleServices props={services} />}

					<SingleItems props={single} />

					<SingleFinance props={single} />
					
					<SingleContact props={single}/>
				</div>
				</div>
				</Fragment>
		);
	}
}

export default SinglePage
