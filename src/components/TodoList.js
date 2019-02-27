import React from 'react';
import TodoItem from './TodoItem'

const TodoList = (props) => {
  const { todos, handleItemCompleted, } = props;	
    return (
      <ul>
        {todos.map(item => {
          return <TodoItem 
                  key={item.id}
                  itemId={item.id} 
                  todoTask={item.task}
                  handleItemCompleted={handleItemCompleted}
                  completed={item.completed}
                />
				})}
      </ul>
    )
}

export default TodoList;