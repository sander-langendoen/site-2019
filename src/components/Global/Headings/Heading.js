import React from "react"
import styled from 'styled-components'


const mainColor = 'red'
// const fontSize = '13rem'


const Title = styled.h1`
  color: ${props => props.color ||  "green"}
  font-family: WorkSans-Bold
  font-size: ${props => props.fontSize || '3rem'}
`;


const Heading = () => {
	
	return(

	    <Title color={mainColor}>Dit is de titel</Title>

	)
}

export default Heading