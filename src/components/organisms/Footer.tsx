import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.div`
    width: 100%;
    height: 100px;
    border-top: 1px dashed snow;
    justify-content: center;
    display: flex;
    align-items: center;
    margin-top: 30px;
`

const Footer = () => {
    return (
        <FooterContainer>
            Laget av Erlend Tangeraas Lygre
        </FooterContainer>
    )
}

export default Footer