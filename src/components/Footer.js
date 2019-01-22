import React from 'react'

import FooterCol from '../components/Footer/Col'
import Colophon from '../components/Footer/Colophon'

const Footer = class extends React.Component {

	render() {

		return (

			<footer>

				<div className="container">
			
					<FooterCol />
					<FooterCol />
					<Colophon />
			
				</div>
			
			</footer>
		)
	}

}

export default Footer