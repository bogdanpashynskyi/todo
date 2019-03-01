import React, { Component } from 'react';

export default class AddField extends Component {
	handleOnItemAdded = this.props.onItemAdded;
	handleOnItemChange = this.props.onItemChange;
	
  render() {
		const onClearInput = this.props.onClearInput;
    return (	
			<div>
				<input 
					onChange={(event) => {
						this.handleOnItemChange(event.target.value)
					}}
					className="App__todo-input"
					value={onClearInput}
					type="text" 
					placeholder="Add task..."
				>
				</input>
				<button
					className="App__todo-add-btn"
					onClick={() => {
					this.handleOnItemAdded()
					}}
				> 
					Add
				</button>
			</div>
    )
  }
}