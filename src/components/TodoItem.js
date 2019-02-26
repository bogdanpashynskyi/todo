import React from 'react';
import '../App.css';

const TodoItem = ({todoTask}) => {
  return (
    <div className="App__todo-item">
      <input type="checkbox"></input>
      <li> {todoTask} </li>
    </div>
  )
}

export default TodoItem;

