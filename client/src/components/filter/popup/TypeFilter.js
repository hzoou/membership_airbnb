import React, { useState } from 'react';
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


export default () => {
    const valueList = [];
    const setValueList = [];

    const TypeList = [
        { name: '집 전체' },
        { name: '개인실' },
        { name: '호텔 객실' },
        { name: '다인실' },
    ];

    const typeFilter = TypeList.map((type, index) => {
        const [ value, setValue ] = useState(0);

        valueList.push(value);
        setValueList.push(setValue);

        return (
            <CheckBoxContainer key={index}>{type.name}
                <CheckBox type="checkbox" />
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