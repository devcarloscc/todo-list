import React from 'react'
import TodoForm from './TodoForm'

const Todo = ({ todo, completeTodo, removeTodo }) => {
  return (
    <div className="todo" key={todo.id}
      style={{ textDecoration: todo.isComplet ? "line-through" : "" }}
    >
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">
          ({todo.category})
        </p>
      </div>
      <div>
        <button className='complete' type="button" onClick={() => completeTodo(todo.id)} >Completar</button>
        <button className='remove ' type="button" onClick={() => removeTodo(todo.id)}>X</button>
      </div>
    </div>
  )
}

export default Todo
