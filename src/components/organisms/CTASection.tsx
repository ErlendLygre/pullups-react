import React, { useState } from 'react'
import styled from 'styled-components'
import H1 from '../atoms/H1'
import Button from '../atoms/Button'
import SecondaryButton from '../atoms/SecondaryButton'


const CTAContainer = styled.div`
    width: 100%;
    height: 280px;
    display: flex;
`

const CTAButtonSection = styled.div`
    flex: 1;
    height: 100%;
    padding: 40px;
    background-color: #112133;
`

const CTAVideoSection = styled.div`
    display: flex;
    align-items: center;
    width: 50vw;
    justify-content: space-around;
    width: 50%;
    flex-grow: 0;
    background-color: rgba(255, 255, 255, 0.1);
    @media (max-width: 600px) {
        display: none;
    }
`

const CTAButton = styled(Button)`
    min-width: auto;
    margin-right: 10px;
`

const CTASecondaryButton = styled(SecondaryButton)`
    min-width: 200px;
`


const H1NoMargin = styled(H1)`
    margin: 0 0 40px 0;
`

const CTASection = () => {
    
    return (
        <CTAContainer>
            <CTAButtonSection>
                <H1NoMargin>Finn en treningspark i kartet over</H1NoMargin>
                <CTAButton>Legg til ny park</CTAButton>
                <CTASecondaryButton>Om oss</CTASecondaryButton>
            </CTAButtonSection>
            <CTAVideoSection>
                <video width="100%" height="240" autoPlay loop>
                    <source src="https://media.giphy.com/media/L11tyiOvIf704T4gHI/giphy.mp4" type="video/mp4"/>
                </video>
            </CTAVideoSection>
        </CTAContainer>
    )
}

export default CTASection