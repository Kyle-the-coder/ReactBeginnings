
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Main from './views/Main';
import OneProduct from './components/OneProduct';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/product/:id" element={<OneProduct/>} />
      </Routes>
      
    </div>
  );
}

export default App;
