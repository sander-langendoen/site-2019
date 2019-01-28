import React from 'react'

import ProfilePic from './Global/ProfilePic'

const Profile = class extends React.Component {

	render() {

		return (

			<section className="profile">
				<ProfilePic />
				<h3>Freelance (UI) front-end voor jouw project</h3>
				<p>Ik realiseer de HTML, CSS, Javascript (en soms PHP code) van websites of online applicaties. 
				Ik ben creatief, en heb oog voor design. Hoe mensen mij verder noemen?</p>
				<p>Je vindt hier meer &nbsp;<a href="/over-mij">over mij</a>.</p>
			</section>
		)
	}

}

export default Profile