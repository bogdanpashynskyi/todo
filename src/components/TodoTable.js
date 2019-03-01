import React, { Component } from 'react';

import '../App.css';

import AddField from './AddField';
import TodoList from './TodoList';
import TodoArchive from './TodoArchive';
import TodoActive from './TodoActive';
import TodoAll from './TodoAll';
import Counter from './Counter'

export default class TodoTable extends Component {
	state = {
		todos: [
			{ id: 0, task: 'Buy groceries', completed: false },
			{ id: 1, task: 'Take out trash', completed: false } 
		],
		newTodo: '',
	}

	handleArchive = () => {
		this.setState(({ todos }) => {
			let remainingTasks = todos.filter(item => !item.completed);
			return {
				todos: remainingTasks,
			}
		})
	}

	showActive = () => {
		this.setState(({ todos }) => {
			let activeTasks = todos.filter(item => !item.completed)
			return {
				todos: activeTasks,
			}
	})
	}

	showAll = () => {
		this.setState(( { todos }) => {
			let allTasks = todos.map(item => item)
			return {
				todos: allTasks,
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
				todos: [ newItem, ...todos ],
				newTodo: '',
			}
		})
	}

	handleItemCompleted = (itemId) => {
		this.setState(({ todos }) => {
			let todosList = [...todos];
			let index =  todosList.findIndex(item => item.id === itemId);
			todosList[index].completed = !todosList[index].completed;
			return {
				todos: todosList,
			}  
		})		
	}

  render() {
		const { todos, newTodo } = this.state;

    return (
			<div>
				<h1>Your todo list</h1>
				<AddField 
						onItemAdded={this.handleOnItemAdded}
						onItemChange={this.handleItemChange}
						onClearInput={newTodo}
					/>
					<TodoList 
						todos={todos} 
						handleItemCompleted={this.handleItemCompleted}
					/>
					<TodoAll 
						showAll={this.showAll}
					/>
					<TodoArchive 
						handleArchive={this.handleArchive} 
					/>
					<TodoActive 
						showActive={this.showActive}
					/>
					<Counter 
						todos={todos}
					/> 
					
			</div>
    )
  }
}