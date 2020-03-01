import React, { useState } from "react";
import styled from "styled-components";

const ModList = styled.div`
  display: block;
  button {
    display: inline-block;
  }
`;

const ModInput = styled.input`
  width: 60px;
  font-size: 15pt;
`;
const Button = styled.button`
  border-radius: 10px;
  border: 1px solid white;
  color: white;
  background: transparent;
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
  const [modType, setModType] = useState("");
  const [mod, setMod] = useState("");
  const [toggle, setToggle] = useState(false);

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
        <Button type="button" onClick={() => setToggle(() => !toggle)}>
          {toggle ? "-" : "+"} Modifier
        </Button>
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
          setModType("");
          setToggle(false);
        }}
        toggle={toggle}
      >
        {modType}
        <ModInput
          type="number"
          pattern="[0-9]*"
          placeholder="Mod"
          value={mod}
          onChange={handleInput}
        />
        <ModList>
          <Button type="button" onClick={() => _setmod("+")} name="+">
            +
          </Button>
          <Button type="button" onClick={() => _setmod("-")} name="-">
            -
          </Button>
          <Button type="button" onClick={() => _setmod("*")} name="*">
            *
          </Button>
          <Button type="button" onClick={() => _setmod("/")} name="/">
            /
          </Button>
          <Button>Add</Button>
        </ModList>
      </Form>
    </>
  );
};
export default Modifier;
