import React, { useState } from 'react';
import styled from "styled-components";

import FilterButton from "./FilterButton";
import FilterPopup from "./FilterPopup";

import DateFilter from "./popup/DateFilter";
import GuestFilter from "./popup/GuestFilter";
import TypeFilter from "./popup/TypeFilter";
import PriceFilter from "./popup/PriceFilter";

const FilterBar = styled.div`
    margin: auto 0 auto 10px;
`;

export default () => {
    const clickedList = [];
    const setClickedList = [];
    const selectedList = [];
    const setSelectedList = [];

    const filterList = [
        { name: '날짜', popup: <DateFilter /> },
        { name: '인원', popup: <GuestFilter /> },
        { name: '숙소 유형', popup: <TypeFilter /> },
        { name: '가격', popup: <PriceFilter /> },
        { name: '필터 추가하기' },
    ];

    const setFilterSelected = (key) => {
        return setSelectedList[key](!selectedList[key]);
    };

    const setButtonClicked = (key) => {
        setClickedList.forEach((setClicked, i) => {
            if (key === i) setClicked(!clickedList[i]);
            else setClicked(false);
        });
    };

    const setPopupClicked = (bool, key) => {
        if (!bool) setClickedList[key](false);
    };

    const filters = filterList.map((filter, index) => {
        const [ clicked, setClicked ] = useState(false);
        const [ selected, setSelected ] = useState(false);

        clickedList.push(clicked);
        setClickedList.push(setClicked);
        selectedList.push(selected);
        setSelectedList.push(setSelected);

        return (
            <FilterBar key={index}>
                <FilterButton isClicked={clicked} isSelected={selected} id={index} name={filter.name} onClick={setButtonClicked} />
                <FilterPopup isClicked={clicked} popup={filter.popup} id={index} onClick={setPopupClicked} />
            </FilterBar>
        )
    });

    return (
        <>
            {filters}
        </>
    )
};
