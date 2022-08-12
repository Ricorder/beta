const apiRouterTodos = require('express').Router();

const {
  toDoSearcheRender,
} = require('../controllers/todoController');

apiRouterTodos.route('/')
  .post(toDoSearcheRender)

module.exports = apiRouterTodos
