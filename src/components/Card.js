import React, { useState } from 'react'
import styled from 'styled-components'


const Dice = styled.div`
    display: inline-block;
    border: 1px solid grey;
    border-radius: 10px;
    margin: 10px;
    padding: 10px;
    color: white;
    cursor: pointer;
    overflow: hidden;    
    transition: .2s ease-in-out;
    position: relative;

    span {
        bottom: -15px;        
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
    width: 40px;
    height: 30px;
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
    //const [qty,setQty] = useState(1)    
    let die = props.die
    
    /*
    const more = () => {
        let val = qty
        val = qty + 1
        setQty(val)
    }
    const less = () => {
        let val = qty
        qty > 1 && ( val -= 1 )
        setQty(val)
    }
    */
//onClick={()=>props.rolled(die,1)}
    return (
        <Dice className="Dice" >
            <h4>{die.name}</h4>
            <p>Sides: {die.sides}</p>
            <span>
            <Button name="less" onClick={()=>props.increment(die,-1)}>{'<'}</Button>
            {die.qty}
            <Button name="more" onClick={()=>props.increment(die,1)}>{'>'}</Button>
            </span>
            <Button onClick={()=>props.rolled(die,die.qty)}>Roll</Button>
        </Dice>        
    )
}

export default Card