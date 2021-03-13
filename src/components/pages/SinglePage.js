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
console.log(single)
		const { name, logo, charity_no, summary, mission, vision } = single
		// console.log(summary.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))))
		return (
			<div className="single">
				<img src={logo } alt={ `${name}'s Logo`}/>
				<h3>{name}</h3>
				<p>Charity/BN: {charity_no}</p>
				<p>{summary}</p>
				<Fragment>
					<h4>Mission</h4>
					<p>{mission }</p>
				</Fragment>
				<Fragment>
					<h4>Vision</h4>
					<p>{vision}</p>
				</Fragment>
			</div>
		);
	}
}

export default SinglePage
