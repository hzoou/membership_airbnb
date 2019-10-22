import React from 'react';
import styled from 'styled-components';
import RoomCard from "./RoomCard";

const ContainerDiv = styled.div`
    margin-left: 82px;
`;

const Container = () => {
    return (
        <ContainerDiv>
            <RoomCard />
        </ContainerDiv>
    )
};

export default Container;