import React,{Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import { Icon } from '@iconify/react';
import chevronThinDown from '@iconify-icons/entypo/chevron-thin-down';
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
		}
	]

const Dashboard = () => {

	return (
		<Fragment>
			<div className="header">
				<h1>Donate with impact.</h1>
				<p>Donate your clothes to charities you trust.</p>
				<NavLink to="/all" className="ui button">Find a Trusted Charity</NavLink>
			</div>
			<Icon icon={chevronThinDown} />
			<h3>Does 100% of your donation go to charity?</h3>
			<div className="ui four statistics">

			{stats.map((el, index) => {
				return (
					<div className="statistic" key={index}>
						<div className="value"><strong>{el.value}</strong></div>
						<div className="label">{ el.label}</div>
					</div>
				)
			})}
			</div>
			<div className="section">
				<p>The biggest concern with charities is transparency.
				Learn how we’re are making sure your 
				100% of donation goes to those in need.</p>
				<button className="ui button">Learn More</button>
			</div>
		</Fragment>
	)
}

export default Dashboard
