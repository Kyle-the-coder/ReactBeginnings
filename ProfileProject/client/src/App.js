
import './App.css';
import NavbarStyle from './components/Navbar';
import AboutMe from './views/AboutMe';
import DisplayProjects from './views/DisplayProjects';
import ContactMe from './views/ContactMe';
import { useState } from 'react';
import LandingPage from './views/LandingPage';
import SkillsList from './views/SkillsList';


function App() {
  const [totalView, setTotalView] = useState(true)

  const changeView = () => {
    if (totalView === true) {
      setTotalView(false)
    } else if (totalView === false) {
      setTotalView(true)
    }

  }
  return (
    <div className='backgroundMain'>
      <div className='background'>

        <NavbarStyle />

        <LandingPage />

        <AboutMe />
        <SkillsList changeView={changeView}/>
        <DisplayProjects totalView={totalView} />
        <ContactMe />
      </div>

    </div>
  );
}

export default App;

