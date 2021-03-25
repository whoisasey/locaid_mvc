
const StatsContainer = () => {
		const stats = [
		{
			value: "14M",
			label: "Tonnes of clothing are thrown away annually."
		},
		{
			value: "84%",
			label: "Of clothes ends up in landfills."
		},
		{
			value: "90%",
			label: "Of clothing donations end up with textile recyclers."
			}
		]
	
	return (
		<div className="single_section">
				<div className="single_left">
					<h5>Does 100% of your <span>clothing</span> donation go to charity?</h5>
				</div>
				<div className="statistics single_right">
				{stats.map((el, index) => {
					return (
						<div className="statistic" key={index}>
							<h6 className="value"><strong>{el.value}</strong></h6>
							<p className="label">{ el.label}</p>
						</div>
					)
				})}
				</div>
		</div>
	)
}

export default StatsContainer
