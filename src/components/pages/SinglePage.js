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
		const { summary, mission, vision, services, image_gallery } = single;


		return (
			<div className="wrapper">
			<div className="single">
				{/* <div className="single wrapper"> */}
						<SingleHeader props={ single}/>
					{/* </div> */}
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
		);
	}
}

export default SinglePage
