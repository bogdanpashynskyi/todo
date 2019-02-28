import React from 'react'

const TodoArchive = ({ handleArchive }) => {

  return (
    <button
			className="App__todo-btn"
			onClick={() => handleArchive()}
		> Clear Completed
		</button>
	)
}

export default TodoArchive
