const mongoose = require('mongoose');

const Customer = require('../models/customer');

/**
 * Index all Clients
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.ClientsIndex = (request, response, next) => {
  const client = Customer.find()
    .select('_id firstName lastName')
    .sort({ 'lastName': 1 });

  if (request.query) {
    for (let i in request.query) {
      if (request.query.hasOwnProperty(i)) {
        client.where({ [i]: { $regex: request.query[i], $options: "i" } });
      }
    }
  }

  client.exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        count: result.length,
        values: result.map(client => {
          return {
            _id: client._id,
            fullName: `${client.lastName} ${client.firstName}`
          }
        })
      });
    })
    .catch(error => {
      response.status(500).json({
        error: error
      });
    });
};

/**
 * Get one Client
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.clientsRetrieve = (request, response, next) => {
  const cid = request.params.cid;
  Customer.findById(cid)
    .select('_id firstName lastName phoneNumber email')
    .exec()
    .then(result => {
      if (result) {
        response.status(200).json({
          status: 'OK',
          values: result
        });
      } else {
        response.status(404).json({
          status: 'ERROR',
          message: 'No customer find with this id'
        });
      }
    })
    .catch(error => {
      response.status(500).json({
        error: error
      });
    });
};

/**
 * Create one Client
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.clientsCreate = (request, response, next) => {
  const client = new Customer({
    _id: new mongoose.Types.ObjectId(),
    firstName: request.body.firstName,
    lastName: request.body.lastName,
    phoneNumber: request.body.phoneNumber,
    email: request.body.email ? request.body.email : ''
  });

  client.save()
    .then(result => {
      response.status(201).json({
        status: 'OK',
        message: 'Customer created correctly',
        values: {
          client: {
            _id: result._id,
            fullName: `${result.firstName} ${result.lastName}`
          }
        },
        request: {
          type: 'GET',
          url: `http://localhost:3000/customers/${result._id}`
        }
      })
    })
    .catch(error => {
      response.status(500).json({
        error: error
      });
    });
};

/**
 * Delete one Client
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.clientsDelete = (request, response, next) => {
  const cid = request.params.cid;
  Customer.remove({ _id: cid })
    .exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        message: `Customer removed.`,
        request: {
          type: 'GET',
          url: 'http://localhost:3000/customers'
        }
      });
    })
    .catch(error => {
      response.status(500).json({
        status: 'ERROR',
        message: error
      });
    })
};

/**
 * Update one Client
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.clientsUpdate = (request, response, next) => {
  const cid = request.params.cid;
  const ops = {};

  for (let op of request.body) {
    ops[op.field] = op.value;
  }

  Customer.update({ _id: cid }, { $set: ops })
    .exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        message: `Customer updated correctly.`,
        request: {
          type: 'GET',
          url: `http://localhost:3000/customers/${cid}`
        }
      });
    })
    .catch(error => {
      response.status(500).json({
        status: 'ERROR',
        message: error
      });
    })
};