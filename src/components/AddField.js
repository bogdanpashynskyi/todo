import React from 'react';

const AddField = (props) => {
	const { onItemChange, onPressInput, onItemAdded, onClearInput } = props;
	return (	
	<div>
		<input 
			onChange={(event) => onItemChange(event.target.value)}
			onKeyPress={(event) => onPressInput(event)}
			className="App__todo-input"
			value={onClearInput}
			type="text" 
			placeholder="Add task..."
		>
		</input>
		<button
			className="App__todo-add-btn"
			onClick={() => onItemAdded()}
		> 
			Add
		</button>
	</div>
)
}

export default AddField