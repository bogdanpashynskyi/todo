import React from 'react'

const TodoAll = ({ showAll }) => {

  return (
    <button
		  className="App__todo-btn"
			onClick={() => {showAll()}}
		> All
		</button>
	)
}

export default TodoAll;