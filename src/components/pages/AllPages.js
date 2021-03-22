import { NavLink } from 'react-router-dom';
import SingleCard from './SingleCard'
import Loader from '../reusables/Loader'

const AllPages = ({ toRender, search }) => {

	if (toRender === []) {
		return (
			<Loader />
			);
		} else {
		const allMapped = toRender.map(card => {
			return (
				<NavLink to={`/page/${card.slug}`} key={card._id} className="card">
					<SingleCard card={card} />
				</NavLink>
			);
		});

		return (
			<div className="wrapper">
				<h3>{search}</h3>
				<p>{`${toRender.length} items` }</p>
				{/* filter navigation */}
				<div className="cards">

					{allMapped}
				</div>
			</div>
		);
	}
}


export default AllPages