import React, { useState } from "react";
import styled from "styled-components";
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';

const AirbnbSlider = withStyles({
    root: {
        color: '#3a8589',
        height: 3,
        padding: '13px 0',
    },
    thumb: {
        height: 27,
        width: 27,
        backgroundColor: '#fff',
        border: '1px solid currentColor',
        marginTop: -12,
        marginLeft: -13,
        boxShadow: '#ebebeb 0px 2px 2px',
        '&:focus,&:hover,&$active': {
            boxShadow: '#ccc 0px 2px 3px 1px',
        },
        '& .bar': {
            height: 9,
            width: 1,
            backgroundColor: 'currentColor',
            marginLeft: 1,
            marginRight: 1,
        },
    },
    active: {},
    valueLabel: {
        left: 'calc(-50% + 4px)',
    },
    track: {
        height: 3,
    },
    rail: {
        color: '#d8d8d8',
        opacity: 1,
        height: 3,
    },
})(Slider);

const AirbnbThumbComponent = (props) => {
    return (
        <span {...props}>
        <span className="bar" />
        <span className="bar" />
        <span className="bar" />
        </span>
    );
};

const PriceInputContainer = styled.div`
    width: 100%;
    display: flex;
`;

const PriceInputDiv = styled.div`
    display: flex;
    width: 115px;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #dadada;
    outline: none;
    
    &:focus {
        border: 1px solid #3a8589;
    }
`;

const PriceInput = styled.input.attrs(() => ({
    type: "text",
}))`
    width: 93px;
    margin-left: 10px;
    outline: none;
    border: 0;
`;

const Dash = styled.span`
    height: fit-content;
    margin: auto 10px;
    
    &:after {
        content: '-';
    }
`;

export default () => {
    const [ minPrice, setMinPrice ] = useState(50000);
    const [ maxPrice, setMaxPrice ] = useState(200000);

    const setPriceList = [ setMinPrice, setMaxPrice ];

    const getPriceValue = (value, index) => {
        setPriceList[index](value);
    };

    const changeMinPrice = e => {
        setMinPrice(Number(e.target.value));
    };

    const changeMaxPrice = e => {
        setMaxPrice(Number(e.target.value));
    };

    return (
        <>
            <AirbnbSlider
                ThumbComponent={AirbnbThumbComponent}
                getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
                min={10000}
                max={300000}
                defaultValue={[ minPrice, maxPrice ]}
                value={[ minPrice, maxPrice ]}
                getAriaValueText={getPriceValue}
            />
            <PriceInputContainer>
                <PriceInputDiv> ₩
                    <PriceInput value={minPrice} onChange={changeMinPrice} />
                </PriceInputDiv>
                <Dash />
                <PriceInputDiv> ₩
                    <PriceInput value={maxPrice} onChange={changeMaxPrice} />
                </PriceInputDiv>
            </PriceInputContainer>
        </>
    );
};