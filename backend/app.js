const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const rolesRoutes = require('./api/routes/roles');
const usersRoutes = require('./api/routes/users');
const customersRoutes = require('./api/routes/customers');
const ordersRoutes = require('./api/routes/assistance');

const app = express();

mongoose.connect(`mongodb://mongo_admin:${process.env.MONGO_ATLAS_PW}@${process.env.MONGO_ATLAS_SERVER}`, {useMongoClient: true});
mongoose.Promise = global.Promise;

app.use(morgan('dev'));
app.use(`/${process.env.REPOSITORY_PATH}`, express.static(process.env.REPOSITORY_PATH));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// CORS
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if (request.method === 'OPTIONS') {
    response.header('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
    return response.status(200).json({});
  }

  next();
});

app.use('/roles', rolesRoutes);
app.use('/users', usersRoutes);
app.use('/customers', customersRoutes);
app.use('/orders', ordersRoutes);

// Error fallback
app.use((request, response, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

app.use((error, request, response, next) => {
  response.status(error.status || 500).json({
    status: 'ERROR',
    message: error.message
  });
});

module.exports = app;