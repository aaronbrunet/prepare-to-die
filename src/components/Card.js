import React, { useState } from 'react'
import styled from 'styled-components'
import Modifier from './Modifier'


const Dice = styled.div`
    display: inline-block;
    border: 1px solid grey;
    border-radius: 10px;
    margin: 10px;
    padding: 15px;
    color: white;
    cursor: pointer;
    height: auto;
    width: auto;
    transition: .2s ease-in-out;
    position: relative;

    span {        
        position:relative;
        display: block;
    }

    Button {
        border: none;
        background: transparent;
        color: white;
    }

    &:hover, &:active {
        color: red;
        border-color: red;
        transform: scale(1.2);
        
    }
`
const Button = styled.button`

    border-radius: 10px;
    border: 1px solid white;
    color: white;
    background: transparent;
    margin-top: 30px;
    cursor: pointer;
    &:hover{
        color: #242527;
        background: white;
    }
`


const Card = (props) => {
    let die = props.die
    
    return (
        <Dice className="Dice" onClick={()=>console.log('clicked %s %d',die.name,die.sides)}>
            <h4>{die.name}</h4>
            <p>Sides: {die.sides}</p>
            <span>
            <Button name="less" onClick={()=>props.increment(die,-1)}>{'<'}</Button>
            {die.qty}
            <Button name="more" onClick={()=>props.increment(die,1)}>{'>'}</Button>
            </span>
            <Modifier die={die} />
            <Button onClick={()=>props.rolled(die,die.qty)}>Roll</Button>
            <br/>
            <Button onClick={()=>props.rolled(die,die.qty,'advantage')}>Advantage</Button>
            <br/>
            <Button onClick={()=>props.rolled(die,die.qty,'disadvantage')}>Disadvantage</Button>
        </Dice>        
    )
}

export default Card