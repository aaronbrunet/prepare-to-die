import React, { useState } from 'react';
import styled from 'styled-components'
import Card from './components/Card'
import Result from './components/Result'
import Modifier from './components/Modifier'
import './App.css';

const Heading = styled.h1`
  color: white;
  font-size: 36pt;
`
const LastRoll = styled.span`
    margin: 0 10px;
`
const diceList = 
  [{name: 'd4',sides: 4, qty:1, modifier: ['none']},
  {name: 'd6',sides: 6, qty:1, modifier: ['none']},
  {name: 'd8',sides: 8, qty:1, modifier: ['none']},
  {name: 'd10',sides: 10, qty:1, modifier: ['none']},
  {name: 'd12',sides: 12, qty:1, modifier: ['none']},
  {name: 'd20',sides: 20, qty:1, modifier: ['none']},
  {name: 'Percentile',sides: 100, qty:1, modifier: ['none']}]

function App() {
  const [roll,setRoll] = useState([])
  const [last,setLast] = useState([])
  //const [qty,setQty] = useState(1)  
  const [dice,setDice] = useState(diceList)  

  const randomise = (min,max,qty) => {
    let roll = []
    for(let i=0;i<qty;i++){
      let rand = Math.round(min + Math.random() * (max - min))
      //if(rand === max && max === 20){rand +=' (Critical!)'}
      roll.push(rand)
    }
    return roll
  }

  function addModifier(die,modifier) {
    die.modifier.indexOf(modifier)===-1 ? die.modifier.push(modifier) : die.modifier.pop(modifier)
    console.log(die.name)
    setDice(dice.map(dice=>(dice.name.match(die.name) ? die : dice))) 
  }

  const rolled = (die,qty,modifier) => {    
    const min = 1
    const max = die.sides
    let roll = []
    let result
    if(modifier){
      addModifier(die,modifier)    
      roll = randomise(min,max,2)
      switch(modifier){
        case 'advantage':
          result = roll.reduce((a,b)=>Math.max(a,b))
          break;
        case 'disadvantage':
          result = roll.reduce((a,b)=>Math.min(a,b))
          break;
        default:
          console.log('Modifier triggered but no modifier passed')
      }
      //modifier === 'advantage' && ( sum = roll.reduce((a,b)=>Math.max(a,b)) )
      //modifier === 'disadvantage' && ( sum = roll.reduce((a,b)=>Math.min(a,b)) )
      /*
      if(modifier === 'advantage'){      
        die.modifier = modifier
        setDice(dice.map(dice=>(dice.name.match(die.name) ? die : dice)))  
          sum = roll.reduce((a,b)=>Math.max(a,b))
          console.log(roll,sum)
      }
      if(modifier === 'disadvantage'){  
          sum = roll.reduce((a,b)=>Math.min(a,b))
          console.log(roll,sum)
      }
      */
      //modifier === 'disadvantage' &&( roll=disadvantage(randomise(min,max,2)) )
      //console.log(roll)
      //setRoll([dice.name,dice.qty,roll,2])
    }
    else{
      roll = randomise(min,max,qty)
      result = roll.reduce((a,b)=>parseInt(a)+parseInt(b),0)      
    }
    setRoll([die.name,die.qty,roll,result,modifier])
    //setLast([...last,roll])
  }

  const increment = (die,inc) => {
      let val = die.qty + inc
      val < 1 && ( val = 1 )
      die.qty = val
      setDice(dice.map(dice =>(dice.name.match(die.name) ? die : dice )))
  }

  return (
    <div className="App">
      <Heading>R<span style={{color: 'red'}}>&</span>ller</Heading>
      <div className="card-container">
        {dice.map((die,index)=>
          <Card 
            die={die} 
            rolled={rolled} 
            increment={increment} 
            modifier={addModifier}
            key={index}/>
        )}      
      </div>
      <Result roll={roll} />
    </div>
  );
}

export default App;
