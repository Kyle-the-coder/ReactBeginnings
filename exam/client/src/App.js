import { Routes, Route } from 'react-router-dom';
import './App.css';
import PetForm from './components/PetForm';
import Main from './views/Main';
import OnePet from './components/OnePet';
import {useState, useEffect} from 'react';
import axios from 'axios'
import Update from './views/Update';

function App() {
  //Handle Delete
  const [pets, setPets] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/pet')
            .then(res=>{
                setPets(res.data);
            })
            .catch(err=>console.log(err))
    },[])

  //Handle Delete
  const removeFromDom = petId => {
      setPets(pets.filter(pet => pet._id !== petId));
  }

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/pet' element={<PetForm/>}/>
        <Route path='/pet/:id' element={<OnePet removeFromDom={removeFromDom}/>}/>
        <Route path='/pet/:id/edit' element={<Update/>}/>
      </Routes>
    </div>
  );
}

export default App;
