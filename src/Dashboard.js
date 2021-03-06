import React,{Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import StatsContainer from './components/homepage/StatsContainer'
import Featured from './components/homepage/Featured'
import img from './assets/Homepage/Homepage_illustration.png'
import badge from './assets/Homepage/Artboard_12x.png'

const Dashboard = ({ props }) => {
	
	return (
		<Fragment>
			<div className="header">
				<div className="header_left">
					<h1>Donate with high impact.</h1>
					<h6>Donate your clothes to local charities you trust in Toronto.</h6>
					<div className="cta_">
						<NavLink to="/all" className="button">Find a charity</NavLink>
						<NavLink to="/" className="button">Locate a bin near me</NavLink>
					</div>
				</div>
				<div className="header_right">
					<img src={img } alt="cartoon woman carrying a box of clothing to donate" />
				</div>
			</div>

			<div className="stats wrapper">
				<StatsContainer />

			<div className="featured">
				<h4>Featured Charities</h4>
				<h6>Featured charities are the top four charities with the least funding from the government.</h6>
					<Featured props={props}/>
			</div>
			</div>
			
			<div className="section">
				<div className="single_left">
					<h6>Certified & Verified Charities</h6>
					<p>Charities on the Second Life website are organizations that have been confirmed through the Government of Canada website’s list of charities.
						<br/>
					Learn more on how we ensure the information provided on our site is verified.
				</p>
				<NavLink to="/about" className="button">Learn More</NavLink>
				</div>
				<div className="single_right">
					<img src={ badge} alt="checkmark with a circle" />
				</div>
			</div>
		</Fragment>
	)
}

export default Dashboard
