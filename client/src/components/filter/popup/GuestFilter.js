import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { $$ } from '../../../util/utils';

const MenuList = styled.div`
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

export default () => {
    const valueList = [];
    const setValueList = [];

    const GuestList = [
        { id: 'adult', name: '성인' },
        { id: 'child', name: '어린이' }
    ];

    const IsValueUnderZero = () => {
        const buttons = $$('.minus');
        valueList.forEach((value, i) => {
           if (value <= 0) buttons[i].setAttribute('disabled', true);
           else buttons[i].removeAttribute('disabled');
        });
    };

    const isOnlyChild = () => {
        if (valueList[1] > 0 && valueList[0] === 0) setValueList[0](valueList[0] + 1);
    };

    const onChangePlusValue = (i) => {
        return setValueList[i](valueList[i] + 1);
    };

    const onChangeMinusValue = (i) => {
        return setValueList[i](valueList[i] - 1);
    };

    useEffect(IsValueUnderZero);
    useEffect(isOnlyChild);

    const guestFilter = GuestList.map((guest, index) => {
        const [ value, setValue ] = useState(0);

        valueList.push(value);
        setValueList.push(setValue);

        return (
            <MenuList key={index}>
                <Key>{guest.name}</Key>
                <ButtonDiv>
                    <Button className="minus" onClick={() => onChangeMinusValue(index)}>-</Button>
                    <Value><span id={guest.id}>{value}</span>+</Value>
                    <Button onClick={() => onChangePlusValue(index)}>+</Button>
                </ButtonDiv>
            </MenuList>
        )
    });

    return (
        <>
            {guestFilter}
        </>
    )
};