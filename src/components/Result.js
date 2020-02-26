import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

const Title = styled.h3`
    color: white;
    size: 20pt;
`

const Num = styled.h4`
    color: red;
    display: inline-block;
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

const Result = (props) => {
    const diceName = props.roll[0]
    const diceQty = props.roll[1]
    const results = props.roll[2]
    let sum = 0

    //<Button>Roll</Button>
    return (
    <>
        
        
        {results ? <><Title>{diceName==='Percentile' ? diceName : diceQty+diceName}</Title> {        
        results.map((result,index)=>
            <>
            <Num key={index}>{result}{results.length > 0 && index < results.length-1 && (', ') }</Num>
            </>            
        )
        }
        <Title>Total: {results.reduce((a,b)=>a+b,0)}</Title>
        </>
        : <Title>Roll something!</Title>
        }        
    </>
    )
}

export default Result