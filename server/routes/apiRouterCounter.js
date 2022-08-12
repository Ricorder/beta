const apiRouterCounter = require('express').Router();

const {
  counterRender,
  oneCounterRender
} = require('../controllers/counterController');

apiRouterCounter.route('/')
  .post(counterRender)
  .put(oneCounterRender)

module.exports = apiRouterCounter
