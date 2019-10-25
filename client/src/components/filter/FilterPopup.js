import React from 'react';
import styled from "styled-components";

const PopUpDiv = styled.div`
    position: absolute;
    top: 60px;
    height: fit-content;
    min-width: 300px;
    background: white;
    border: 1px solid #CCCCCC;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 0px 10px 0px #e1e1e1;
    font-size: 13px;
`;

const PopupButton = styled.div`
    display: flex;
    border-top: 1px solid #CCCCCC;
    padding-top: 20px;
    margin-top: 20px;
`;

const Remove = styled.div`
    cursor: pointer;  
`;

const Save = styled.div`
    margin-left: auto;
    font-weight: 700;
    color: #398387;
    cursor: pointer;  
`;

export default ({ setClicked, state, setState, index, clickedIndex, Popup }) => {
    const isClicked = () => clickedIndex === index;

    const setInitDateState = () => {
        setState({ checkIn: null, checkOut: null });
    };

    const setInitGuestState = () => {
        setState({ adult: 0, child: 0 });
    };

    const setInitTypeState = () => {
        setState({ 0: false, 1: false, 2: false, 3: false });
    };

    const setInitPriceState = () => {
        setState({ minPrice: 10000, maxPrice: 300000 });
    };

    const setInitOptionState = () => {
        setState({ bed: 0, bedroom: 0, bathroom: 0 });
    };

    const initState = () => {
        if (!index) return setInitDateState();
        if (index === 1) return setInitGuestState();
        if (index === 2) return setInitTypeState();
        if (index === 3) return setInitPriceState();
        return setInitOptionState();
    };

    const saveState = () => {
        setClicked(-1);
    };

    return ( !isClicked() ? <></> :
        <PopUpDiv>
            <Popup state={state} setState={setState} />
            <PopupButton>
                <Remove onClick={initState}>지우기</Remove>
                <Save onClick={saveState}>저장</Save>
            </PopupButton>
        </PopUpDiv>
    )
};