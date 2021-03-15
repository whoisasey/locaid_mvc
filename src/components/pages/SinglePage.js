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
		const { name, logo, charity_no, summary, mission, vision, services, items_accepted_precovid, items_accepted_currently } = single;
		// console.log(services)
		return (
			<div className="single">
				<img src={logo} alt={`${name}'s Logo`} />
				
				<div className="single wrapper">
					<div className="single_header">
						<h3>{name}</h3>
						<strong>Charity/BN: {charity_no}</strong>
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
						
					{/* horizontal nav bar */}
					<hr/>
				</div>
					<div className="single_about">
						<h3>About</h3>
						<h6>{summary}</h6>
					</div>

				{/* gallery */}
					<div className="single_services">
					<h3>Services</h3>
					<ul>
						{services.map((el, index) => {
							return (
								<li key={ index}>{el}</li>
								)
						})}
					</ul>
				</div>
				
				<div className="single_items">
					<h3>Accepted Items</h3>
					<div>
						<div>
							{/* icons  */}
						</div>
						<ul>
							{items_accepted_precovid.map((el, index) => {
								return (
									<li key={index}>{el}</li>
								)
							})}
							{/* list of accepted items */}
						</ul>
					</div>
				</div>
				
			</div>
		);
	}
}

export default SinglePage
