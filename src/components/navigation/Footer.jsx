import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    align-items: center;
    background-color: var(--primary-dark-4);
    display: flex;
    min-height: 30px;
    justify-content: center;
`

const Header = styled.h6`
    color: var(--gray-light-4);
    font-size: 12px;
    margin: 0;
`

function Footer() {
    console.log((new Date()).getYear());
    return (
        <StyledFooter>
            <Header>©{(new Date()).getFullYear()} Juan Diego Barrios  -    (+57) 300 514 2886   -   jdbarrios36@gmail.com</Header>
        </StyledFooter>
    );
}

export default Footer;