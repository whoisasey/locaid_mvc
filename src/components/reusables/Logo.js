import desktop from '../../assets/SecondLife_LOGO/logo_desktop.png'
import mobile from '../../assets/SecondLife_LOGO/logo_mobile.png'

export const Desktop = () => {
	return (
		<div className="logo_desktop">
		<img src={desktop} alt="Second Life Logo" />
		</div>
	)
}

export const Mobile = () => {
	return (
		<div className="logo_mobile">
		<img src={ mobile} alt="Second Life Logo" />
		</div>
	)
}