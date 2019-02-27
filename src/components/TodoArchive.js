import React from 'react'

const TodoArchive = ({ handleArchive }) => {

  return (
    <button
			onClick={() => handleArchive()}
		> Archive 
		</button>
	)
}

export default TodoArchive
