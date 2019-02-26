import React, { Component } from 'react';
import TodoItem from './TodoItem'

export default class TodoList extends Component {
  render() {
		const todos = this.props.todos;
		
    return (
        <ul>
          {todos.map(item => {
						return <TodoItem key={item.id} todoTask={item.task}/>
					})}
        </ul>
    )
  }
}