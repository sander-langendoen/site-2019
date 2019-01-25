import React from 'react'
import profilepic from '../../img/sanderlangendoen-bw-600x667.jpg'

// import styled from 'styled-components'


// const logoMaxWidth = "460px"


// const HeaderLogo = styled.div`
// 	max-width: ${props => props.maxWidth || "300px"}
// 	width: 100%
// `;


const ProfilePic = class extends React.Component {
 
 	render() {
        return (

        	<div className="profile-pic">
		        	
		       	<img src={profilepic} alt="profielfoto sanderlangendoen" />
                    
		    </div>

		)
    }
}

export default ProfilePic