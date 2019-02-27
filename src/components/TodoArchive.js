import React from 'react'

const TodoArchive = ({ handleArchive }) => {

  return (
    <button
			onClick={() => handleArchive()}
		> Clear Completed
		</button>
	)
}

export default TodoArchive
