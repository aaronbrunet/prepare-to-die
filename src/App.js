import React, { useState } from "react";
import styled from "styled-components";
import Card from "./components/Card";
import Die from "./components/Die";
import "./App.css";
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const Heading = styled.h1`
  color: white;
  font-size: 60pt;
  margin: 0;
  -webkit-user-select: none;  
  -moz-user-select: none;    
  -ms-user-select: none;      
  user-select: none;
  padding-top: 50px;
`;

const Top = styled.div`
  height: 300px;
  width: 80%;
  margin: auto;
  margin-top: 20px;
  display: block;
  border-radius: 30px 30px 0 0;
  background: rgb(36,37,39);
  background: linear-gradient(to right top, #242527, #25242d, #2b222f, #351e2d, #3e1925);
  filter: brightness(1.1);
`;

const Body = styled.div`
  height: 100%;
  width: 80%;
  margin: auto;
  display: block;
`;

const CardBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;  
  margin-top: 50px;
`;

const diceList = [
  { name: "d4", sides: 4, qty: 1, modifier: [], vantage: null, active: false },
  { name: "d6", sides: 6, qty: 1, modifier: [], vantage: null, active: false },
  { name: "d8", sides: 8, qty: 1, modifier: [], vantage: null, active: false },
  { name: "d10", sides: 10, qty: 1, modifier: [], vantage: null, active: false },
  { name: "d12", sides: 12, qty: 1, modifier: [], vantage: null, active: false },
  { name: "d20", sides: 20, qty: 1, modifier: [], vantage: null, active: false },
  { name: "Percentile", sides: 100, qty: 1, modifier: [], vantage: null, active: false }
];

function App() {
  const [roll, setRoll] = useState([]);
  const [dice, setDice] = useState(diceList);
  const [die, setDie] = useState(null);
  const [active,setActive] = useState(null);
  const [history,updateHistory] = useState([]);

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

  const _updateDie = (die) => {
    setDice(dice.map(dice => (dice.name.match(die.name) ? die : dice)));
  }

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

  const _rolled = (die, qty, modifier, vantageArr) => {
    const min = 1;
    const max = die.sides;
    let roll = [];
    let result;
    let vantage = vantageArr.value;
    if (modifier && modifier.length > 0) {
        roll = randomise(min, max, qty, vantage);
        result = roll.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        //let history = result;
        for (let mod in modifier) {
          let curr = modifier[mod];
          //history += curr;
          if (curr !== "undefined") {
            curr = result + curr.replace(/[^-()\d/*+.]/g, "");
            //curr = result + curr;
            result = Math.floor(eval(curr));
          }
      }
    } else {
      roll = randomise(min, max, qty, vantage);
      result = roll.reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    let newRoll = [die.name, die.qty, roll, result, modifier, vantageArr];
    setRoll(newRoll);    
    updateHistory([...history,newRoll]);
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
      <Top>
      <Heading>
        R<span style={{ color: "#b94666" }}>&</span>ller
      </Heading>
      <CardBox>
        {dice.map((die, index) => (
         <Card
            die={die}
            setDie={_toggle}
            key={index}
            index={index}
            active={active}
            setActive={setActive}
          />
        ))}
      </CardBox>   
      </Top>
      <Body>
      <Die
          die={die}
          rolled={_rolled}
          update={_updateDie}
          increment={_increment}
          modifier={_addModifier}
          rmodifier={_removeModifier}
          setDie={_toggle}
          roll={roll}
          history={history}
        />
        </Body>      
    </div>
  );
}
export default App;
