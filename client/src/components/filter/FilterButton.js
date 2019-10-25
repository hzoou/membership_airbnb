import React from 'react';
import styled from "styled-components";
import moment from "moment";

export default ({ state, index, clickedIndex, onClick }) => {
    const originLabel = [ '날짜', '인원', '숙소 유형', '가격', '필터 추가하기' ];

    const getDateFilterLabel = () => {
        const startDate = !state.startDate ? null : moment(state.startDate).format('MM월 DD일');
        const endDate = !state.endDate ? null : moment(state.endDate).format('MM월 DD일');
        if (startDate && endDate) return `${startDate} - ${endDate}`;
        if (startDate) return `${startDate} - 체크아웃`;
        if (endDate) return `체크인 - ${endDate}`;
        return originLabel[0];
    };

    const getGuestFilterLabel = () => {
        const adult = state.adult;
        const child = state.child;
        return !(adult + child) ? originLabel[1] : `게스트 ${adult + child}명` ;
    };

    const getTypeFilterLabel = () => {
        const number = Object.values(state).reduce((acc, cur) => { return acc + (cur === true) }, 0);
        return !number ? originLabel[2] : `숙소 유형 ・ ${number}`;
    };

    const getPriceFilterLabel = () => {
        const minPrice = state.minPrice;
        const maxPrice = state.maxPrice;
        if (minPrice <= 10000 && maxPrice >= 300000) return originLabel[3];
        if (minPrice <= 10000) return `최대 ₩${maxPrice.toLocaleString()}`;
        if (maxPrice >= 300000) return `₩${minPrice.toLocaleString()}+`;
        return `₩${minPrice.toLocaleString()} - ₩${maxPrice.toLocaleString()}`;
    };

    const getOptionFilterLabel = () => {
        const number = Object.values(state).reduce((acc, cur) => { return acc + (cur !== 0) }, 0);
        return !number ? originLabel[4] : `필터 추가하기 ・ ${number}`;
    };

    const getLabel = () => {
        if (!index) return getDateFilterLabel();
        if (index === 1) return getGuestFilterLabel();
        if (index === 2) return getTypeFilterLabel();
        if (index === 3) return getPriceFilterLabel();
        return getOptionFilterLabel();
    };

    const label = getLabel();

    const isClicked = () => clickedIndex === index;

    const isSelected = () => {
        return label !== originLabel[index]
    };

    const Button = styled.button`
        height: 30px;
        padding: 0 12px;
        background: ${isClicked() || isSelected() ? '#388085' : 'white'};
        border: 1px solid ${isClicked() || isSelected() ? '#388085' : '#F2F2F2'};
        border-radius: 3px;
        color: ${isClicked() || isSelected() ? 'white' : '#313131'};
        cursor: pointer;
        outline: none;
        font-size: 13px;
        
        &:hover {
            background: ${isClicked() || isSelected() ? '#388085' : '#F2F2F2'};
        }
    `;

    const setClicked = () => {
        onClick(index);
    };

    return (
        <Button onClick={setClicked}>{label}</Button>
    )
};