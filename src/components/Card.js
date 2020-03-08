import React, { useState } from "react";
import styled from "styled-components";

const Dice = styled.div`
  display: inline-block;
  background: #3b3d44;
  box-shadow: ${props=>props.active ? '0px 0px 5px 1px #b94666' : '0px 0px 6px 0px #331f2e'};
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
  color: ${props=>props.active ? '#b94666' : 'white'};
  cursor: pointer;
  height: auto;
  width: auto;
  transition: 0.2s ease-in-out;
  position: relative;

  span {
    position: relative;
    display: block;
  }

  button {
    border: none;
    background: transparent;
    color: white;
  }

  &:hover{
    color: #b94666;
  }
`;

const Card = props => {  
  const [active,setActive] = useState(false);
  let die = props.die;

  const _setActive = die => {
    props.setDie(die);
    setActive(!active);
  }

  return (
    <Dice className="Dice" onClick={()=>props.setDie(die)} active={active}>
      <h4>{die.name}</h4>
      <p>{die.sides} Sides</p>
    </Dice>
  );
};

export default Card;
