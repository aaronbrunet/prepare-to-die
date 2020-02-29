import React, { useState } from 'react'
import styled from 'styled-components'

const Title = styled.h3`
    color: white;
    font-size: 25pt;
    margin: 5px;
`

const Num = styled.h4`
    color: red;
    display: inline-block;
    font-size: 25pt;
    margin: 5px;
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
    const sum = props.roll[3]
    const modifier = props.roll[4]

    //<Button>Roll</Button>
    return (
    <>
    {results ? 
        <>
            <Title>{diceName==='Percentile' ? diceName : diceQty+diceName}{modifier && modifier.length > 0 &&(` ( ${modifier} )`)}</Title> 
            {results.map((result,index)=>
                <Num key={index}>{result}{results.length > 0 && index < results.length-1 && (', ') }</Num>                        
            )}
            <Title>Result: {sum}</Title>
        </>
        : <Title>Roll something!</Title>
        }        
    </>
    )
}

export default Result