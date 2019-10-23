import React, { useState } from 'react';
import styled from "styled-components";

const FilterBtn = (props) => {
    const [ isSelected, setSelected ] = useState(false);

    const Filter = styled.button`
        height: 30px;
        padding: 0 12px;
        background: ${isSelected ? '#388085' : 'white'};
        border: 1px solid ${isSelected ? '#388085' : '#F2F2F2'};
        border-radius: 3px;
        color: ${isSelected ? 'white' : '#313131'};
        cursor: pointer;
        outline: none;
        font-size: 13px;
        
        &:hover {
            background: ${isSelected ? '#388085' : '#F2F2F2'};
        }  
    `;

    const clickedButton = () => setSelected(!isSelected);

    return (
        <Filter id={props.id} onClick={clickedButton}>{props.value}</Filter>
    )
};

export default FilterBtn;