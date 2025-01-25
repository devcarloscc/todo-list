import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Newtodo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  // Buscar tarefas ao carregar a página
  useEffect(() => {
    axios.get('http://localhost:5000/todos')
      .then(response => setTodos(response.data))
      .catch(error => console.error('Erro ao buscar tarefas:', error));
  }, []);

  // Adicionar uma nova tarefa
  const addTodo = () => {
    if (!newTodo) return;

    axios.post('http://localhost:5000/todos', { title: newTodo })
      .then(response => {
        setTodos([...todos, response.data]); // Atualizar a lista de tarefas
        setNewTodo(''); // Limpar o campo de input
      })
      .catch(error => console.error('Erro ao adicionar tarefa:', error));
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h1>Todo List</h1>

      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Nova tarefa"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Adicionar</button>
      </div>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.title} {todo.completed ? '✅' : '❌'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Newtodo;