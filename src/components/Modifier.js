import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "primereact/button";
import { Dropdown } from "primereact/dropdown";
import { InputText } from "primereact/inputtext";
import { SelectButton } from "primereact/selectbutton";

const ModList = styled.div`
  display: block;
  button {
    display: inline-block;
  }
`;

const ModInput = styled(InputText)`
  width: 60px;
  font-size: 15pt;
`;

const ModSelect = styled(SelectButton)`
  display: inline-block;
`;

const ModButton = styled(Button)`
  display: inline-block;
  border-radius: 10px;
  border: 1px solid white;
  color: grey;
  background: white;
  margin-top: 30px;
  cursor: pointer;
  font-size: 15pt;
  &:hover {
    color: #242527;
    background: white;
  }
`;
const Form = styled.form`
  display: ${props => (props.toggle === true ? "block" : "none")};
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

  const _setmod = val => {
    modType === val ? setModType("") : setModType(() => val);
  };

  const handleInput = input => {
    setMod(input.target.value);
  };

  return (
    <>
      {die.modifier.length < 3 ? (
        <Button
          label={`${toggle ? "-" : "+"}Modifier`}
          className="p-button-raised p-button-secondary"
          onClick={() => setToggle(() => !toggle)}
        />
      ) : (
        <h4>Remove a modifier to add a new one</h4>
      )}
      <Form
        onSubmit={event => {
          event.preventDefault();
          if (!modType || !mod) return;
          //props.modifier((mod+modType))
          console.log(modType + mod);
          props.modifier(die, modType + mod);
          setMod("");
          setModType("+");
          setToggle(false);
        }}
        toggle={toggle}
      >
        
        <div className="p-inputgroup">
          <ModSelect
            value={modType}
            options={options}
            onChange={e => setModType(e.value)}
          />
          <ModInput
            type="number"
            min="1"
            max="10"
            pattern="[0-9]*"
            placeholder="Mod"
            value={mod}
            onChange={handleInput}
          />
        </div>
        <ModList>
          <ModButton label="Add" />
        </ModList>
      </Form>
    </>
  );
};
export default Modifier;
