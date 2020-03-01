import React, { useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Result from "./components/Result";
import Die from "./components/Die";
import "./App.css";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Heading = styled.h1`
  color: white;
  font-size: 36pt;
`;

const diceList = [
  { name: "d4", sides: 4, qty: 1, modifier: [], vantage: null },
  { name: "d6", sides: 6, qty: 1, modifier: [], vantage: null },
  { name: "d8", sides: 8, qty: 1, modifier: [], vantage: null },
  { name: "d10", sides: 10, qty: 1, modifier: [], vantage: null },
  { name: "d12", sides: 12, qty: 1, modifier: [], vantage: null },
  { name: "d20", sides: 20, qty: 1, modifier: [], vantage: null },
  { name: "Percentile", sides: 100, qty: 1, modifier: [], vantage: null }
];

function App() {
  const [roll, setRoll] = useState([]);
  const [dice, setDice] = useState(diceList);
  const [die, setDie] = useState(null);

  
  //die === null && (die = initialDie)

  const randomise = (min, max, qty, vantage) => {
    let roll = [];
    for (let i = 0; i < qty; i++) {
      let rand = Math.round(min + Math.random() * (max - min));
      if(vantage){
        let second = Math.round(min + Math.random() * (max - min));
        let arr = [rand,second]
        if(vantage === 'advantage'){rand = arr.reduce((a, b) => Math.max(a, b)) + ' ('+arr+')';}
        if(vantage === 'disadvantage'){rand = arr.reduce((a, b) => Math.min(a, b)) + ' ('+arr+')';}
        console.log('Vantage: %s, Arr: %o',vantage,arr)
      }
      //if(rand === max && max === 20){rand +=' (Critical!)'}
      roll.push(rand);
    }
    return roll;
  };

  const _addModifier = (die, modifier) => {
    if (die.modifier.length < 3) {
      die.modifier.indexOf(modifier) === -1
        ? die.modifier.push(modifier)
        : die.modifier.pop(modifier);
      console.log(die.name);
      setDice(dice.map(dice => (dice.name.match(die.name) ? die : dice)));
    }
  };
  const _removeModifier = (die, modifier) => {
    let index = die.modifier.indexOf(modifier);
    index > -1 && die.modifier.splice(index, 1);
    console.log(die.name);
    setDice(dice.map(dice => (dice.name.match(die.name) ? die : dice)));
  };
  const _clearAll = die => {
    die.modifier = [];
    setDice(dice.map(dice => (dice.name.match(die.name) ? die : dice)));
    setRoll([]);
  };

  const _rolled = (die, qty, modifier, vantage) => {
    const min = 1;
    const max = die.sides;
    let roll = [];
    let result;
    console.log(modifier[0]);
    if (modifier && modifier.length > 0) {
      /*
      if (modifier[0] === "advantage") {
        roll = randomise(min, max, 2);
        result = roll.reduce((a, b) => Math.max(a, b));
      } else if (modifier[0] === "disadvantage") {
        roll = randomise(min, max, 2);
        result = roll.reduce((a, b) => Math.min(a, b));
      } else {
        */
        roll = randomise(min, max, qty, vantage);
        result = roll.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        let history = result;
        for (let mod in modifier) {
          let curr = modifier[mod];
          history += curr;
          console.log("Base mod: " + curr);
          if (curr !== "undefined") {
            curr = curr.replace(/[^-()\d/*+.]/g, "");
            console.log("Formatted mod: " + curr);
            curr = result + curr;
            console.log("Formatted mod + roll: " + curr);
            result = eval(curr);
            console.log("History: %s, Result: %s", history, result);
          }
        //}
      }
    } else {
      roll = randomise(min, max, qty, vantage);
      result = roll.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    setRoll([die.name, die.qty, roll, result, modifier, vantage]);
    console.log(roll);
  };

  const _increment = (die, inc) => {
    let val = die.qty + inc;
    val < 1 && (val = 1);
    die.qty = val;
    setDice(dice.map(dice => (dice.name.match(die.name) ? die : dice)));
  };

  const _toggle = newDie => {
    _clearAll(newDie);
    newDie === die ? setDie(() => null) : setDie(() => newDie);
  };

  return (
    <div className="App">
      <Heading>
        R<span style={{ color: "red" }}>&</span>ller
      </Heading>
      <div className="card-container">
        {dice.map((die, index) => (
         <Card
            die={die}
            setDie={_toggle}
            key={index}
          />
        ))}
      </div>   
      {die &&   
        (<Die
          die={die}
          rolled={_rolled}
          increment={_increment}
          modifier={_addModifier}
          rmodifier={_removeModifier}
          setDie={_toggle}
          roll={roll}
        />)}      
    </div>
  );
}
export default App;
