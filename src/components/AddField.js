import React from 'react';

const AddField = (props) => {
	const { onItemChange, onItemAdded, onClearInput } = props;
	return (	
	<form onSubmit={(event) => {
		event.preventDefault();
		onItemAdded()
	}
		}>
		<div>
			<input 
				onChange={(event) => onItemChange(event.target.value)}
				className="App__todo-input"
				value={onClearInput}
				type="text" 
				placeholder="Add task..."
			>
			</input>
			<button
				type="submit"
				className="App__todo-add-btn"
			> 
				Add
			</button>
		</div>
	</form>
)
}

export default AddField