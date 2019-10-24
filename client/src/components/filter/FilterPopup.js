import React from 'react';
import styled from "styled-components";

const PopUp = styled.div`
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

export default (props) => {
    const removeState = () => {

    };

    const saveState = () => {

    };

    return ( !props.isClicked ? <></> :
        <PopUp>
            {props.popup}
            <PopupButton>
                <Remove onClick={removeState}>지우기</Remove>
                <Save onClick={saveState}>저장</Save>
            </PopupButton>
        </PopUp>
    )
};