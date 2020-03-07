import React, { useState } from "react";
import { styled as mstyled } from '@material-ui/core/styles';
import styled from "styled-components";
//import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { Input as InputText} from '@material-ui/core';
//import { Button } from "primereact/button";
//import { InputText } from "primereact/inputtext";
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

const ModButton = mstyled(Button)({  
  borderRadius: 10,  
  color: 'grey',  
  marginTop: '30px',
  cursor: 'pointer',
  fontSize: '15pt',
  '& :hover': {
    color: '#242527',
    //background: 'white',
  },
  '& :active': {
    border: '1px solid red',
  }
});
const Form = styled.form`
  display: ${props => (props.toggle === true ? "block" : "none")};
`;

const Modifier = props => {
  const [modType, setModType] = useState("+");
  const [mod, setMod] = useState("");
  const [toggle, setToggle] = useState(false);

  const options = [
    { label: "+", value: "+" },
    { label: "-", value: "-" },
    { label: "*", value: "*" },
    { label: "/", value: "/" }
  ];

  let die = props.die;

  const _setmod = event => {    
    let val = event.target.value;    
    console.log('clicked: ' + val);
    modType === val ? setModType("") : setModType(() => val);
  };

  const handleInput = input => {
    setMod(input.target.value);
  };

  return (
    <>
      {die.modifier.length < 3 ? (
        <Button variant='contained'
          //className="p-button-raised p-button-secondary"
          onClick={() => setToggle(() => !toggle)}
        >{`${toggle ? "-" : "+"}Modifier`}</Button>
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
        {/*<ModSelect
            value={modType}
            options={options}
            onChange={e => setModType(e.value)}
          />*/
        }}
        <ButtonGroup>
          {options.map((option,index)=>
          (<ModButton onClick={event=>_setmod(event)} value={option.value} key={index}>{option.label}</ModButton>)
          )}
        </ButtonGroup>
          <ModInput
            type="number"
            min='1'
            max='10'
            pattern="[0-9]*"
            placeholder="Mod"
            value={mod}
            onChange={handleInput}
          />
        </div>
        <ModList>          
          <ModButton type='submit'>Add</ModButton>
        </ModList>
      </Form>
    </>
  );
};
export default Modifier;
