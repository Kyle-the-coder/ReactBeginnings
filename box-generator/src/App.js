import BoxForm from './components/box';
import DisplayBox from './components/displayBox';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [currentBox, setCurrentBox] = useState("");
  const [boxArr] = useState([])

  const youGotBox = (newBox) => {
    setCurrentBox( newBox, boxArr.push(newBox) );
    console.log(boxArr)
  }
  return (
    <div className="App">
      <BoxForm onNewBox={ youGotBox }/>
      <DisplayBox color={currentBox} bArr={boxArr}/>
    </div>
  );
}

export default App;
