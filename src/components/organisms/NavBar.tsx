import React, { useState } from 'react'
import { Logo } from '../atoms/Logo'
import { NavLinks } from '../molecules/NavLinks'
import { NavItem} from '../../types'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 50px;
    @media(max-width: 500px) {
        justify-content: center;
    } 
`

export const NavBar = () => {

    const [navItems] = useState<NavItem[]>(
        [
            { text: 'Vis parkene', location: '/' },
            { text: 'Legg til park', location: '/create-park' },
            { text: 'Om oss', location: '#' }
        ]
    )
            
    return(
        <Header>
            <Link to={"/"}>
                <Logo>PULLUPS.NO</Logo>
            </Link> 
             
            <NavLinks navitems={navItems} />
        </Header>
    ) 
}