
import './App.css';
import NavbarStyle from './components/Navbar';
import AboutMe from './views/AboutMe';
import DisplayProjects from './views/DisplayProjects';
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <div className='backgroundMain'>
        <div className='background'>
          <NavbarStyle />
          <AboutMe />
          <DisplayProjects />
        </div>
      
    </div>
  );
}

export default App;

