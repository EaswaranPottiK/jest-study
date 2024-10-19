import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [data,setData] = useState("")
  const [text, setText] = useState("")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <input type='text' value={data} onChange={(e)=>setData(e.target.value)} placeholder='Enter a name' className='username'/>
        <button onClick={()=>setText("Hello")}>Print Hello</button>
        <h1>{text}</h1>
      </header>
    </div>
  );
}

export default App;
