import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  let addition = () => {
    setCount(count + 1)
  }

  let soustraction = () => {
    if (count === 0) {
      return;
    } else {
      setCount(count - 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter with Hooks</h1>
        <h2>{count}</h2>
        <button onClick={soustraction}>-</button>
        <button onClick={addition}>+</button>
      </header>
    </div>
  );
}

export default App;
