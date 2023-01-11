
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Navigation from './components/Navigation';
import SubContents from './components/SubContents';
import Advertisement from './components/Advertisement';

function App() {
  return (
    <div className="app">
      <div className='nav'>
        <Header />
      </div>
      <div className='mainContent'>
        <Navigation/>


      <Main>
      <div className='top mb-4'>
        <SubContents/>
        <SubContents/>
        <SubContents/>
      </div>
      <div className='bottom'>

        <Advertisement/>
      </div>
      </Main>
      </div>
    </div>
  );
}

export default App;
