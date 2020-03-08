import React from "react";
import styled from "styled-components";
import { ReactSVG } from "react-svg";

const IconSVG = styled(ReactSVG)`  
  svg {
    width: 50px;
    width: ${props =>
      props.name === "Percentile" ? (props.size * 0.8)+'px' : props.size+'px'};
    height: 50px;
    height: ${props =>
      props.size+'px'};
    fill: #2ea9bd;
    fill: ${props => (props.rgb ? props.rgb : "#2ea9bd")};
  }
`;
const IconBox = styled.div`
    display: ${props => props.inline ? 'inline-block' : 'block'};
    margin: ${props => props.inline ? '0 10px' : ''};
`;

const Icon = props => {
  const index = props.index;

  const calcColor = (color1, color2, index) => {
    let value1 = ((100 / 6) * index) / 100;
    let value2 = 1 - value1;
    let rgb = [
      Math.round(color1[0] * value1 + color2[0] * value2),
      Math.round(color1[1] * value1 + color2[1] * value2),
      Math.round(color1[2] * value1 + color2[2] * value2)
    ];
    return "rgb(" + rgb.join(",") + ")";
  };

  return (
    <IconBox className='icon-box'>
        <IconSVG
        size={props.size === "lg" ? 100 : 50}
        src={`../icons/dice-${props.die.name}.svg`}
        rgb={calcColor([185, 70, 102], [46, 169, 189], index)}
        name={props.die.name}              
        />
    </IconBox>
  );
};
export default Icon;