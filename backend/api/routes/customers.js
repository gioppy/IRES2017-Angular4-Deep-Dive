const express = require('express');
const router = express.Router();

const CustomersController = require('../controllers/customers');

router.get('/', CustomersController.ClientsIndex);
router.get('/:cid', CustomersController.clientsRetrieve);
router.post('/', CustomersController.clientsCreate);
router.delete('/:cid', CustomersController.clientsDelete);
router.patch('/:cid', CustomersController.clientsUpdate);

module.exports = router;