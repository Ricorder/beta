const ToDo = require('../models/todo');

async function counterRender (req, res) {
  const {nickname} = req.body;
  const doneTodo = await ToDo.find({completed: true, author: nickname})
  return res.json(doneTodo.length)
}

async function oneCounterRender (req, res) {
  const {nickname} = req.body;
  const doneTodo = await ToDo.find({completed: true, author: nickname})
  return res.json(doneTodo.length)
}

module.exports = {
  counterRender,
  oneCounterRender
};
