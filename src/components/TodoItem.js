import React from 'react';
import '../App.css';

const TodoItem = ({
	todoTask, 
	handleItemCompleted,
	itemId, 
	completed,
	changeEditMode,
	editMode,
	updateItem,
	cancelUpdate
}) => {
	const renderEditView = () => {
		return <div>
			<input className="App__todo-edit-input"
			type="text"
			defaultValue={todoTask}
			autoFocus
			onKeyPress={(event) => updateItem(event, itemId)}
			onKeyDown={(event) => cancelUpdate(event, itemId)}
			/>
			</div>
		}
	const renderDefaultView = () => {
		return <div>				
		<li 
			className={`App__todo-item-text ${ completed ? "App__todo-item-completed" : "" }`}
		>
		{todoTask}
		</li>
		</div>
	}

  return (
    <div className="App__todo-item">
			<input
				type="checkbox"
				onChange={() =>	handleItemCompleted(itemId)}
			>	
			</input>
			<div 
			onDoubleClick={() => changeEditMode(itemId)}
			>
			{
				editMode ? 
				renderEditView() : 
				renderDefaultView()
			}
			</div>

    </div>
  )
}

export default TodoItem;

