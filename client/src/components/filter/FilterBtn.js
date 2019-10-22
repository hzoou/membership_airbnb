import React, { useState } from 'react';
import styled from "styled-components";

const FilterBtn = (props) => {
    const [ isClicked, setClicked ] = useState(false);

    const Filter = styled.button`
        height: 30px;
        padding: 0 12px;
        background: ${isClicked ? '#388085' : 'white'};
        border: 1px solid ${isClicked ? '#388085' : '#F2F2F2'};
        border-radius: 3px;
        color: ${isClicked ? 'white' : 'black'};
        cursor: pointer;
        outline: none;
        font-size: 13px;
        
        &:hover {
            background: ${isClicked ? '#388085' : '#F2F2F2'};
        }  
    `;

    const clickedButton = () => setClicked(!isClicked);

    return (
        <Filter id={props.id} onClick={clickedButton}>{props.value}</Filter>
    )
};

export default FilterBtn;