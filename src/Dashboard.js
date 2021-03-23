import React,{Fragment} from 'react'
import { NavLink } from 'react-router-dom'
import StatsContainer from './components/homepage/StatsContainer'
import img from './assets/Homepage/Homepage_illustration.png'

const Dashboard = () => {

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

					{/* <Icon icon={chevronThinDown} /> */}

			<div className="stats wrapper">
				<StatsContainer />

			<div className="section">
				<p>The biggest concern with charities is transparency.
				Learn how we’re are making sure your 
				100% of donation goes to those in need.</p>
				<NavLink to="/about" className="button">Learn More</NavLink>
			</div>

			{/* <div className="stats">
					<h3>Featured Charities</h3>
					GALLERY GOES HERE<br/>
				 Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum perferendis dicta aspernatur deleniti adipisci quasi odio. Mollitia deleniti itaque, quis molestias aliquam rem veritatis repudiandae modi cumque saepe impedit nostrum quasi perferendis facere eaque, libero architecto a assumenda obcaecati amet placeat eveniet dolorum non! Impedit omnis tempora iste voluptatibus labore eos quae pariatur delectus itaque nisi? Laborum debitis est impedit dolorem natus ipsa et, ipsam dolor temporibus reprehenderit aspernatur nulla enim vitae? Hic molestias quam neque magnam placeat obcaecati in accusantium! Magnam aspernatur saepe qui at illum sapiente officia dolores animi ratione rem hic repellat deserunt, quos nihil molestias? Accusantium!
				 </div> */}
			</div>
		</Fragment>
	)
}

export default Dashboard
