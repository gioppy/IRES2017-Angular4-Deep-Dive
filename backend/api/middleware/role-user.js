const mongoose = require('mongoose');

const User = require('../models/user');

module.exports = (request, response, next) => {
  const uid = request.userData.uid;
  User.findById(uid)
    .select('role')
    .populate('role', 'name')
    .exec()
    .then(user => {
      if (user.role.name === 'administrator') {
        next();
      } else {
        response.status(401).json({
          status: 'ERROR',
          message: `You cannot access this resource.`
        })
      }
    });
};