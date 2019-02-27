import React, { Component } from 'react';
import '../App.css';
import AddField from './AddField';
import TodoList from './TodoList';
import TodoArchive from './TodoArchive'

export default class TodoTable extends Component {
	state = {
		todos: [
			{ id: 0, task: 'Buy groceries', completed: false },
			{ id: 1, task: 'Take out trash', completed: false } 
		],
		newTodo: ''
	}

	handleArchive = () => {
		this.setState(({ todos }) => {
			let remainingTasks = todos.filter(item => item.completed);
			return {
				todos: remainingTasks,
			}
		})
	}

	handleItemChange = (text) => {
		this.setState( {
			newTodo: text,
		})
	}

	handleOnItemAdded = () => {

		if (!this.state.newTodo) {
			return 
		}

		this.setState(({ todos, newTodo }) => {
			let newItem = {
				id: todos.length + 1,
				task: newTodo,
				completed: false,
			}

			return {
				todos: [ newItem, ...todos],
				newTodo: '',
			}
		})
	}

	handleItemCompleted = (itemId) => {
		this.setState(({ todos }) => {
			let index = todos.findIndex(item => item.id === itemId);
			todos[index].completed = !todos[index].completed;
			return {
				todos,
			}
		})		
	}

  render() {
		const { todos, newTodo } = this.state;

    return (
			<div>
				<h1>TodoTable</h1>
					<AddField 
						onItemAdded={this.handleOnItemAdded}
						onItemChange={this.handleItemChange}
						onClearInput={newTodo}
					/>
					<TodoArchive 
						handleArchive={this.handleArchive} 
					/>
					<TodoList 
						todos={todos} 
						handleItemCompleted={this.handleItemCompleted}
					/>
			</div>
    )
  }
}