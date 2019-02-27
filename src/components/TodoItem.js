import React from 'react';
import '../App.css';

const TodoItem = ({
	todoTask, 
	handleItemCompleted,
	itemId, 
	completed
}) => {

	console.log(completed)
  return (
    <div className="App__todo-item">
			<input 
				type="checkbox"
				onChange={() => {
					handleItemCompleted(itemId)
				}}
			>	
			</input>
			<li className={completed ? "App__todo-item-completed" : ""}>
				{todoTask}
			</li>
    </div>
  )
}

export default TodoItem;

