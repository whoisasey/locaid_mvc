import { Fragment } from 'react';
import { SingleHeader, SingleInfo, SingleAbout, SingleFinance, SingleContact, SingleGallery, SingleServices, SingleItems } from './SingleComponents'
import { HBar } from '../reusables/HBar'
require('dotenv').config()

const SinglePage = (props) => {
// 	const images = [
//   'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
//   'https://images.unsplash.com/photo-1470341223622-1019832be824?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2288&q=80',
//   'https://images.unsplash.com/photo-1448630360428-65456885c650?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2094&q=80',
//   'https://images.unsplash.com/photo-1534161308652-fdfcf10f62c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2174&q=80'
// ]

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
						{summary && <SingleAbout summary={summary} />}
					
						{<SingleInfo vision={vision} mission={mission} />}

					{image_gallery &&<SingleGallery props={single} />}
					
					{services && <SingleServices props={services} />}

					<SingleItems props={single} />

					<SingleFinance props={single} />
					
						<SingleContact props={single} />
						
						{/* <Slider slides={images}/> */}
				</div>
				</div>
				</Fragment>
		);
	}
}

export default SinglePage
