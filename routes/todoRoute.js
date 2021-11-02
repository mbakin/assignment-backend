const express = require('express');
const {
  createTodo,
  fetchTodos,
  fetchTodo
} = require('../controller/todoCtrl');

const route = express.Router();

route.post('/todos', createTodo);
route.get('/todos', fetchTodos);
route.get('/todos/:id', fetchTodo);

module.exports = { route };