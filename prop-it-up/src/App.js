import React from 'react';
import './App.css';
import NewPerson from './components/person';

function App() {
  return (
    <div className="App">
      <NewPerson firstName="Jane" lastName="Doe" age={45} hairColor="Black"/>
      <NewPerson firstName="John" lastName="Smith" age={88} hairColor="Brown"/>
      <NewPerson firstName="Milliard" lastName="Fillmore" age={50} hairColor="Brown"/>
      <NewPerson firstName="Maria" lastName="Smith" age={62} hairColor="Brown"/>
    </div>
  );
}

export default App;
