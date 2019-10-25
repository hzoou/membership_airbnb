import React, { useState } from 'react';
import styled from "styled-components";

import FilterButton from "./FilterButton";
import FilterPopup from "./FilterPopup";

import DateFilter from "./popup/DateFilter";
import GuestFilter from "./popup/GuestFilter";
import TypeFilter from "./popup/TypeFilter";
import PriceFilter from "./popup/PriceFilter";
import OptionFilter from "./popup/OptionFilter";

const FilterBar = styled.div`
    margin: auto 0 auto 10px;
`;

export default () => {
    const [ clickedIndex, setClickedIndex ] = useState(-1);
    const [ date, setDate ] = useState({ startDate: null, endDate: null });
    const [ guest, setGuest ] = useState({ adult: 0, child: 0 });
    const [ type, setType ] = useState({ 0: false, 1: false, 2: false, 3: false });
    const [ price, setPrice ] = useState({ minPrice: 10000, maxPrice: 300000 });
    const [ option, setOption ] = useState({ bed: 0, bedroom: 0, bathroom: 0 });

    const filterList = {
        date: { Popup: DateFilter, state: date, setState: setDate },
        guest: { Popup: GuestFilter, state: guest, setState: setGuest },
        type: { Popup: TypeFilter, state: type, setState: setType },
        price: { Popup: PriceFilter, state: price, setState: setPrice },
        others: { Popup: OptionFilter, state: option, setState: setOption }
    };

    const setClickedButton = (index) => {
        setClickedIndex(clickedIndex === index ? -1 : index);
    };

    const filters = Object.values(filterList).map((filter, index) => {
        return (
            <FilterBar key={index}>
                <FilterButton state={filter.state} index={index} clickedIndex={clickedIndex} onClick={setClickedButton} />
                <FilterPopup setClicked={setClickedIndex} state={filter.state} setState={filter.setState} index={index} clickedIndex={clickedIndex} Popup={filter.Popup} />
            </FilterBar>
        )
    });

    return (
        <>
            {filters}
        </>
    )
};
