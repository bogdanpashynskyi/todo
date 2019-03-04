import React, { Component } from 'react';

import '../App.css';

import AddField from './AddField';
import TodoList from './TodoList';
import TodoArchive from './TodoArchive';
import TodoActive from './TodoActive';
import TodoAll from './TodoAll';
import Counter from './Counter'

let length = 1;

export default class TodoTable extends Component {
	state = {
		todos: [
			{ id: 0, task: 'Buy groceries', completed: false, editMode: false },
		],
		showTips: false,
		newTodo: '',
	}

	onPressInput = (event) => {
		if (event.key === 'Enter') {
			this.handleOnItemAdded()
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
					todos={todos} 
					handleItemCompleted={this.handleItemCompleted}
					changeEditMode={this.changeEditMode}
					updateItem={this.updateItem}
					cancelUpdate={this.cancelUpdate}
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