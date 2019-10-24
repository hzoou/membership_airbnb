import React from "react";
import styled from "styled-components";

const SearchIcon = styled.svg`
    width: 14px;
    height: 14px;
    fill: #6e6e6e;
    position: relative;
    top: 2px;
`;

export default () => {
    return (
        <SearchIcon viewBox="0 0 16 16">
            <path d="m2.5 7c0-2.5 2-4.5 4.5-4.5s4.5 2 4.5 4.5-2 4.5-4.5 4.5-4.5-2-4.5-4.5m13.1 6.9-2.8-2.9c.7-1.1 1.2-2.5 1.2-4 0-3.9-3.1-7-7-7s-7 3.1-7 7 3.1 7 7 7c1.5 0 2.9-.5 4-1.2l2.9 2.8c.2.3.5.4.9.4.3 0 .6-.1.8-.4.5-.5.5-1.2 0-1.7"></path>
        </SearchIcon>
    )
}