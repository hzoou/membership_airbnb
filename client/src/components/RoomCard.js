import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { commaToNumber } from "../util/utils";

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

const Star = styled.svg`
    width: 10px;
    height: 10px;
    margin-right: 3px;
    position: relative;
    top: 1px;
`;

const RoomCard = () => {
    const [ datas, setData ] = useState([]);

    const getAllRooms = () => {
        fetch('http://localhost:8080/api/rooms', {
            method: 'GET',
            headers: {'Content-Type': 'application/json'},
        }).then((res) => {
            if (res.ok) return res.json();
            throw new Error('Network response was not ok.');
        }).then((result) => {
            if (result.status === 'SUCCESS') return setData(result.data);
            new Error(result);
        }).catch((err) => {
            return alert(err.message);
        });
    };

    useEffect(getAllRooms, []);

    const isLoading = (datas == null);

    return ( isLoading ? <div>Loading...</div>  : <div>{datas.map((data) => {
        return <Card key={data.id}>
                    <div>
                        <Thumbnail src={data.thumbnail} />
                    </div>
                    <CardContent>
                        <Type>{data.type}</Type>
                        <Title>{data.title}</Title>
                        <Option>인원 {data.guest}명 ・ 침대 {data.bed}개 ・ 침실 {data.bedroom}개 ・ 욕실 {data.bathroom}개</Option>
                        <Price>₩{commaToNumber(data.price)}/박</Price>
                        <StarDiv>
                            <Star viewBox="0 0 576 512">
                                <path fill="#398288"
                                      d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
                            </Star>
                            {data.star}</StarDiv>
                    </CardContent>
                </Card>
    })}</div> )
};

export default RoomCard;