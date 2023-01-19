import Home from './components/home';
import Num from './components/Num';
import Hello from './components/Hello';
import Color from './components/Color';
import { Routes, Route, Link, useParams } from 'react-router-dom';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/color/:userWordColor/:userBgColor" element={<Color/>}/>
        <Route path="/num/:userNum" element={<Num/>}/>
        <Route path="/hello/:userWord" element={<Hello/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
