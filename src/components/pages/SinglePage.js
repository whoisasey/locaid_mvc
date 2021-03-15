import React, {Fragment} from 'react'

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
// console.log(single)
		const { name, logo, charity_no, summary, mission, vision } = single
		return (
			<div className="single">
				<img src={logo} alt={`${name}'s Logo`} />
				
				<div className="single wrapper">
					<div className="single_header">
						<h3>{name}</h3>
						<strong>Charity/BN: {charity_no}</strong>
						<h6>{summary}</h6>
					</div>
				
					<div className="single_info"> 
					<div className="segment">
						<h4>Mission</h4>
						<p>{mission }</p>
					</div>
					<div className="segment">
						<h4>Vision</h4>
						<p>{vision}</p>
						</div>
					</div>
						
					<div className="single_about">
						<h3>About</h3>

					</div>

					<div className="single_services">
						
					</div>
				</div>
				
			</div>
		);
	}
}

export default SinglePage
