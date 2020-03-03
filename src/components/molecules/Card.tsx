import React from 'react'
import styled from 'styled-components'

const CardContainer = styled.div`
    border-radius: 5px;
    background-color: white;
    margin: 10px;
    flex-basis: fit-content;
    padding: 15px;
`

const CardCity = styled.p`
    color: #112133;
`

const CardLocation = styled.h3`
    
`

const CardDescription = styled.p`
    max-width: 300px;
`

interface CardProps {
    description: string;
    city: string;
    location: string;
}

export default function Card({description, city, location}: CardProps) {
    return (
        <CardContainer>
            <CardCity>{city}</CardCity>
            <CardLocation>{location}</CardLocation>
            <CardDescription>{description}</CardDescription>
        </CardContainer>
    )
}
