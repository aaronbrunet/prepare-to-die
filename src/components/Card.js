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
const ModList = styled.div`
    display: block;
    Button {
        display: inline-block
    }

`

const ModInput = styled.input`
    width: 50%;
`



const Card = (props) => {
    const [modType,setModType] = useState('')
    const [mod,setMod] = useState('')
    let die = props.die

    const _setmod = val => {
        modType===val ? setModType('') : setModType(()=> val) 
    }

    const handleInput = input => {
        setMod(input.target.value)
    }
    
    return (
        <Dice className="Dice" onClick={()=>console.log('clicked %s %d',die.name,die.sides)}>
            <h4>{die.name}</h4>
            <p>Sides: {die.sides}</p>
            <span>
            <Button name="less" onClick={()=>props.increment(die,-1)}>{'<'}</Button>{die.qty}<Button name="more" onClick={()=>props.increment(die,1)}>{'>'}</Button>
            </span>
            {die.modifier.map((modifier,index)=>
                //<Modifier mod={modifier} key={index}/>
                <Button key={index} onClick={()=>props.rmodifier(die,modifier)}>{modifier}</Button>
            )}
            {die.modifier.length < 3 ?
            (<form onSubmit={ event => {
                    event.preventDefault()
                    if (!modType||!mod) return
                    //props.modifier((mod+modType))
                    console.log(modType+mod)                    
                    props.modifier(die,(modType+mod))
                    setMod('')
                    setModType('')
                }}>
                    {modType}<ModInput type='number' pattern='[0-9]*' placeholder='Enter mod' value={mod} onChange={handleInput}/>
                    <ModList>
                    <Button type='button' onClick={()=>_setmod('+')} name='+'>+</Button>
                    <Button type='button' onClick={()=>_setmod('-')} name='-'>-</Button>
                    <Button type='button' onClick={()=>_setmod('*')} name='*'>*</Button>
                    <Button type='button' onClick={()=>_setmod('/')} name='/'>/</Button>
                    <Button>Add</Button>
                    </ModList>
                </form>)
                :
                <h4>Remove a modifier to add a new one</h4>
            }
            <Button onClick={()=>props.rolled(die,die.qty,die.modifier)}>Roll</Button>
            <br/>
            <Button onClick={()=>props.rolled(die,die.qty,['advantage'])}>Advantage</Button>
            <br/>
            <Button onClick={()=>props.rolled(die,die.qty,['disadvantage'])}>Disadvantage</Button>
        </Dice>        
    )
}

export default Card