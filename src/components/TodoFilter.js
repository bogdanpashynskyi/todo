import React from 'react'

const TodoFilter = ({ onFilterChange}) => {

  return (
    <div>
			<button
			value="completed"
			className="App__todo-btn"
			onClick={(event) => onFilterChange(event)}
			>
			Completed
			</button>
			
			<button
			value="all"
			className="App__todo-btn"
			onClick={(event) => onFilterChange(event)}
			>
			All
			</button>

			<button
			value="active"
			className="App__todo-btn"
			onClick={(event) => onFilterChange(event)}
			>
			Active
			</button>
		</div>
	)
}

export default TodoFilter
