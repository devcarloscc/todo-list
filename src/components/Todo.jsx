import React from 'react'
import TodoForm from './TodoForm'

const Todo = ({ todo }) => {
  return (
    <div className="todo" key={todo.id}>
      <div className="content">
        <p>{todo.text}</p>
        <p className="category">
          ({todo.category})
        </p>
      </div>
      <div>
        <button className='complete' type="button">Completar</button>
        <button className='remove ' type="button">X</button>
      </div>
    </div>
  )
}

export default Todo
