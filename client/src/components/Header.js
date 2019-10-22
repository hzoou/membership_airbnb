import React from 'react';
import styled from 'styled-components';
import logo from '../img/airbnb-logo.ico';

import { fetchAPI } from "../util/utils";

const HeaderDiv = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    background: #fff;
    color: #484848;
    border-bottom: 1px solid #e4e4e4;
`;

const Logo = styled.img`
    padding: 24px;
    width: 34px;
    height: 34px;
`;

const Nav = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 20px;
    font-size: 14px;
    font: 600 14px system-ui;
`;

const NavItem = styled.div`
    height: -webkit-fill-available;
    line-height: 80px;
    margin-right: 25px;
    
    &:hover {
        border-bottom: 3px solid #b8b8b8;
        cursor: pointer;
    }
`;

const SearchIcon = styled.svg`
    width: 14px;
    height: 14px;
    fill: #6e6e6e;
    position: relative;
    top: 2px;
`;

const SearchBar = styled.div`
    height: 40px
    width: 460px;
    border: 1px solid #EBEBEB;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-align: center;
`;

const SearchInput = styled.input`
    border: 0;
    height: 38px;
    width: 400px;
    line-height: 48px;
    font-size: 13px;
    font-weight: 500;
    outline: none;
    padding-left: 15px;
`;

const Login = styled.a`
    color: #484848;
    text-decoration: none;
`;

const Header = () => {
    const loginToGoogle = async () => {
        const result = await fetchAPI('/api/login', 'GET');
        console.log(result)
    };

    return (
        <HeaderDiv>
            <div><Logo src={logo} /></div>
            <SearchBar>
                <SearchIcon viewBox="0 0 16 16" role="presentation" aria-hidden="true" focusable="false" >
                        <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path>
                </SearchIcon>
                <SearchInput type="text" placeholder="서울숲에 가보는건 어떠세요?" />
            </SearchBar>
            <Nav>
                <NavItem>
                    <span>호스트가 되어보세요</span>
                </NavItem>
                <NavItem>
                    <span>도움말</span>
                </NavItem>
                <NavItem>
                    <span><Login href="http://localhost:8080/api/login">로그인</Login></span>
                </NavItem>
            </Nav>
        </HeaderDiv>
    );
};

export default Header;