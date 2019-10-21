import React from 'react';
import styled from 'styled-components';

const FilterDiv = styled.div`
    height: 50px;
    display: flex;
    padding: 0 72px;
    border-bottom: 1px solid #e4e4e4;
`;

const FilterBar = styled.button`
    height: 30px;
    padding: 0 10px;
    margin: auto 0 auto 10px;
    background: white;
    border: 1px solid #F2F2F2;
    border-radius: 3px;
    cursor: pointer;
    outline: none;
    
    &:hover {
        background: #F2F2F2;
    }  
`;

const Filter = () => {
    return (
        <FilterDiv>
            <FilterBar>날짜</FilterBar>
            <FilterBar>인원</FilterBar>
            <FilterBar>숙소 유형</FilterBar>
            <FilterBar>가격</FilterBar>
            <FilterBar>필터 추가하기</FilterBar>
        </FilterDiv>
    )
};

export default Filter;