import React from 'react';

const CounterButton = ({ text, action }) => {
  //   let a = 1;
  return <button onClick={action}>{text}</button>;
};

export default CounterButton;
