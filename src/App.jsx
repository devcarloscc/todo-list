import { useState } from 'react'
import './App.css'
import Todo from './components/Todo'
import TodoForm from './components/TodoForm'


function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade X no React",
      category: "Trabalho",
      isComplet: false
    },
    {
      id: 2,
      text: "Refatorar código do componente Y",
      category: "Trabalho",
      isComplet: false
    },
    {
      id: 3,
      text: "Estudar conceito de hooks no React",
      category: "Estudo",
      isComplet: false
    },
    {
      id: 4,
      text: "Implementar API de autenticação com Node",
      category: "Trabalho",
      isComplet: false
    },
    {
      id: 5,
      text: "Fazer deploy da aplicação no Vercel",
      category: "Trabalho",
      isComplet: false
    },
    {
      id: 6,
      text: "Revisar documentação sobre Redux",
      category: "Estudo",
      isComplet: false
    },
    {
      id: 7,
      text: "Testar integração com a API de pagamentos",
      category: "Trabalho",
      isComplet: false
    },
    {
      id: 8,
      text: "Fazer revisão de código do projeto final",
      category: "Estudo",
      isComplet: false
    }
  ])

  const addTodo = (text, category) => {

    const newTodos = [...todos, {
      id: Math.floor(Math.random() * 10000),
      text,
      category,
      isComplet: false,
    },
    ];
    setTodos(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = [...todos]
    const filteredTodos = newTodos.filter((todo) => 
      todo.id != id ? todo : null)
    setTodos(filteredTodos)
  }

  const completeTodo = (id) => {
    const newTodos = [...todos]
    newTodos.map((todo) => todo.id === id ? todo.isComplet = !todo.isComplet : todo)
    setTodos(newTodos)

  }


  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo key={todo.id} todo={todo} removeTodo={removeTodo} completeTodo={completeTodo}/>
        ))}
      </div>
      <TodoForm addTodo={addTodo} />
    </div>
  )
}

export default App
