import React, { useState, useEffect } from 'react';
import styled from "styled-components";

import { $$ } from '../../../util/utils';

const Title = styled.div`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;
    
    &:after {
        content: '침실과 침대';
    }
`;

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

    const optionsList = [
        { id: 'bed', name: '침대 수' },
        { id: 'bedroom', name: '침실 수' },
        { id: 'bathroom', name: '욕실 수' }
    ];

    const IsValueUnderZero = () => {
        const buttons = $$('.minus');
        valueList.forEach((value, i) => {
            if (value <= 0) buttons[i].setAttribute('disabled', true);
            else buttons[i].removeAttribute('disabled');
        });
    };

    const onChangePlusValue = (i) => {
        return setValueList[i](valueList[i] + 1);
    };

    const onChangeMinusValue = (i) => {
        return setValueList[i](valueList[i] - 1);
    };

    useEffect(IsValueUnderZero);

    const optionFilter = optionsList.map((option, index) => {
        const [ value, setValue ] = useState(0);

        valueList.push(value);
        setValueList.push(setValue);

        return (
            <MenuList key={index}>
                <Key>{option.name}</Key>
                <ButtonDiv>
                    <Button className="minus" onClick={() => onChangeMinusValue(index)}>-</Button>
                    <Value><span>{value}</span>+</Value>
                    <Button onClick={() => onChangePlusValue(index)}>+</Button>
                </ButtonDiv>
            </MenuList>
        )
    });

    return (
        <>
            <Title />
            {optionFilter}
        </>
    )
};