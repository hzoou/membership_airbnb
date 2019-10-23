import React from 'react';
import styled from 'styled-components';

import logo from '../img/airbnb-logo.ico';
import SearchBar from "./header/SearchBar";
import Navigation from "./header/Navigation";

const HeaderContainer = styled.div`
    height: 86px;
`;

const HeaderDiv = styled.div`
    height: 80px;
    width: 100%;
    display: flex;
    position: fixed;
    top: 0;
    z-index: 10;
    align-items: center;
    background: white;
    color: #484848;
    border-bottom: 1px solid #e4e4e4;
`;

const Logo = styled.img`
    display: block;
    padding: 24px;
    width: 34px;
    height: 34px;
`;

const Header = () => {
    return (
        <HeaderContainer>
            <HeaderDiv>
                <Logo src={logo} />
                <SearchBar />
                <Navigation />
            </HeaderDiv>
        </HeaderContainer>
    );
};

export default Header;