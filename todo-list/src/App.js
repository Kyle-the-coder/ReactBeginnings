import React, { useState } from 'react'; 
import Todo from './components/Todo';
import './App.css';

function App() {
  const [oneTodo, setOneTodo] = useState("");
  const [todoList, setTodoList] = useState([]);
  
  
  const handleOnCheck = (checkIndex) => {
    const updateTodo = todoList.map((todo, i ) => {
      
      const updatedTodo = {...todo, complete: !todo.complete}
      if(checkIndex === i){

        return updatedTodo;
      }
      return todo;
      
      
    })
    setTodoList(updateTodo);
  }



  const handleDelete = (deleteIndex) => {
    const filterTodo = todoList.filter((todo, i) =>{
      return i !== deleteIndex;
    });
    setTodoList(filterTodo);
  }

  const createTodo = (e) => {
    e.preventDefault();
    if(oneTodo.length === 0){
      return;
    }

    const todoItem = {
      item: oneTodo,
      complete: false
    }
    
    //setting todo list with new todo plus rest of todos
    setTodoList([...todoList, todoItem])
    setOneTodo("");
  }

  return (
    <div className="App">
      <div className='content my-3 p-2'>
        <form onSubmit={ createTodo }>
          <div className='my-1'>
            <label className='title'>Add to your Todo list:</label>
          </div>
          <div className='my-1'>
            <input type="text" value={oneTodo} onChange={ (e) => setOneTodo(e.target.value)} className='form-control border border-3 border-dark'/>
          </div>

          <button type="submit" className='my-1 button' >Add to List</button>
        </form>

        <div><h5 className='lTitle'>List:</h5></div>
    

          <div className='list'>
            { todoList.map((todo, i) => {
            
            

            return( 
              <Todo key={i} todo={todo} handleOnCheck = {handleOnCheck} i={i} handleDelete={handleDelete}/>
            );

            })}
          </div>
      </div>

    </div>
  );
}

export default App;
