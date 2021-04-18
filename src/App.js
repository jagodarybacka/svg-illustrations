import React from 'react';
import { getSvgs } from './svgs';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>SVG illustrations</h1>
        <h2>SVGs I have made for fun in Inkscape</h2>
      </header>

      <div className="svg-list">{getSvgs()}</div>

      <footer><span>❤ SVG illustrations made by <a href="https://github.com/jagodarybacka">Jagoda Berry Rybacka</a> in 2021 ❤</span></footer>
    </div>
  );
}

export default App;
