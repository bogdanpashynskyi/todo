import React, { Component } from 'react';

import '../App.css';

import AddField from './AddField';
import TodoList from './TodoList';
import TodoFilter from './TodoFilter';
import Counter from './Counter'

let length = 0;

export default class TodoTable extends Component {
	state = {
		todos: [
			{ id: 999, task: 'Buy groceries', completed: false, editMode: false },
			{ id: 1000, task: 'Go for a walk', completed: false, editMode: false },
		],
		filterMode: 'all',
		showTips: false,   
		newTodo: '',
	}

	handleArchive = () => {
		this.setState(({ todos }) => {
			let todosList = [...todos]

			let remainingTasks = todosList.filter(item => !item.completed)

			return {
				todos: remainingTasks,
			}
		})
	}

	onFilterChange = (event) => {
		let filterMode = event.target.value;
		this.setState({ filterMode })
	}

	handleFilter = (todos) => {
		let filter = this.state.filterMode;
		switch(filter) {
			case 'all': 
			return todos;
			case 'active':
			return todos.filter(item => !item.completed);
			case 'completed': 
			return todos.filter(item => item.completed)
			default: 
				return todos;
		}
	}

	changeEditMode = (itemId) => {
		this.setState(({ todos, showTips }) => {
			let todosList = [...todos];
			let updatedTodoList = todosList.map(el => {
				return {...el, editMode: el.id === itemId}
		  })
			return {
				todos: updatedTodoList,
				showTips: !showTips,
			}
		}) 
	}

	updateItem = (event, itemId) => {
		let updatedItem = event.target.value;

		if (!updatedItem) {
			return
		}

		if (event.key === 'Enter') {
			this.setState(({ todos }) => {
				let todosList = [...todos];
				let updatedTodosList = todosList.map(item => {
					return {
						...item, 
						task: item.id === itemId ? updatedItem : item.task, 
						editMode: false}
				})
				return {
					todos: updatedTodosList,
					showTips: false,
				}
			})
		}
	}

	cancelUpdate = (event, itemId) => {
		if (event.key === 'Escape') {
			this.setState(({ todos }) => {
				let todosList = [...todos];
				let originalTodosList = todosList.map(item => {
					return { ...item, editMode: false}
				})
				return {
					todos: originalTodosList,
					showTips: false,
				}
			})
		}
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
				id: length++,
				task: newTodo,
				completed: false,
				editMode: false,
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
			let updatedTodosList =  todosList.map(item => {
				return {
					...item, 
					completed: item.id === itemId ? !item.completed : item.completed,
				}
			});
			return {
				todos: updatedTodosList,
			}  
		})		
	}

  render() {
		const { todos, newTodo, showTips } = this.state;
		let filteredTodos = this.handleFilter(todos);
    return (
			<div>
				<h1>Your todo list</h1>
				<AddField 
					onItemAdded={this.handleOnItemAdded}
					onItemChange={this.handleItemChange}
					onClearInput={newTodo}
					onPressInput={this.onPressInput}
				/>			
				<TodoList 
					todos={filteredTodos} 
					handleItemCompleted={this.handleItemCompleted}
					changeEditMode={this.changeEditMode}
					updateItem={this.updateItem}
					cancelUpdate={this.cancelUpdate}
				/>
				<TodoFilter 
					onFilterChange={this.onFilterChange}
				/>
				<button
				className="App__todo-btn"
				onClick={() => this.handleArchive(todos)}> Archive 
				</button>	
				<Counter 
					todos={todos}
				/> 
				<div className="App__todo-tips">
				{ showTips ? <div> 
					<p>Press 'Esc' to cancel changes</p>
					<p>Press 'Enter' to update the item</p>
				</div> : <div> Doubleclick to change the item </div> }
				</div>
			</div>
    )
  }
}