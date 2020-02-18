import React from 'react';
import './App.css';
import Counter from "./containers/Counter/Counter";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        React-Redux Counter
      </header>

      <Counter></Counter>
    </div>
  );
}

export default App;
