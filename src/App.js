import React, { useState, useReducer } from 'react';
import styled from 'styled-components'
import Card from './components/Card'
import Result from './components/Result'
import './App.css';

function App() {
  const [roll,setRoll] = useState()
  const [last,setLast] = useState([])

  const LastRoll = styled.span`
    margin: 0 10px;
  `

  const diceList = 
  [{name: 'D4',sides: 4},
  {name: 'D6',sides: 6},
  {name: 'D8',sides: 8},
  {name: 'D10',sides: 10},
  {name: 'D12',sides: 12},
  {name: 'D20',sides: 20}]

  const rolled = dice => {
    const min = 1
    const max = dice.sides
    const rand = Math.round(min + Math.random() * (max - min))
    setRoll(rand)
    setLast([...last,rand])
  }


  return (
    <div className="App">
      {diceList.map((die,index)=>
        <Card die={die} rolled={rolled} key={index}/>
      )}
      {last.length > 1 && (
        <> 
      <h4>Last rolled:</h4>
      {last.map((roll,index)=>
        <LastRoll key={index}>{roll}{last.length > 0 && index < last.length-1 && (',') }</LastRoll>
      )}
      </>
      )}
      <Result roll={roll} />
    </div>
  );
}

export default App;
