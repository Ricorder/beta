require('https').globalAgent.options.ca = require('ssl-root-cas').create();
const fs = require('fs');
const cors = require('cors');
const logger = require('morgan');
const express = require('express');
// const session = require('express-session');
const { sessionConfig } = require('./ServDB/config');
const { createErr, cathErrAndSendAnswer } = require('./middleware/checkErrors');

const apiRouterUser = require('./routes/apiRouterUser');
const apiRouterTodos = require('./routes/apiRouterTodos');
const apiRouterCounter = require('./routes/apiRouterCounter');

const app = express();

app.set('trust proxy', 1);
// app.set('cookieName', 'connect.sid');

app.use(logger('dev'));
app.use(express.json());
// app.use(session(sessionConfig));
app.use(express.urlencoded({ extended: true }));
app.use(cors({ credentials: true, origin: "http://localhost:19006" }));
app.use(logger('common', { stream: fs.createWriteStream('./access.log', { flags: 'a' }) }));

app.use('/api/v1/user', apiRouterUser);
app.use('/api/v1/todos', apiRouterTodos);
app.use('/api/v1/counter', apiRouterCounter);

app.use(createErr, cathErrAndSendAnswer);

module.exports = app;