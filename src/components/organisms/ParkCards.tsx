import React from 'react'
import styled from 'styled-components'
import { Park } from '../../types'
import Card from '../molecules/Card'

const ParkCardsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 40px;
`

interface ParkCardProps {
    parks: Park[],
}

export default function ParkCards({parks}: ParkCardProps ) {

    const cards = parks.map(park => (
            <Card key={park.location} description={park.description} location={park.location} city={park.city}/>
        )
    )
    
    return (
        <ParkCardsContainer>
            {cards}
        </ParkCardsContainer>
    )
}
