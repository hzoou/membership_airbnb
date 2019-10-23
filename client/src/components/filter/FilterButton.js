import React from 'react';
import styled from "styled-components";

export default (props) => {
    const Button = styled.button`
        height: 30px;
        padding: 0 12px;
        background: ${props.isClicked || props.isSelected ? '#388085' : 'white'};
        border: 1px solid ${props.isClicked || props.isSelected ? '#388085' : '#F2F2F2'};
        border-radius: 3px;
        color: ${props.isClicked || props.isSelected ? 'white' : '#313131'};
        cursor: pointer;
        outline: none;
        font-size: 13px;
        
        &:hover {
            background: ${props.isClicked || props.isSelected ? '#388085' : '#F2F2F2'};
        }
    `;

    const setClicked = () => {
        props.onClick(props.id);
    };

    return (
        <Button onClick={setClicked} >{props.name}</Button>
    )
};