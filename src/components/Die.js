import React, { useState } from 'react'
import styled from 'styled-components'
import Result from './Result'

const Dice = styled.div`    
    border: 1px solid red;
    border-radius: 10px;
    margin: 20px auto;
    padding: 15px;
    color: red;
    cursor: pointer;
    height: 50vh;
    width: 80%;
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
`
const Button = styled.button`
    border-radius: 10px;
    border: 1px solid white;
    color: white;
    background: transparent;
    margin-top: 30px;
    cursor: pointer;
    font-size: 15pt;
    &:hover{
        color: #242527;
        background: white;
    }
`

const Box =  styled.div`
    display: flex;
    flex-direction: row;
    align-items: baseline;    
`
const TitleBox = styled.div`
    flex-grow:2;
`
const RollBox = styled.div`
    flex-grow:1;
`

const RollButton =styled(Button)`
    display: inline-block;
    font-size: 20pt;
`

const ModList = styled.div`
    display: block;
    Button {
        display: inline-block
    }

`

const ModInput = styled.input`
    width: 50%;
    font-size: 15pt;
`
const Die = (props) => {
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
        <Dice className="Dice" >
            <Box>
            <TitleBox>
            <h1>{die.name}</h1>
            <h3>Sides: {die.sides}</h3>
            </TitleBox>
            
            <RollBox>
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
            <RollButton onClick={()=>props.rolled(die,die.qty,die.modifier)}>Roll</RollButton>
            <RollButton onClick={()=>props.rolled(die,die.qty,['advantage'])}>Advantage</RollButton>
            <RollButton onClick={()=>props.rolled(die,die.qty,['disadvantage'])}>Disadvantage</RollButton>
            
            <Result roll={props.roll} />
            </RollBox>
            </Box>
        </Dice>        
    )
}
export default Die