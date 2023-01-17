
import './App.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
function App() {

const [pokeList, setPokeList] = useState([]);


const findPoke = async() => {
  const pokeResponse = await axios.get("http://pokeapi.co/api/v2/pokemon/?limit=811");
  setPokeList(pokeResponse.data.results);
  console.log(pokeResponse.data.results);
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
