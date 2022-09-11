import React, {useState} from 'react';

const Counter = function () {
  const [count, setCount] = useState(0);

  return (
  <div>
  <div>{count}</div>
  <button onClick={() => setCount(count +1)}>Incriment</button>
  <button onClick={() => setCount(count -1)}>Decriment</button>
  </div>
  )
}

export default Counter