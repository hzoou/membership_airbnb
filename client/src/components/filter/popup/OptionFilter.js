import React, { useState, useEffect } from 'react';
import styled from "styled-components";

const Title = styled.div`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 20px;
    
    &:after {
        content: '침실과 침대';
    }
`;

const Option = styled.div`
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
    const [ bed, setBed ] = useState(state.bed);
    const [ bedroom, setBedroom ] = useState(state.bedroom);
    const [ bathroom, setBathroom ] = useState(state.bathroom);


    const optionsList = [
        { id: 'bed', name: '침대 수' },
        { id: 'bedroom', name: '침실 수' },
        { id: 'bathroom', name: '욕실 수' }
    ];

    const IsValueUnderZero = () => {
        const buttons = document.querySelectorAll('.minus');
        const options = document.querySelectorAll('.option');
        options.forEach((option, i) => {
            if (option.textContent <= 0) buttons[i].setAttribute('disabled', true);
            else buttons[i].removeAttribute('disabled');
        });
    };

    const onChangePlusValue = (index) => {
        if (!index) return setBed(bed + 1);
        if (index === 1) return setBedroom(bedroom + 1);
        return setBathroom(bathroom + 1);
    };

    const onChangeMinusValue = (index) => {
        if (!index) return setBed(bed - 1);
        if (index === 1) return setBedroom(bedroom - 1);
        return  setBathroom(bathroom - 1);
    };

    const onChangeOptionValue = () => {
        setState({ bed, bedroom, bathroom })
    };

    const initState = () => {
        setBed(state.bed);
        setBedroom(state.bedroom);
        setBathroom(state.bathroom);
    };

    const getOptionValue = (index) => {
        if (!index) return bed;
        if (index === 1) return bedroom;
        return bathroom;
    };

    useEffect(IsValueUnderZero);
    useEffect(onChangeOptionValue, [ bed, bedroom, bathroom ]);
    useEffect(initState, [ state ]);

    const optionFilter = optionsList.map((option, index) => {
        return (
            <Option key={index}>
                <Key>{option.name}</Key>
                <ButtonDiv>
                    <Button className="minus" onClick={() => onChangeMinusValue(index)}>-</Button>
                    <Value><span className="option" id={option.id}>{getOptionValue(index)}</span>+</Value>
                    <Button onClick={() => onChangePlusValue(index)}>+</Button>
                </ButtonDiv>
            </Option>
        )
    });

    return (
        <>
            <Title />
            {optionFilter}
        </>
    )
};