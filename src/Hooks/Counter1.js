import React, { useState } from 'react';
import CounterButton from './CounterButton';

const Counter1 = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState('');


  
  //count initial value
  //setCount function

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const showGreeting = () => setMessage('Hellow World 101');

  ////////////////////////////////////////////////////

  return (
    <div>
      <h2>Counter 1</h2>
      <p>Counter: {count}</p>
      <CounterButton text='+1' action={increment} />
      <CounterButton text='-1' action={decrement} />
      <br />
      <CounterButton text='Show Greeting' action={showGreeting} />
      <p>{message}</p>
    </div>
  );
};

export default Counter1;

//Creating samplified functional example for this state
// state:  {
//     count: 0,
//     message: "",
// }

//const [count, set] = useState(0)
//this.setState({count: 1})
