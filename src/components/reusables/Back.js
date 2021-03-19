import { NavLink, Link } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Icon, InlineIcon } from '@iconify/react';
import bxChevronLeft from '@iconify-icons/bx/bx-chevron-left';


const Back = () => {
	let history = useHistory()

	
	return (
		<button onClick={() => { history.goBack() }} className="back_btn">
			<Icon icon={bxChevronLeft} />
			<p>Back</p>
		</button>
	)
}

export default Back
