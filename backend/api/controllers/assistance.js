const mongoose = require('mongoose');

const Customer = require('../models/customer');
const Order = require('../models/assistance');

/**
 * Index all Assistance order
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.assistanceIndex = (request, response, next) => {
  Order.find()
    .select('_id customer description state')
    .populate('customer', 'firstName lastName')
    .exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        count: result.length,
        values: result.map(order => {
          return {
            _id: order._id,
            customer: {
              _id: order.customer._id,
              fullName: `${order.customer.firstName} ${order.customer.lastName}`
            },
            description: order.description,
            state: order.state
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
 * Get one Assistance order
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.assistanceRetrieve = (request, response, next) => {
  const aid = request.params.aid;
  Order.findById(aid)
    .select('_id customer description includedAccessories backupData created state')
    .populate('customer', 'firstName lastName')
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
 * Create one Assistance order
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.assistanceCreate = (request, response, next) => {
  Customer.findById(request.body.customer)
    .then(customer => {
      if (!customer) {
        return response.status(404).json({
          status: 'ERROR',
          message: 'Customer not found.'
        });
      }

      const assistance = new Order({
        _id: mongoose.Types.ObjectId(),
        customer: request.body.customer,
        description: request.body.description,
        includedAccessories: request.body.includedAccessories,
        backupData: request.body.backupData
      });

      return assistance.save();
    })
    .then(result => {
      response.status(201).json({
        status: 'OK',
        message: 'Order created correctly',
        values: {
          _id: result._id,
          customer: result.customer,
          description: result.description
        },
        request: {
          type: 'GET',
          url: `http://localhost:3000/orders/${result._id}`
        }
      });
    })
    .catch(error => {
      response.status(500).json({
        status: 'ERROR',
        message: error
      });
    });
};

/**
 * Remove one Assistance order
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.assistanceDelete = (request, response, next) => {
  const aid = request.params.aid;
  Order.remove({ _id: aid })
    .exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        message: `Order removed.`,
        request: {
          type: 'GET',
          url: 'http://localhost:3000/orders'
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
 * Update one Assistance order
 *
 * @param request {Object}
 * @param response {Object}
 * @param next {Function}
 */
exports.assistanceUpdate = (request, response, next) => {
  const aid = request.params.aid;
  const ops = {};

  for (let op of request.body) {
    ops[op.field] = op.value;
  }

  Order.update({ _id: aid }, { $set: ops })
    .exec()
    .then(result => {
      response.status(200).json({
        status: 'OK',
        message: `Order updated correctly.`,
        request: {
          type: 'GET',
          url: `http://localhost:3000/orders/${aid}`
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