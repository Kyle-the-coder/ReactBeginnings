
import './App.css';
import React, { useState } from 'react';

function App() {

const [pokeList, setPokeList] = useState([])


const findPoke = () => {
  fetch("https://pokeapi.co/api/v2/pokemon")
  .then((response) => response.json())
  .then((response) => {
    console.log(response);
    setPokeList(response.results)
    console.log(pokeList)
  })
}
    

  return (
    <div className="App">
      <button className='button' onClick={ findPoke }><h1>Fetch Pokemon</h1></button>
      
      <div>
        
      <ul>
        {pokeList.map((item, i) => (
          <li key={i}>{item.name}</li>
        ))}
      </ul>
      
      </div>
      
    </div>
  );
}

export default App;
