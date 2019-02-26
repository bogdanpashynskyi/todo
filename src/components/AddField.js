import React, { Component } from 'react';

export default class AddField extends Component {
	handleOnItemAdded = this.props.onItemAdded;
	handleOnItemChange = this.props.onItemChange;

  render() {
    return (
			<div>
				<input 
					onChange={(event) => {
						this.handleOnItemChange(event.target.value)
					}}
					type="text" 
					placeholder="Add task..."
				>
				</input>
				<button
					onClick={() => {
					this.handleOnItemAdded()
					}}
				> 
					Add Task 
				</button>
			</div>
    )
  }
}