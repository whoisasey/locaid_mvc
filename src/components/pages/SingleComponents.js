export const SingleHeader = ({ name, charity_no}) => {
	return (
		<div className="single_header">
		<h3>{name}</h3>
	{/* horizontal nav bar */}
	<hr/>
		<strong>Charity/BN: {charity_no}</strong>
	</div>
)
}

export const SingleInfo = ({mission, vision }) => {
	return (
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
	)
}

export const SingleAbout = ({ summary}) => {
	return (
		<div className="single_about">
			<h3>About</h3>
			<h6>{summary}</h6>
		</div>
	)
}