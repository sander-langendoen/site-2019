import React from 'react'
import { Link} from 'gatsby'

import ProfilePic from './Global/ProfilePic'

const Profile = class extends React.Component {

	render() {

		return (

			<section className="section-profile">
				<div className="container">
					<h2>Over Sander Langendoen</h2>
					<ProfilePic />
					<h3>Freelance (UI) front-end voor jouw project</h3>
					<p>Ik realiseer de HTML, CSS, Javascript (en soms PHP code) van websites of online applicaties. 
					Ik ben creatief, en heb oog voor design. Hoe mensen mij verder noemen?</p>
					
					<p>Je vindt hier meer &nbsp;
                        <Link to="/over-mij">
                          over mij
                        </Link>.
                    </p>
                    <p>Of neem &nbsp;
                        <Link to="/contact">contact</Link> met me op.
                    </p>
				</div>
			</section>
		)
	}

}

export default Profile