const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/user');

/**
 * Index all Users
 * @requires auth
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.userIndex = (request, response, next) => {
  User.find()
    .select('_id username role')
    .populate('role', '_id name')
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

exports.userRetrieve = (request, response, next) => {
  User.findById(request.params.uid)
    .select('_id username email role')
    .exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        values: result
      })
    })
    .catch(error => {
      response.status(500).json({
        status: 'ERROR',
        message: error
      })
    });
};

/**
 * Create new User
 * @requires auth
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.userCreate = (request, response, next) => {
  User.find({ email: request.body.email, username: request.body.username })
    .exec()
    .then(user => {
      if (user.length > 0) {
        return response.status(409).json({
          status: 'ERROR',
          message: 'User already exist.'
        });
      } else {
        bcrypt.hash(request.body.password, 10, (error, hash) => {
          if (error) {
            return response.status(500).json({
              status: 'ERROR',
              message: error
            })
          } else {
            const user = new User({
              _id: new mongoose.Types.ObjectId(),
              username: request.body.username,
              email: request.body.email,
              password: hash,
              role: request.body.role
            });

            user.save()
              .then(result => {
                response.status(201).json({
                  status: 'OK',
                  message: 'User created successfully'
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
      }
    });
};

/**
 * Login as User
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.userLogin = (request, response, next) => {
  User.find({ username: request.body.username })
    .exec()
    .then(user => {
      if (user.length < 1) {
        return response.status(401).json({
          status: 'ERROR',
          message: 'Login fail.'
        });
      }

      bcrypt.compare(request.body.password, user[0].password, (error, compare) => {
        if (error) {
          return response.status(401).json({
            status: 'ERROR',
            message: 'Login fail.'
          });
        }

        if (compare) {
          const accessToken = jwt.sign({
            email: user[0].email,
            uid: user[0]._id
          }, process.env.JWT_KEY, {
            expiresIn: '1m',
            jwtid: '1'
          });
          const refreshToken = jwt.sign({token: accessToken}, process.env.JWT_KEY, {
            expiresIn: '1h',
            jwtid: '2'
          });

          return response.status(200).json({
            status: 'OK',
            message: 'Login successful.',
            values: {
              access_token: accessToken,
              refresh_token: refreshToken
            }
          });
        }

        response.status(401).json({
          status: 'ERROR',
          message: 'Login fail.'
        });
      });
    })
    .catch(error => {
      response.status(500).json({
        status: 'ERROR',
        message: error
      })
    });
};

/**
 * Refresh access token and generate new tokens
 * @requires auth
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.userRefresh = (request, response, next) => {
  try {
    const refreshtoken = request.body.refresh;
    const decodedRefresh = jwt.verify(refreshtoken, process.env.JWT_KEY);
    const original = jwt.decode(decodedRefresh.token, process.env.JWT_KEY);

    const accessToken = jwt.sign({
      email: original.email,
      uid: original.uid
    }, process.env.JWT_KEY, {
      expiresIn: '1m',
      jwtid: '1'
    });
    const refreshToken = jwt.sign({token: accessToken}, process.env.JWT_KEY, {
      expiresIn: '1h',
      jwtid: '2'
    });

    return response.status(200).json({
      status: 'OK',
      message: 'Refresh successful.',
      values: {
        access_token: accessToken,
        refresh_token: refreshToken
      }
    });
  } catch(error) {
    return response.status(401).json({
      status: 'ERROR',
      message: 'Auth refresh failed.'
    })
  }
};

/**
 * Remove a User
 * @requires auth
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.userDelete = (request, response, next) => {
  const uid = request.params.uid;
  User.remove({ _id: uid })
    .exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        message: `User was remove.`
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
 * Update a User
 * @requires auth
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.userUpdate = (request, response, next) => {
  const uid = request.params.uid;
  const ops = {};

  for (let op of request.body) {
    if (op.field === 'password') {
      return response.status(500).json({
        status: 'ERROR',
        message: 'Error modify user.'
      });
    }

    if (op.field === 'email') {
      User.findById(uid)
        .select('email')
        .exec()
        .then(user => {
          if (user.email !== op.value) {
            return response.status(500).json({
              status: 'ERROR',
              message: 'Error modify user.'
            });
          }
        })
        .catch(error => {
          return response.status(500).json({
            status: 'ERROR',
            message: 'Error modify user.'
          });
        });
    }

    ops[op.field] = op.value;
  }

  User.update({ _id: uid }, { $set: ops })
    .exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        message: `User updated correctly.`
      });
    })
    .catch(error => {
      response.status(500).json({
        status: 'ERROR',
        message: error
      });
    })
};

exports.userCheck = (request, response, next) => {
  User.find({[request.body.check]: request.body.value})
    .exec()
    .then(result => {
      const check = result.length <= 0;
      response.status(200).json({
        check: check
      });
    })
    .catch(error => {
      response.status(500).json({
        status: 'ERROR',
        message: error
      })
    });
};