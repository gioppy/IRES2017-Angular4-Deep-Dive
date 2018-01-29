const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const Role = require('../models/role');

/**
 * Index all Users
 * @requires auth
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.roleIndex = (request, response, next) => {
  Role.find()
    .select('_id name')
    .exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        count: result.length,
        values: result
      });
    })
    .catch(error => {
      response.status(500).json({
        error: error
      });
    });
};

/**
 * Retrieve one Role
 * @requires auth
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.roleRetrieve = (request, response, next) => {
  Role.findById(request.params.rid)
    .select('_id name')
    .exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        values: result
      });
    })
    .catch(error => {
      response.status(500).json({
        error: error
      });
    });
};

/**
 * Create new Role
 * @requires auth
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.roleCreate = (request, response, next) => {
  Role.find({ email: request.body.name })
    .exec()
    .then(role => {
      if (role.length > 0) {
        return response.status(409).json({
          status: 'ERROR',
          message: 'Role already exist.'
        });
      } else {
        const role = new Role({
          _id: new mongoose.Types.ObjectId(),
          name: request.body.name
        });

        role.save()
          .then(result => {
            response.status(201).json({
              status: 'OK',
              message: 'Role created successfully'
            });
          })
          .catch(error => {
            response.status(500).json({
              status: 'ERROR',
              message: error
            })
          });
      }
    });
};

/**
 * Remove an User
 * @requires auth
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.roleDelete = (request, response, next) => {
  const rid = request.params.rid;
  Role.remove({ _id: rid })
    .exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        message: `Role was remove.`
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
 * Update a Role
 * @requires auth
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.roleUpdate = (request, response, next) => {
  const rid = request.params.rid;
  const ops = {};

  for (let op of request.body) {
    ops[op.field] = op.value;
  }

  Role.update({ _id: rid }, { $set: ops })
    .exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        message: `Role updated correctly.`
      });
    })
    .catch(error => {
      response.status(500).json({
        status: 'ERROR',
        message: error
      });
    })
};