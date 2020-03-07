import React, { useState } from "react";
import { SelectButton } from "primereact/selectbutton";
import { Button } from "primereact/button";
import styled from "styled-components";

import Modifier from "./Modifier";
import Result from "./Result";

const Dice = styled.div`
  border: 1px solid red;
  border-radius: 50px;
  background: #625F6B;
  margin: 20px auto;
  padding: 15px;
  color: #E1BDCF;
  cursor: pointer;
  height: 50vh;
  width: 80%;
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
  flex-grow: 2;
  height: 100%;
`;
const RollBox = styled.div`
  flex-grow: 1;
  background:#C1C3C5;
  height: 100%;
  border-radius: 30px;
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

const Die = props => {
  const [modType, setModType] = useState("");
  const [mod, setMod] = useState("");
  const [vantage, setVantage] = useState(null);
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

  return (
    <Dice className="Dice">
      <Box>
        <TitleBox>
          <h1>{die.name}</h1>
          <h3>Sides: {die.sides}</h3>
        </TitleBox>
        <RollBox>
          <SelectButton
            value={vantage}
            options={options}
            onChange={e => setVantage(e.value)}
          ></SelectButton>
          <span>
            <InputButton name="less" onClick={() => props.increment(die, -1)}>
              {"<"}
            </InputButton>
            <Qty>{die.qty}</Qty>
            <InputButton name="more" onClick={() => props.increment(die, 1)}>
              {">"}
            </InputButton>
            <br />
            {dicevis()}
          </span>

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
          <Button
            label="Roll"
            className="p-button-raised p-button-danger"
            onClick={() => props.rolled(die, die.qty, die.modifier, vantage)}
          />
          <br />

          <Result roll={props.roll} />
        </RollBox>
      </Box>
    </Dice>
  );
};
export default Die;
