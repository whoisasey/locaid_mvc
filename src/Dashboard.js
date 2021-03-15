import React,{Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import StatsContainer from './components/homepage/StatsContainer'
import { Icon } from '@iconify/react';
import chevronThinDown from '@iconify-icons/entypo/chevron-thin-down';

const Dashboard = () => {

	return (
		<Fragment>
			<div className="header">
				<div className="header_left">
					<h1>Donate with high impact.</h1>
					<h4>Donate your clothes to charities you trust.</h4>
					<NavLink to="/all" className="button">Find a Trusted Charity</NavLink>
				</div>
				<div className="header_right">
					<img src="https://picsum.photos/500/400" alt="" />
				</div>
			</div>

					<Icon icon={chevronThinDown} />

			<div className="stats">
				<StatsContainer />
			</div>

			<div className="section">
				<p>The biggest concern with charities is transparency.
				Learn how we’re are making sure your 
				100% of donation goes to those in need.</p>
				<NavLink to="/" className="button">Learn More</NavLink>
			</div>
		</Fragment>
	)
}

export default Dashboard
