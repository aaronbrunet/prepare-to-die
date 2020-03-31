import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "primereact/button";
import { SelectButton } from "primereact/selectbutton";
import { Spinner } from "primereact/spinner";

const ModifierBox = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  &&&{
  .secondary{     
      background-color: #2ea9bd;      
      &:hover,&:focus{
        background-color: #0e7d8f;
      }
      &:focus{
        box-shadow: 0 0 2px 0.2em #2ea9bd;
      }
    }
  }
`;

const ModSelect = styled(SelectButton)`
  display: inline-block;
  &&&& {
    .p-highlight {
      background-color: #2ea9bd;
      border-color: #2ea9bd;
      &:hover {
        background-color: #0e7d8f;
        border-color: #2ea9bd;
      }
      &:focus{
      box-shadow: 0 0 2px 0.2em #2ea9bd;
      }
    }
    .p-focus {
      box-shadow: 0 0 2px 0.2em #fe99ba;
      border: 0;
    }
    button {
      border: 0;
      background-color: #b94666;
      &:hover {
        background-color: #843148;
      }
      &:focus {
        box-shadow: 0 0 2px 0.2em #fe99ba;
        border: 0;
      }
    }
  }
`;

const ModButton = styled(Button)`
&&&&{
  display: inline-block;
  border-radius: 10px;
  background: white;
  margin: 0 10px;
  cursor: pointer;
  background-color: #2ea9bd;
  .p-button-text {
    font-size: 16pt;
  }
  &:hover {
    color: #242527;
    background: white;
  }
}
`;

const ModSpinner = styled(Spinner)`
  &&&&{
    width: 15%;
    display: inline-block;
    input {
      width: 100%;
      font-size: 18pt;
      line-height: 1;
      padding: 5px;
      height: 100%;
    }
    button {
      border-radius: 0;
    }
  }
`;

const ModGroup = styled.div`
  width: 100%;
  justify-content: center;
  div[role="group"] {
    display: inline-block;
  }
  &&& {
    button {
      border: 0;
      background-color: #b94666;
      &:hover {
        background-color: #843148;
      }
    }
    input,
    button {
      &:focus {
        box-shadow: 0 0 2px 0.2em #fe99ba;
        border: 0;
      }
    }
  }
`;

const ToggleButton = styled(Button)`
&&&&{  
  color: ${props=>props.toggle === 'true' ? 'white' : '#0e7d8f'};
  background-color: ${props=>props.toggle === 'true' ? '#2ea9bd' : 'white'};  
  .p-button-text {
    font-size: 16pt;
  }
    &:focus,&.p-button-secondary:hover{
        color: ${props=>props.toggle === 'true' ? 'white' : '#0e7d8f'};
        background-color: #0e7d8f;
        background-color: ${props=>props.toggle === 'true' ? '#0e7d8f' : '#c8c8c8'};
      }
      &:focus,&.p-button-secondary:focus{
      box-shadow: 0 0 2px 0.2em #2ea9bd;
    }
}
`;

const ModForm = styled.form`
  display: ${props => (props.toggle === 'true' ? "block" : "none")};
  width: 70%;
  margin: auto;
  margin-top: 10px;  
`;

const Modifier = props => {
  const [modType, setModType] = useState("+");
  const [mod, setMod] = useState(1);
  const [toggle, setToggle] = useState(false);

  const options = [
    { label: "+", value: "+" },
    { label: "-", value: "-" },
    { label: "*", value: "*" },
    { label: "/", value: "/" }
  ];

  let die = props.die;

  const handleInput = input => {
    setMod(input.target.value);
  };

  return (
    <ModifierBox>
      {die.modifier.map((modifier, index) => (
            //<Modifier mod={modifier} key={index}/>
            <ModButton
              key={index}
              onClick={() => props.rmodifier(die, modifier)}
              className='secondary'
              label={modifier}
            />
          ))}
      {die.modifier.length < 3 ? (
        <ToggleButton
          label={`${toggle ? "-" : "+"} Modifier`}
          className="p-button-raised p-button-secondary"
          onClick={() => setToggle(!toggle)}
          toggle={toggle.toString()}
        />
      ) : (
        <h4>Remove a modifier to add a new one</h4>
      )}
      <ModForm
        onSubmit={event => {
          event.preventDefault();
          if (!modType || !mod) return;
          //props.modifier((mod+modType))
          //console.log(modType + mod);
          props.modifier(die, modType + mod);
          setMod(1);
          setModType("+");
          setToggle(false);
        }}
        toggle={toggle.toString()}
      >
        <ModGroup className="p-inputgroup">
          <ModSelect
            value={modType}
            options={options}
            onChange={e => setModType(e.value)}
          />
          <ModSpinner value={mod} onChange={handleInput} min={1} max={100} />
          <Button className='secondary' label="Add" />
        </ModGroup>
      </ModForm>
    </ModifierBox>
  );
};
export default Modifier;
