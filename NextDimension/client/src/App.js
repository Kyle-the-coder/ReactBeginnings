import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Main from './views/DisplaySearch';
import Content from './views/MainContent';
import axios from 'axios';
import DisplayOne from './views/DisplayOne';
import ButtonEntrance from './views/ButtonEntrance';
import Platforms from './components/Platforms';
import PcResults from './views/PcView';
import XboxResults from './views/XboxView';
import PlaystationResults from './views/PlaystationView';
import SwitchResults from './views/SwitchView';

function App() {
  //Lifting state from form
  const [gameResults, setGameResults] = useState([]);
  const [axResults, setAxResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  //Setting state to form info from Navbar.jsx
  const onGameResult = (gameObj) => {
    setGameResults(gameObj)
  }
  const onSearchTerm = (searchedTerm) => {
    setSearchTerm(searchedTerm)
  }
  //Setting state to be passing down to children
  useEffect(() => {
    axios.get('https://api.rawg.io/api/games?token&')
      .then(res => {
        setAxResults(res.data.results)
      })
      .catch(err => console.log(err))
    }, [])




  return (
    <div className="main">
      <div>
        <Navbar onGameResult={onGameResult} onSearchTerm={onSearchTerm} />
        <div className='contentBox'>

          <Sidebar axResults={axResults} />
          <Routes>
            <Route path="/" element={<ButtonEntrance axResults={axResults}/>}/>
            <Route path="/home" element={<Content  axResults={axResults} />} />
            <Route path="/game" element={<Main searchTerm={searchTerm} prevResults={gameResults} />} />
            <Route path="/game/:id" element={<DisplayOne/>}/>
            <Route path="/game/platforms" element={<Platforms/>}/>
            <Route path="/game/platforms/pc" element={<PcResults/>}/>
            <Route path="/game/platforms/xbox" element={<XboxResults/>}/>
            <Route path="/game/platforms/playstation" element={<PlaystationResults/>}/>
            <Route path="/game/platforms/switch" element={<SwitchResults/>}/>
          </Routes>
        </div>




      </div>
    </div>
  );
}

export default App;
