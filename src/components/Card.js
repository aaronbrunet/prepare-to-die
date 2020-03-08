import React, { useState } from "react";
import styled from "styled-components";

import Icon from './Icon'

const CardBox = styled.div`  
  background: #3b3d44;
  box-shadow: 0px 0px 6px 0px #331f2e;
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
  color: ${props=>props.active ? '#b94666' : 'white'};
  cursor: pointer;
  height: 100%;
  width: auto;
  transition: 0.1s ease;
  position: relative;  
  flex: none;
  width: 110px;
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
    filter: brightness(1.5);
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
    <CardBox className="Dice" onClick={()=>_setActive(die)} active={props.active === null || props.active === props.index}>
      {props.active !== props.index && (<></>)}
      
      <Icon die={die} index={props.index} size='md'/>
    </CardBox>
  );
};

export default Card;
