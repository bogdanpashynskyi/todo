import React, { Component } from 'react';

export default class AddField extends Component {
    render() {
        return (
					<div>
						<input type="text" placeholder="Add task..."></input>
						<button> Add Task </button>
					</div>

        )
    }
}