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

    button {
        border: none;
        background: transparent;
        color: white;
    }

    &:hover, &:active {
        color: red;
        border-color: red;
        
    }
`
const Button = styled.button`
    width: 60px;
    height: 50px;
    border-radius: 20px;
    border: 1px solid white;
    color: white;
    background: transparent;
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
            <button name="less" onClick={()=>props.increment(die,-1)}>{'<'}</button>
            {die.qty}
            <button name="more" onClick={()=>props.increment(die,1)}>{'>'}</button>
            </span>
            <Button onClick={()=>props.rolled(die,die.qty)}>Roll</Button>
        </Dice>        
    )
}

export default Card