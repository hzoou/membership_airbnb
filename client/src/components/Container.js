import React from 'react';
import styled from 'styled-components';
import RoomCard from "./container/RoomCard";

const ContainerDiv = styled.div`
    margin-left: 82px;
    margin-right: 82px;
`;

export default () => {
    return (
        <ContainerDiv>
            <RoomCard />
        </ContainerDiv>
    )
};