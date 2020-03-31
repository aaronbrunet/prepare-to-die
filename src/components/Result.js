import React from "react";
import styled from "styled-components";

const ResultBox = styled.div`
  display: block;
  background: #2c222f;
  width: 80%;
  margin: auto;
  border-radius: 30px;
  padding: 20px;
  margin-top: 30px;
`;

const Title = styled.h3`
  color: white;
  font-size: ${props=>props.inactive ? '20pt' : '30pt'};
  margin: 5px;  
  opacity: ${props=>props.inactive ? .3 : 1};
`;

const Highlight = styled.span`
  &&& {
    color: #2ea9bd;
    display: inline-block;
    margin: 0 10px;
  }
`;

const Num = styled.h4`
  color: #b94666;
  display: inline-block;
  font-size: 25pt;
  margin: 5px;
`;

const Highlighted = value => {
  return <Highlight>{value}</Highlight>;
};

const Result = props => {
  const roll = props.roll;
  const [name,qty,results,sum,modifier,vantage] = roll;

  /*const diceName = props.roll[0];
  const diceQty = props.roll[1];
  const results = props.roll[2];
  const sum = Math.floor(props.roll[3]);
  const modifier = props.roll[4];
  const vantage = props.roll[5];
  const type = diceName === 'Percentile';*/
  const type = name === 'Percentile';

  return (
    <ResultBox>
      {results ? (
        <>
          <Title>
            {type ? name : qty + name}            
            <Highlight>
              {modifier && modifier.length > 0 && ` (${modifier}) `}
              {vantage && vantage.label !== "Normal" && `(${vantage.label})`}
            </Highlight>
          </Title>
          {results.map((result, index) => (
            <Num key={index}>
              {result}
              {results.length > 0 && index < results.length - 1 && " + "}
            </Num>
          ))}
          <Num>{modifier && modifier.length > 0 && ` ( ${modifier} )`}</Num>
          <Title>
            Result:<Highlight>{sum}{type && '%'}</Highlight>
          </Title>
        </>
      ) : (
        <Title inactive>Roll something!</Title>        
        
      )}
    </ResultBox>
  );
};

export default Result;
