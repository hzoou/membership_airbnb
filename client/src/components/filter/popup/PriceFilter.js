import React, {useEffect, useState} from "react";
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
    
    &:before {
        content: '₩';
    }
`;

const PriceInput = styled.input.attrs(() => ({
    type: "number",
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

export default ({ state, setState }) => {
    const [ minPrice, setMinPrice ] = useState(state.minPrice);
    const [ maxPrice, setMaxPrice ] = useState(state.maxPrice);

    const getPriceValue = (e, value) => {
        setMinPrice(value[0]);
        setMaxPrice(value[1]);
        setState({ minPrice, maxPrice });
    };

    const changeMinPrice = e => {
        setMinPrice(Number(e.target.value));
        setState({ minPrice: Number(e.target.value), maxPrice: maxPrice });
    };

    const changeMaxPrice = e => {
        setMaxPrice(Number(e.target.value));
        setState({ minPrice: minPrice, maxPrice: Number(e.target.value) });
    };

    const initState = () => {
        setMinPrice(state.minPrice);
        setMaxPrice(state.maxPrice);
    };

    useEffect(initState, [ state ]);

    return (
        <>
            <AirbnbSlider
                ThumbComponent={AirbnbThumbComponent}
                getAriaLabel={index => (index === 0 ? 'Minimum price' : 'Maximum price')}
                min={10000}
                max={300000}
                onChange={getPriceValue}
                value={[ minPrice, maxPrice ]}
            />
            <PriceInputContainer>
                <PriceInputDiv>
                    <PriceInput value={minPrice} onChange={changeMinPrice} />
                </PriceInputDiv>
                <Dash />
                <PriceInputDiv>
                    <PriceInput value={maxPrice} onChange={changeMaxPrice} />
                </PriceInputDiv>
            </PriceInputContainer>
        </>
    );
};