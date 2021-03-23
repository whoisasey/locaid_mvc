import React,{Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import StatsContainer from './components/homepage/StatsContainer'
import Featured from './components/pages/Featured'
import img from './assets/Homepage/Homepage_illustration.png'

const Dashboard = ({ props }) => {
	
	return (
		<Fragment>
			<div className="header">
				<div className="header_left">
					<h1>Donate with high impact.</h1>
					<h6>Donate your clothes to charities you trust.</h6>
					<NavLink to="/all" className="button">Find a Trusted Charity</NavLink>
				</div>
				<div className="header_right">
					<img src={img } alt="cartoon woman carrying a box of clothing to donate" />
				</div>
			</div>

			<div className="stats wrapper">
				<StatsContainer />

			<div className="section">
				<p>The biggest concern with charities is transparency.
				Learn how we’re are making sure your 
				100% of donation goes to those in need.</p>
				<NavLink to="/about" className="button">Learn More</NavLink>
			</div>

				<h3>Featured Charities</h3>
				{/* <h6>These highlighted charities receive the least funding </h6> */}
			<div className="featured">
					<Featured props={props}/>
				 </div>
			</div>
		</Fragment>
	)
}

export default Dashboard
