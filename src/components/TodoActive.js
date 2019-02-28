import React from 'react'

const TodoActive = ({ showActive }) => {

  return (
    <button
			className="App__todo-btn"
			onClick={() => {showActive()}}
		> Active
		</button>
	)
}

export default TodoActive;