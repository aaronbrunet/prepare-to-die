import React from "react";
import styled from "styled-components";

const Dice = styled.div`
  display: inline-block;
  border: 1px solid grey;
  border-radius: 10px;
  margin: 10px;
  padding: 15px;
  color: white;
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

  &:hover,
  &:active {
    color: red;
    border-color: red;
  }
`;

const Card = props => {  
  let die = props.die;

  return (
    <Dice className="Dice" onClick={() => props.setDie(die)}>
      <h4>{die.name}</h4>
      <p>Sides: {die.sides}</p>
    </Dice>
  );
};

export default Card;
