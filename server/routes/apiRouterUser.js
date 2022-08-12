const apiRouterUser = require('express').Router();

const {
  userSignin, 
} = require('../controllers/userController')

apiRouterUser.route('/signin')
  .post(userSignin)

module.exports = apiRouterUser
