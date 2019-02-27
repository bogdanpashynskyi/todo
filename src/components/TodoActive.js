import React from 'react'

const TodoActive = ({ showActive }) => {

  return (
    <button
			onClick={() => {showActive()}}
		> Active
		</button>
	)
}

export default TodoActive;