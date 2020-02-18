import React from 'react';
import './App.css';
import Counter from "./containers/Counter/Counter";

function App() {
    document.title ="ReactReduxCounter | A small app to demo Redux state changes";
    document.getElementsByTagName("META")[2].content="A small app to demo React-Redux state changes via props";

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
