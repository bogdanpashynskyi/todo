import React, { Component } from 'react';
import '../App.css';
import AddField from './AddField';
import TodoList from './TodoList'

export default class TodoTable extends Component {
	state = {
		todos: [
			{ id: 0, task: 'Buy groceries' },
			{ id: 1, task: 'Take out trash' } 
		],
		newTodo: ''
	}

	handleItemChange = (text) => {
		this.setState( {
			newTodo: text,
		})
	}

	handleOnItemAdded = () => {
		this.setState(({ todos, newTodo }) => {
			let newItem = {
				id: todos.length + 1,
				task: newTodo,
			}

			return {
				todos: [ newItem, ...todos],
				newTodo: '',
			}
		})
	}

  render() {
		const { todos } = this.state;

    return (
			<div>
				<h1>TodoTable</h1>
				<AddField 
					onItemAdded={this.handleOnItemAdded}
					onItemChange={this.handleItemChange}
				/>
				<TodoList todos={todos}/>
			</div>
    )
  }
}