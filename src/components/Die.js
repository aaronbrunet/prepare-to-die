import React, { useState } from "react";
import { SplitButton } from "primereact/splitbutton";
import { Spinner } from 'primereact/spinner';
import styled from "styled-components";
import Modifier from "./Modifier";
import Result from "./Result";
import Icon from "./Icon";

const Dice = styled.div`
  border-radius: 50px;
  background: #2c222f;
  background: #3b3d44;
  margin: 20px auto;
  padding: 15px;
  color: #b94666;
  height: 50vh;
  width: 100%;  
  transition: 0.2s ease-in-out;
  position: relative;
  &&&{
    .secondary {
      background-color: #2ea9bd;      
    }
    button {
      border: 0;
    }
    input, button{
      &:focus {
        box-shadow: 0 0 2px 0.2em #fe99ba;
        border: 0;
      }
    }
  }  
`;

const H1 = styled.h1`
  color: #b94666;
  font-size: 35pt;
`;
const H3 = styled.h3`
  color: #2ea9bd;
  font-size: 25pt;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const TitleBox = styled.div`
  flex: 0 0 40%;
  height: 100%;
  border-radius: 30px;
  background: #2c222f;
  box-shadow: -2px 5px 12px 0px #242528;
`;
const RollBox = styled.div`
  flex: 0 0 58%;
  height: 100%;
  border-radius: 30px;
  padding: 30px;
  &&&{    
    .p-button-text {
      font-size: 20pt;
      line-height: 1;
      font-weight: bold;
    }
    .p-menuitem {
      font-size: 18pt;
    }
  }
`;

const QtyBox = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
`;

const DieList = styled.div`  
&&&{
    display: block;  
    margin: 15px 0;
    .icon-box {      
      display: inline-block;
      margin: 0 10px;
      transition: 0.2s ease;
      /*&:hover{animation: pulse .5s infinite;}*/
    }
    @keyframes pulse {
    0% {
      transform: rotate(0deg);
    }
    25% {
      transform: rotate(70deg);
    }
    50% {
      transform: rotate(0deg);
    }
    75% {
      transform: rotate(-70deg);

    }
    100% {
      transform: rotate(0deg);
    }
  }
}
`;

const Increment = styled(Spinner)`
&&&{
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
    font-size: 18pt;
    font-weight: bold;
    color: #b94666;    
  }
  button {
    display: inline-block;
    position: absolute;
    top:0;
    height: 100%;
    cursor: pointer;
    span {
      transform: rotate(90deg);
    }

    background-color: #b94666;
    &:hover{
      background-color: #843148;
    }

    &.p-spinner-button-up{
      right: 0;      
    }
    &.p-spinner-button-down{
      left: 0;
    }
  }
}
`;

const Roller = styled(SplitButton)`
  &&&{
  width: 50%;
  display: block;
  margin: auto;
  margin-top: 15px;
  margin-bottom: 15px;
  /*max-width: 250px;*/  
 

  button {
    background-color: #b94666;
    background-color: ${props=>props.vantage==='Normal' ? '#b94666' : '#2ea9bd'};
    border-radius: 0;
    height: 100%;
    font-size: 12pt;
    transition: all 0.5s ease;

    &:hover{
      background-color: #843148;
      background-color: ${props=>props.vantage==='Normal' ? '#843148' : '#0e7d8f'};
    }
  }
  .p-button-text {    
    font-size: 25pt;
    line-height: 1;
    white-space: nowrap;
  } 
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
  const [vantage, setVantage] = useState(vantages[0]);

  let die = props.die;
  const diceList = () => {
    let dice = [];
    let i = 1;
    while (i <= die.qty) {
      //dice.push(<DieVis key={i}>{i}</DieVis>);
      dice.push(<Icon die={die} index={die.index} key={i} size='sm' inline/>);
      i++;
    }
    return dice;
  }
  
  const setQty = qty => {
    die.qty = qty;
    props.update(die);
  }

  return (
    <Dice className="Dice">
      <Box>
        <TitleBox>
          <Icon die={die} index={die.index} size='lg' className='App-logo'/>
          <H1>{die.name}</H1>
          <H3>{die.sides} Sides</H3>          
        </TitleBox>
        <RollBox>  
          <QtyBox>
          <Increment value={die.qty} onChange={(e) => setQty(e.value)} min={1} max={10} />
          <DieList>{diceList()}</DieList>
          </QtyBox> 
          <Modifier rmodifier={props.rmodifier} modifier={props.modifier} die={die} />
          <Roller vantage={vantage.label} label={vantage.value ? `Roll ${vantage.label}` : 'Roll'} onClick={() => props.rolled(die, die.qty, die.modifier, vantage)} model={vantages}></Roller>          
          <Result diceList={diceList()} roll={props.roll} />
        </RollBox>
      </Box>
    </Dice>
  );
};
export default Die;
