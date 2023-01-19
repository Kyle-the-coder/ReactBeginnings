import LukeForm from './components/form';
import { Routes, Route } from 'react-router-dom';
import FormPeople from './components/displayFormPeople';
import FormPlanet from './components/displayFormPlanet';
import './App.css';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route exact path="/" element={<LukeForm/>}/>
      <Route path="/orbs/:planets/:id" element={ <FormPlanet/>}/>
      <Route path="peeps/:people/:id" element={<FormPeople/>}/>
    </Routes>
      
    </div>
  );
}

export default App;

    

