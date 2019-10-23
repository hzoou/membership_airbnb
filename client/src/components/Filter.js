import React from 'react';
import styled from 'styled-components';

import FilterElements from "./filter/FilterElements";

const FilterContainer = styled.div`
    height: 51px;
`;

const FilterDiv = styled.div`
    height: 50px;
    width: 100%;
    display: flex;
    position: fixed;
    top: 81px;
    z-index: 10;
    padding: 0 72px;
    background: white;
    border-bottom: 1px solid #e4e4e4;
`;

export default () => {
    return (
        <FilterContainer>
            <FilterDiv>
                <FilterElements/>
            </FilterDiv>
        </FilterContainer>
    )
};