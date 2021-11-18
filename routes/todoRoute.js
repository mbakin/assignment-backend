const express = require('express');
const {
  createTodo,
  fetchTodos,
  fetchTodo,
  updateTodo,
  deleteTodo,
} = require('../controller/todoCtrl');

const route = express.Router();

route.post('/todos', createTodo);
route.get('/todos', fetchTodos);
route.get('/todos/:id', fetchTodo);
route.put('/todos/:id', updateTodo);
route.delete('/todos/:id', deleteTodo);

module.exports = { route };