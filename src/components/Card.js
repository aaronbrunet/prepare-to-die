import React, { useState } from "react";
import styled from "styled-components";

import Icon from './Icon'

const Dice = styled.div`  
  background: #3b3d44;
  box-shadow: 0px 0px 6px 0px #331f2e;
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
  color: ${props=>props.active ? '#b94666' : 'white'};
  cursor: pointer;
  height: 100%;
  width: auto;
  transition: 0.2s ease-in-out;
  position: relative;  
  flex: none;
  width: 100px;
  filter: ${props=>props.active ? 'brightness(1)': 'brightness(.8)' };
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
  //const [active,setActive] = useState(false);
  let die = props.die;
  die.index = props.index;

  
  const _setActive = die => {
    die.active = !die.active;
    props.setDie(die);
    props.setActive(props.active === props.index ? null : props.index);
  }
  
//<h4>{die.name}</h4>
//<p>{die.sides} Sides</p>
  return (
    <Dice className="Dice" onClick={()=>_setActive(die)} active={props.active === null || props.active === props.index}>
      {props.active !== props.index && (<></>)}
      
      <Icon die={die} index={props.index} size='sm'/>
    </Dice>
  );
};

export default Card;
