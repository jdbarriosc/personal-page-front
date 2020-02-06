import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Navbar = styled.nav`
    align-items: center;
    background-color: white;
    padding: 0px 10%;
    box-shadow: 0 0 8px var(--gray);
    display: grid;
    grid-template-columns: auto minmax(0px, 1300px) auto;
    height: min-content;
    z-index: 1;
`

const NavbarContent = styled.div`
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    grid-column: 2;
    height: min-content;
    width: 100%;
`

const HomeLink = styled(NavLink)`
    margin-left: 30px;
    h2{
        color: black;
        font-weight: bold;
        font-size: 40px;
        margin:0px;
    }
    text-decoration: none;

`

const LinkContainer = styled.div`
    align-items: center;
    display: flex;
    height: 80px;
    margin-left: auto;
`

const NavbarLinks = styled(NavLink)`
    color: black;
    font-weight: bold;
    font-size: 25px;
    line-height: 50px;
    position: relative;
    text-decoration: none;
    margin: 0 25px;
`

function NavigationBar() {
    return (
        <Navbar>
            <NavbarContent>
                <HomeLink exact to='/'>
                    <h2>jdbarrios.com</h2>
                </HomeLink>
                <LinkContainer>
                    <NavbarLinks exact to='/future-users'>About me</NavbarLinks>
                    <NavbarLinks exact to='/users'>Projects</NavbarLinks>
                </LinkContainer>
            </NavbarContent>
        </Navbar>
    );
}

export default NavigationBar;