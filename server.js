import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors()); // Permitir requisições de outros domínios
app.use(express.json()); // Permitir envio de JSON no body

// Dados simulados (como um banco de dados)
let todos = [
  { id: 1, title: 'Estudar React', completed: false },
  { id: 2, title: 'Aprender Node.js', completed: true },
];

// Rota para buscar todas as tarefas
app.get('/todos', (req, res) => {
  res.json(todos);
});

// Rota para adicionar uma nova tarefa
app.post('/todos', (req, res) => {
  const newTodo = { id: todos.length + 1, ...req.body, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
});

// Iniciar o servidor
app.listen(5001, () => {
  console.log('Servidor rodando em http://localhost:5000');
});