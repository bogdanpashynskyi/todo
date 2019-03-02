import React from 'react';
import TodoItem from './TodoItem'

const TodoList = (props) => {
  const { 
    todos,
    handleItemCompleted,
    changeEditMode,
    updateItem,
    cancelUpdate
  } = props;	
    return (
      <ul className="App__todo-list">
        {todos.map(
          item =>
          <TodoItem 
            key={item.id}
            itemId={item.id} 
            todoTask={item.task}
            handleItemCompleted={handleItemCompleted}
            completed={item.completed}
            changeEditMode={changeEditMode}
            editMode={item.editMode}
            updateItem={updateItem}
            cancelUpdate={cancelUpdate}
          />
				)}
      </ul>
    )
}

export default TodoList;