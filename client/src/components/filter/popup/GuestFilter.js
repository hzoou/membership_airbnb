import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Guest = styled.div`
    display: flex;
    margin-bottom: 20px;
`;

const Key = styled.div`
    margin: auto 0;
`;

const ButtonDiv = styled.div`
    display: flex;
    margin-left: auto;
`;

const Button = styled.button`
    width: 32px;
    height: 32px;
    color: #398387;
    font-size: 18px;
    background: white;
    border: 1px solid;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    opacity: 1;
    
    &:disabled {
        opacity: 0.3;
        cursor: not-allowed;
    }
`;

const Value = styled.div`
    width: 18px;
    margin: auto 20px;
    text-align: center;
`;

export default ({ state, setState }) => {
    const [ adult, setAdult ] = useState(state.adult);
    const [ child, setChild ] = useState(state.child);

    const guestList = [
        { id: 'adult', name: '성인' },
        { id: 'child', name: '어린이' }
    ];

    const IsValueUnderZero = () => {
        const buttons = document.querySelectorAll('.minus');
        const guests = document.querySelectorAll('.guest');
        guests.forEach((guest, i) => {
           if (guest.textContent <= 0) buttons[i].setAttribute('disabled', true);
           else buttons[i].removeAttribute('disabled');
        });
    };

    const isOnlyChild = () => {
        if (child > 0 && adult === 0) setState({ adult: 1, child: 1 });
    };

    const onChangePlusValue = (index) => {
        if (!index) return setAdult(adult + 1);
        return setChild(child + 1);
    };

    const onChangeMinusValue = (index) => {
        if (!index) return setAdult(adult - 1);
        return setChild(child - 1);
    };

    const onChangeGuestValue = () => {
        setState({ adult, child })
    };

    const initState = () => {
        setAdult(state.adult);
        setChild(state.child);
    };

    useEffect(IsValueUnderZero);
    useEffect(isOnlyChild);
    useEffect(onChangeGuestValue, [ adult, child ]);
    useEffect(initState, [ state ]);

    const guestFilter = guestList.map((guest, index) => {
        return (
            <Guest key={index}>
                <Key>{guest.name}</Key>
                <ButtonDiv>
                    <Button className="minus" onClick={() => onChangeMinusValue(index)}>-</Button>
                    <Value><span className="guest" id={guest.id}>{ !index ? adult : child }</span>+</Value>
                    <Button onClick={() => onChangePlusValue(index)}>+</Button>
                </ButtonDiv>
            </Guest>
        )
    });

    return (
        <>
            {guestFilter}
        </>
    )
};