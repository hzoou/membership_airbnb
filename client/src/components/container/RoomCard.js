import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Star from "./Star";

const Content = styled.div`
    width: fit-content;
    margin: auto;
    text-align: center;
`;

const Error = styled.span`
    display: block;
    margin-top: 10px;
    color: #c00;
    font-weight: 700;
`;

const Card = styled.div`
    width: 800px;
    display: flex;
    padding: 5px;
    margin: 15px 0;
    border: 1px solid #EBEBEB;
    border-radius: 5px;
    cursor: pointer;
`;

const Thumbnail = styled.img`
    width: 300px;
    height: 200px;
    border-radius: 3px;
`;

const CardContent = styled.div`
    padding: 12px 16px;
    width: 100%;
`;

const Type = styled.div`
    margin-bottom: 7px;
    color: #767676;
    font-size: 12px;
    font-weight: 800;
`;

const Title = styled.div`
    margin-bottom: 5px;
    color: #484848;
    font-size: 18px;
    font-weight: 600;
`;

const Option = styled.div`
    margin-bottom: 5px;
    color: #484848;
    font-size: 14px;
    font-weight: 400;
`;

const Price = styled.div`
    width: fit-content;
    margin-left: auto;
    position: relative;
    top: 65px;
`;

const StarDiv = styled.div`
    width: 10px;
    height: 10px;
    display: inline;
    position: relative;
    top: 65px;
    font-size: 10px;
`;

export default () => {
    const [ rooms, setRoomData ] = useState([]);
    const [ error, setError ] = useState(null);

    const getAllRooms = async () => {
        try {
            const res = await fetch('/api/rooms');
            const result = await res.json();
            setRoomData(result.data);
        } catch (e) {
            setError(e);
        }
    };

    useEffect(() => { getAllRooms() },[]);

    const isLoading = (rooms == null);

    const renderRoom = () => {
        return ( isLoading ? <Content> 로딩 중입니다 😰 <br /> 조금만 기다려주세요 🙏🏻 </Content> : <div> {rooms.map((room) => {
            return <Card key={room.id}>
                <div>
                    <Thumbnail src={room.thumbnail} />
                </div>
                <CardContent>
                    <Type>{room.type}</Type>
                    <Title>{room.title}</Title>
                    <Option>인원 {room.guest}명 ・ 침대 {room.bed}개 ・ 침실 {room.bedroom}개 ・ 욕실 {room.bathroom}개</Option>
                    <Price>₩{(room.price).toLocaleString()}/박</Price>
                    <StarDiv><Star />{room.star}</StarDiv>
                </CardContent>
            </Card>
        })} </div> )
    };

    return ( error ? <Content> 에러가 발생했습니다 😰 <br /> 잠시 후에 다시 이용해주세요 🙏🏻 <br /> <Error> Error : {error.message} </Error> </Content> : <> {renderRoom()} </> );
};