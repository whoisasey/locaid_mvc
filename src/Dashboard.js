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
					<h6>Donate your clothes to local charities you trust in Toronto.</h6>
					<NavLink to="/all" className="button">Find the closest charity near me</NavLink>
				</div>
				<div className="header_right">
					<img src={img } alt="cartoon woman carrying a box of clothing to donate" />
				</div>
			</div>

			<div className="stats wrapper">
				<StatsContainer />

			<div className="section">
				<p>Learn how we make sure your donation goes to those in need.</p>
				<NavLink to="/about" className="button">Learn More</NavLink>
			</div>

			<div className="featured">
				<h3>Featured Charities</h3>
				<h6>Featured charities are those in need of clothing and goods donations due to the lack of funding from the government.</h6>
					<Featured props={props}/>
				 </div>
			</div>
		</Fragment>
	)
}

export default Dashboard
