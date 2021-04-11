import React from 'react';
import { getSvgs } from './svgs';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>SVG illustrations</h1>
        <h3>done by <a href="https://github.com/jagodarybacka">Berry</a></h3>
        <p>SVGs I have made for fun in Inkscape.</p>
      </header>

      <div className="svg-list">{getSvgs()}</div>
    </div>
  );
}

export default App;
