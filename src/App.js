import React, { useState, useReducer } from 'react';
import styled from 'styled-components'
import Card from './components/Card'
import Result from './components/Result'
import './App.css';

const Div = styled.div`
  color: white;
`

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
  const [selected,addSelected] = useState([])
  const [qty,setQty] = useState(1)  
  const [dice,setDice] = useState(diceList)  

  const rolled = (dice,qty) => {    
    const min = 1
    const max = dice.sides
    let rand = []    
    for(let i=0;i<qty;i++){
      rand.push(Math.round(min + Math.random() * (max - min)))    
    }
    setRoll([dice.name,dice.qty,rand])
    setLast([...last,rand])
  }

  const increment = (die,inc) => {
      let val = qty
      val = qty + inc
      val < 1 &&(val=1)
      die.qty = val
      setQty(val)
      setDice(dice.map(dice =>(dice.name.match(die.name) ? die : dice )))
      //setList(list.map(row => (row.id.match(updatedLink.id) ? updatedLink : row))) 
  }

  return (
    <div className="App">
      <Heading>R<span style={{color: 'red'}}>&</span>ller</Heading>
      <div className="card-container">
      {dice.map((die,index)=>
        <Card die={die} rolled={rolled} increment={increment} qty={qty} key={index}/>
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
