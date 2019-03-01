import React from 'react'

const Counter = ({ todos }) => {
	console.log(todos[1]);

	let count = 0; 
	for (let todo of todos) {
		if (todo.completed) {
			count++;
		}
	}
	return (
			<div className="App__todo-counter"> 
				{count} / {todos.length}
			</div>
	)
}
export default Counter