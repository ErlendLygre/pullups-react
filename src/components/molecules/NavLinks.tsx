import React from 'react'
import styled from 'styled-components'
import { NavItem } from '../../types'
import { Link } from 'react-router-dom'

interface NavLinkProps {
    navitems: NavItem[];
}

const Nav = styled.nav`
    width: 350px;
    display: flex;
    justify-content: space-between;
`

export const NavLinks = ({navitems}: NavLinkProps) => {
        const links = navitems.map((item) => (
            <Link key={item.text} to={item.location}>{item.text}</Link>
        )
    )
    return (
        <Nav>{links}</Nav>
    )
}