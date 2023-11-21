import React, { useState } from 'react';
import './pr1.css';
const Counter = () => {
  // Use state to track the count
  const [count, setCount] = useState(0);

  // Function to increase the count
  const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
  };

  return (
    <div>
      <p className='main'>Count: {count}</p>
      <button className ='butt' onClick={increaseCount}>Increment</button>
    </div>
  );
};

export default Counter;