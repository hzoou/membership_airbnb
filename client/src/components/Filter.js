import React from 'react';
import styled from 'styled-components';
import DateFilter from "./filter/DateFilter";
import GuestFilter from "./filter/GuestFilter";
import TypeFilter from "./filter/TypeFilter";
import PriceFilter from "./filter/PriceFilter";
import EtcFilter from "./filter/EtcFilter";

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

const FilterBar = styled.div`
    margin: auto 0 auto 10px;
`;

const Filter = () => {
    return (
        <FilterContainer>
            <FilterDiv>
                <FilterBar>
                    <DateFilter />
                </FilterBar>
                <FilterBar>
                    <GuestFilter />
                </FilterBar>
                <FilterBar>
                    <TypeFilter />
                </FilterBar>
                <FilterBar>
                    <PriceFilter />
                </FilterBar>
                <FilterBar>
                    <EtcFilter />
                </FilterBar>
            </FilterDiv>
        </FilterContainer>
    )
};

export default Filter;