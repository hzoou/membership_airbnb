import React from 'react';
import styled from "styled-components";

const SearchBar = styled.div`
    height: 40px
    width: 460px;
    border: 1px solid #EBEBEB;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-align: center;
`;

const SearchIcon = styled.svg`
    width: 14px;
    height: 14px;
    fill: #6e6e6e;
    position: relative;
    top: 2px;
`;

const SearchInput = styled.input.attrs(() => ({
    type: "text",
    placeholder: "서울숲에 가 보는 건 어떠세요?",
}))`
    border: 0;
    height: 38px;
    width: 400px;
    line-height: 48px;
    font-size: 13px;
    font-weight: 500;
    outline: none;
    padding-left: 15px;
`;

export default () => {
    return (
        <SearchBar>
            <SearchIcon viewBox="0 0 16 16">
                <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path>
            </SearchIcon>
            <SearchInput />
        </SearchBar>
    )
};