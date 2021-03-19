import {NavLink} from 'react-router-dom'
import { Icon, InlineIcon } from '@iconify/react';
import bxChevronLeft from '@iconify-icons/bx/bx-chevron-left';


const Back = () => {
	return (
		<NavLink to="/" className="back_btn">
			<Icon icon={bxChevronLeft} />
			<p>Back</p>
		</NavLink>
	)
}

export default Back
