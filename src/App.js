import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
function App() {
  const [reverse, setReverse] = useState('reverse');

  function handleReverse() {
    reverse ? setReverse('') : setReverse('reverse');
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className={`App-logo ${reverse}`} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
        <button className={'App-button-reverse'} onClick={handleReverse} type="button">
          click to reverse
        </button>
      </header>
    </div>
  );
}

export default App;
