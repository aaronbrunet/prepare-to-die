import React, { useState } from 'react'
import styled from 'styled-components'


const Dice = styled.div`
    display: inline-block;
    border: 1px solid grey;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;

    &:hover {
        color: red;
        border-color: red;
    }
`


const Card = (props) => {
    let die = props.die
    
    return (
        <Dice className="Dice" onClick={()=>props.rolled(die)}>
            <h4>{die.name}</h4>
            <p>Sides: {die.sides}</p>
        </Dice>        
    )
}

export default Card