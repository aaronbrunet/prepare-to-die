import React from "react";
import styled from "styled-components";

const Title = styled.h3`
  color: white;
  font-size: 25pt;
  margin: 5px;
`;

const Highlight = styled.span`
&&&{
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


const Highlighted = (value) => {
return(
<Highlight>{value}</Highlight>
  );
}

const Result = props => {
  const diceName = props.roll[0];
  const diceQty = props.roll[1];
  const results = props.roll[2];
  const sum = props.roll[3];
  const modifier = props.roll[4];
  const vantage = props.roll[5]

  return (
    <>
      {results ? (
        <>
          <Title>
            {diceName === "Percentile" ? diceName : diceQty + diceName}
            {modifier && modifier.length > 0 && ` (${modifier}) `}
            <Highlight>{vantage && vantage.label!=='Normal' && vantage.label}</Highlight>        
          </Title>
          {results.map((result, index) => (
            <Num key={index}>
              {result}
              {results.length > 0 && index < results.length - 1 && ", "}
            </Num>
          ))}{modifier && modifier.length > 0 && ` ( ${modifier} )`}
          <Title>Result:<Highlight>{sum}</Highlight></Title>
        </>
      ) : (
        <Title>Roll something!</Title>
      )}
    </>
  );
};

export default Result;
