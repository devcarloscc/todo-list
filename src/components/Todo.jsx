import React from 'react'
import TodoForm from './TodoForm'

const Todo = ({todo}) => {
  return (
    <div className="todo" key={todo.id}>
            <div className="content">
              <p>{todo.text}</p>
              <p className="category">
                ({todo.category})
              </p>
            </div>
            <div>
              <button type="button">Completar</button>
              <button type="button">X</button>
            </div>
            <TodoForm />
          </div>
  )
}

export default Todo
