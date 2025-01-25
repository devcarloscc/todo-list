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


  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='todo-list'>
        {todos.map((todo) => (
          <Todo todo = {todo}/>
        ))}
      </div>
      <TodoForm />
    </div>
  )
}

export default App
