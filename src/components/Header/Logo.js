import React from 'react'
import logo from '../../img/logo.svg'
import { Link } from 'gatsby'


import styled from 'styled-components'


const logoMaxWidth = "460px"


const HeaderLogo = styled.div`
	max-width: ${props => props.maxWidth || "300px"}
	width: 100%
`;


const Logo = class extends React.Component {
 
 	render() {
        return (

        	<div className="header-logo">
		        <HeaderLogo title="Logo" maxWidth={logoMaxWidth}>
		       		
		       		<Link to="/">
		       			<img src={logo} alt="logo sanderlangendoen.nl" />
                    </Link>
			       	
		        </HeaderLogo>
		    </div>

		)
    }
}

export default Logo