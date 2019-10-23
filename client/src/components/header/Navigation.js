import React from 'react';
import styled from "styled-components";

const Navigation = styled.div`
    height: 80px;
    display: flex;
    align-items: center;
    margin-left: auto;
    margin-right: 20px;
    font-size: 14px;
    font-weight: 600;
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

const Login = styled.a`
    color: #484848;
    text-decoration: none;
`;

export default () => {
    return (
        <Navigation>
            <NavItem>
                <span>호스트가 되어보세요</span>
            </NavItem>
            <NavItem>
                <span>도움말</span>
            </NavItem>
            <NavItem>
                <span><Login href="http://localhost:8080/api/login">로그인</Login></span>
            </NavItem>
        </Navigation>
    )
};