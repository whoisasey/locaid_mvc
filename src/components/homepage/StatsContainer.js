import React, {Fragment} from 'react'


const StatsContainer = () => {
		const stats = [
		{
			value: "14M",
			label: "tonnes of clothing are thrown away annually"
		},
		{
			value: "84%",
			label: "of clothes ends up in landfills"
		},
		{
			value: "90%",
			label: "of clothing donations end up with textile recyclers"
			},
			{
				value: "##",
				label: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum, neque!"
		}
		]
	
	return (
		<Fragment>
				<h3>Does 100% of your clothing donation go to charity?</h3>
				<div className="statistics">
				{stats.map((el, index) => {
					return (
						<div className="statistic" key={index}>
							<div className="value"><strong>{el.value}</strong></div>
							<div className="label">{ el.label}</div>
						</div>
					)
				})}
				</div>
		</Fragment>
	)
}

export default StatsContainer
