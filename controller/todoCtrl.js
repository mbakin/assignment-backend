const { Todo } = require('../model/Todo');


//Create todo
const createTodo = async (req, res) => {
  //console.log(req.body);
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (error) {
    res.status(400).json(error);
  }
};

//Fetch todos
const fetchTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json(error);
  }
};

//Fetch todo
const fetchTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json(error);
  }
};

//update todo
const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      {
        complete : !req.body.complete
      },
      
    );
    res.status(200).json(todo);
  } catch (error) {
    res.status(400).json(Error);
  }
};

//Delete todo
const deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.send('Todo has succeffully deleted');
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = { createTodo, fetchTodos, fetchTodo, updateTodo, deleteTodo };
