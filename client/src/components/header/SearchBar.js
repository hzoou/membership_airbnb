import React from 'react';
import styled from "styled-components";

import SearchIcon from "./SearchIcon";

const SearchBar = styled.div`
    height: 40px
    width: 460px;
    border: 1px solid #EBEBEB;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    text-align: center;
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
            <SearchIcon />
            <SearchInput />
        </SearchBar>
    )
};