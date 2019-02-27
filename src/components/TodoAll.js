import React from 'react'

const TodoAll = ({ showAll }) => {

  return (
    <button
			onClick={() => {showAll()}}
		> All
		</button>
	)
}

export default TodoAll;