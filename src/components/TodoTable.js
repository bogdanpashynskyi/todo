import React, { Component } from 'react';
import '../App.css';
import AddField from './AddField';
import TodoList from './TodoList'

export default class TodoTable extends Component {
    render() {
        return (
					<div>
						<h1>TodoTable</h1>
            <AddField />
						<TodoList />
					</div>

        )
    }
}