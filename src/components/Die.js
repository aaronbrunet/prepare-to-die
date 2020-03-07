import React, { useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import { Button } from "primereact/button";
import { SplitButton } from "primereact/splitbutton";
import { Spinner } from 'primereact/spinner';

import styled from "styled-components";

import Modifier from "./Modifier";
import Result from "./Result";

const Dice = styled.div`
  /*border: 1px solid red;*/  
  border-radius: 50px;
  background: #625F6B;
  margin: 20px auto;
  padding: 15px;
  color: #704551;
  cursor: pointer;
  height: 50vh;
  width: 100%;  
  transition: 0.2s ease-in-out;
  position: relative;

  span {
    position: relative;
    display: block;
  }

 
`;
const InputButton = styled.button`
  border-radius: 10px;
  border: 1px solid white;
  color:#242527;
  background: white;
  margin-top: 30px;
  cursor: pointer;
  font-size: 15pt;
  &:hover {
    color: white;
    background: red;
  }
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;
const TitleBox = styled.div`
  flex-grow: 1;
  height: 100%;
`;
const RollBox = styled.div`
  flex-grow: 1;
  background:#C1C3C5;
  height: 100%;
  border-radius: 30px;
  padding: 30px;
`;

const RollButton = styled(InputButton)`
  display: inline-block;
  font-size: 20pt;
`;
const Qty = styled.h2`
  display: inline-block;
`;
const ModList = styled.div`
  display: block;
  button {
    display: inline-block;
  }
`;

const ModInput = styled.input`
  width: 50%;
  font-size: 15pt;
`;

const DieVis = styled.div`
  display: inline-block;
  background: red;
  color: white;
  margin: 0 10px;
`;

const Increment = styled(Spinner)`
  display: block;
  width: 30%;
  
  max-width: 200px;
  margin: auto;
  box-sizing: border-box;

  input {
    display: block;
    text-align: center;
    padding: 15px 0 !important;    
    width: 100%;
  }
  button {
    display: inline-block;
    position: absolute;
    top:0;
    height: 100%;

    span {
      transform: rotate(90deg);
    }

    &.p-spinner-button-up{
      right: 0;      
    }
    &.p-spinner-button-down{
      left: 0;
    }

  }
`;

const Roller = styled(SplitButton)`
  &&&{
  width: 50%;
  display: block;
  margin: auto;
  max-width: 200px;

  .p-button-text-only { width: 90%; }
  .p-button-icon-only { width: 10%; }
  }
`;

const Die = props => {
  const vantages = [
    { label: "Normal", value: null, command: (e)=>{ setVantage(vantages[0]) } },
    { label: "Advantage", value: "advantage",command: (e)=>{ setVantage(vantages[1]) } },
    { label: "Disadvantage", value: "disadvantage",command: (e)=>{ setVantage(vantages[2]) } }
  ];

  const [modType, setModType] = useState("");
  const [mod, setMod] = useState("");
  const [vantage, setVantage] = useState(vantages[0]);
  const initialDie = { name: "none", sides: 0, qty: 0, modifier: [] };

  const options = [
    { label: "None", value: null },
    { label: "Advantage", value: "advantage" },
    { label: "Disadvantage", value: "disadvantage" }
  ];
  

  let die = props.die;

  const _setmod = val => {
    modType === val ? setModType("") : setModType(() => val);
  };

  const handleInput = input => {
    setMod(input.target.value);
  };

  function dicevis() {
    let dice = [];
    let i = 1;
    while (i <= die.qty) {
      dice.push(<DieVis key={i}>{i}</DieVis>);
      i++;
    }
    return dice;
  }
  
  function setQty(qty) {
    die.qty = qty;
    props.update(die);
  }

  return (
    <Dice className="Dice">
      <Box>
        <TitleBox>
          <h1>{die.name}</h1>
          <h3>Sides: {die.sides}</h3>
        </TitleBox>
        <RollBox>  
          <Increment value={die.qty} onChange={(e) => setQty(e.value)} min={1} max={10} />
          {dicevis()}          
          <br />
          {die.modifier.map((modifier, index) => (
            //<Modifier mod={modifier} key={index}/>
            <InputButton
              key={index}
              onClick={() => props.rmodifier(die, modifier)}
            >
              {modifier}
            </InputButton>
          ))}
          {die.modifier.length < 3 ? (
            <Modifier modifier={props.modifier} die={die} />
          ) : (
            <h4>Remove a modifier to add a new one</h4>
          )}
          <br />
          <Roller label={vantage.value ? 'Roll with ' + vantage.label : 'Roll'} onClick={() => props.rolled(die, die.qty, die.modifier, vantage.value)} model={vantages}></Roller>
          <br />
          <Result roll={props.roll} />
        </RollBox>
      </Box>
    </Dice>
  );
};
export default Die;
