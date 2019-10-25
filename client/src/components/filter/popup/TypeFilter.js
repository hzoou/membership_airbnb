import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const CheckBoxContainer = styled.label`
    display: block;
    position: relative;
    padding-left: 35px;
    margin-bottom: 15px;
    cursor: pointer;
    line-height: 20px;
    
    &:hover > input ~ span {
        background-color: #ccc;
    }
    
    & > input:checked ~ span {
        background-color: #388085;
    }
`;

const CheckBox = styled.input.attrs(() => ({
    type: "checkbox",
}))`
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;
    
    &:checked ~ span:after {
        display: block;
    }
`;

const CheckMark = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    border-radius: 3px;
    background-color: #eee;
    
    &:after {
        content: "";
        position: absolute;
        display: none;
        left: 8px;
        top: 3px;
        width: 3px;
        height: 10px;
        border: solid white;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
    }
`;

export default ({ state, setState }) => {
    const [ allRoom, setAllRoom ] = useState(state[0]);
    const [ privateRoom, setPrivateRoom ] = useState(state[1]);
    const [ guestRoom, setGuestRoom ] = useState(state[2]);
    const [ sharedRoom, setSharedRoom ] = useState(state[3]);

    const TypeList = [
        { name: '집 전체' },
        { name: '개인실' },
        { name: '호텔 객실' },
        { name: '다인실' },
    ];

    const clickCheckBox = (index) => {
        if (!index) return setAllRoom(!allRoom);
        if (index === 1) return setPrivateRoom(!privateRoom);
        if (index === 2) return setGuestRoom(!guestRoom);
        return setSharedRoom(!sharedRoom);
    };

    const onChangeState = () => {
        setState({ 0: allRoom, 1: privateRoom, 2: guestRoom, 3: sharedRoom });
    };

    const initState = () => {
        setAllRoom(state[0]);
        setPrivateRoom(state[1]);
        setGuestRoom(state[2]);
        setSharedRoom(state[3]);
    };

    useEffect(onChangeState, [ allRoom, privateRoom, guestRoom, sharedRoom ]);
    useEffect(initState, [ state ]);

    const typeFilter = TypeList.map((type, index) => {
        return (
            <CheckBoxContainer key={index}>{type.name}
                <CheckBox id={index} type="checkbox" checked={state[index]} onChange={() => clickCheckBox(index)} />
                <CheckMark />
            </CheckBoxContainer>
        )
    });

    return (
        <>
            {typeFilter}
        </>
    )
};