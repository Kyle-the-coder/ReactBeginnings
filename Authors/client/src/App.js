import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import OneAuthor from './components/OneAuthor';
import Update from './views/UpdateAuthor';
import AuthorForm from './components/AuthorForm';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/" element={ <Main/>}/>
      <Route path='/author' element={<AuthorForm/>}/>
      <Route path="/author/:id" element={<OneAuthor/>}/>
      <Route path="/author/:id/edit" element={<Update/>}/>
    </Routes>
    </div>
  );
}

export default App;
