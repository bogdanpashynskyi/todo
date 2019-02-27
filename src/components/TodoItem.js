import React from 'react';
import '../App.css';

const TodoItem = ({
	todoTask, 
	handleItemCompleted,
	itemId, 
	completed
}) => {
  return (
    <div className="App__todo-item">
			<input 
				type="checkbox"
				onChange={() => {
					handleItemCompleted(itemId)
				}}
			>	
			</input>
			<li className="App__todo-item-completed">
				{todoTask} {itemId}
			</li>
    </div>
  )
}

export default TodoItem;

