import React, { useState, useReducer } from 'react';
import Card from './components/Card'
import Result from './components/Result'
import './App.css';

function App() {
  const [roll,setRoll] = useState()

  const diceList = 
  [{name: 'D4',sides: 4},
  {name: 'D6',sides: 6},
  {name: 'D8',sides: 8},
  {name: 'D10',sides: 10},
  {name: 'D12',sides: 12},
  {name: 'D20',sides: 20}]

  const rolled = dice => {
    setRoll(dice.sides)
  }


  return (
    <div className="App">
      {diceList.map((die,index)=>
        <Card die={die} rolled={rolled} key={index}/>
      )}
      <Result roll={roll} />
    </div>
  );
}

export default App;
