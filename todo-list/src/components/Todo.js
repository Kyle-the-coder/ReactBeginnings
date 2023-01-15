import React from 'react';

const Todo = (props) => {
    const todoClasses = [];

    if(props.todo.complete){
        todoClasses.push("strike")
    }


    return (<div key={props.i} className="my-1 p-1">
    <input type="checkbox" onChange={(e) => {props.handleOnCheck(props.i)}} checked={props.todo.complete} className="mx-1"/>
    <span className={todoClasses.join(" ")}>{props.todo.item}</span>
    <button onClick={ (e) => { props.handleDelete(props.i) }} className="dButton">delete</button>
    </div>);
}

export default Todo;