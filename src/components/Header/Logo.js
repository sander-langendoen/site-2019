import React from 'react'
import logo from '../../img/logo.svg'


import styled from 'styled-components'


const logoMaxWidth = "460px"


const HeaderLogo = styled.div`
	max-width: ${props => props.maxWidth || "300px"}
	width: 100%
`;


const Logo = class extends React.Component {
 
 	render() {
        return (

	        <HeaderLogo title="Logo" maxWidth={logoMaxWidth}>
	       		
	       		<a href="/" title="Link naar homepage">
		       		<img src={logo} alt="logo sanderlangendoen.nl" />
		       	</a>


	        </HeaderLogo>

		)
    }
}

export default Logo