
import './App.css';
import NavbarStyle from './components/Navbar';
import AboutMe from './views/AboutMe';
import DisplayProjects from './views/DisplayProjects';
import { Routes, Route } from 'react-router-dom'
import ContactMe from './views/ContactMe';
import EmailModal from './components/EmailModal';
import { InView } from "react-intersection-observer";
import { useState } from 'react';


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

        <InView onChange={changeView}>
          {({ ref }) => (

            <div ref={ref}>
              <NavbarStyle />
            </div>
          )}
        </InView>


        <AboutMe />
        <DisplayProjects totalView={totalView} />
        <ContactMe />
      </div>

    </div>
  );
}

export default App;

