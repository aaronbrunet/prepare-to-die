import React, { useState } from 'react';
import styled from 'styled-components'
import Card from './components/Card'
import Result from './components/Result'
import './App.css';

const Heading = styled.h1`
  color: white;
  font-size: 36pt;
`
const LastRoll = styled.span`
    margin: 0 10px;
`
const diceList = 
  [{name: 'd4',sides: 4, qty:1},
  {name: 'd6',sides: 6, qty:1},
  {name: 'd8',sides: 8, qty:1},
  {name: 'd10',sides: 10, qty:1},
  {name: 'd12',sides: 12, qty:1},
  {name: 'd20',sides: 20, qty:1},
  {name: 'Percentile',sides: 100, qty:1}]

function App() {
  const [roll,setRoll] = useState([])
  const [last,setLast] = useState([])
  //const [qty,setQty] = useState(1)  
  const [dice,setDice] = useState(diceList)  

  const rolled = (dice,qty) => {    
    const min = 1
    const max = dice.sides
    let roll = []    
    let msg = ''
    for(let i=0;i<qty;i++){
      let rand = Math.round(min + Math.random() * (max - min))
      if(rand === max){rand +=' (Critical!)'}
      roll.push(rand)
    }
    let sum = roll.reduce((a,b)=>parseInt(a)+parseInt(b),0)
    setRoll([dice.name,dice.qty,roll,sum])
    setLast([...last,roll])
  }

  const increment = (die,inc) => {
      let val = die.qty
      val = die.qty + inc
      val < 1 &&(val=1)
      die.qty = val
      //setQty(val)
      setDice(dice.map(dice =>(dice.name.match(die.name) ? die : dice )))
      //setList(list.map(row => (row.id.match(updatedLink.id) ? updatedLink : row))) 
  }

  return (
    <div className="App">
      <Heading>R<span style={{color: 'red'}}>&</span>ller</Heading>
      <div className="card-container">
      {dice.map((die,index)=>
        <Card die={die} rolled={rolled} increment={increment} key={index}/>
      )}
      {last.length < 0 && (
        <> 
      <h4>Last rolled:</h4>
      {last.map((roll,index)=>
        <LastRoll key={index}>{roll}{last.length > 0 && index < last.length-1 && (',') }</LastRoll>
      )}
      </>
      )}
      </div>
      <Result roll={roll} />
    </div>
  );
}

export default App;
