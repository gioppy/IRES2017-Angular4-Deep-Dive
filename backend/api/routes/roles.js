const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/auth');

const RolesController = require('../controllers/roles');

router.get('/', checkAuth, RolesController.roleIndex);
router.get('/:rid', checkAuth, RolesController.roleRetrieve);
router.post('/', checkAuth, RolesController.roleCreate);
router.patch('/:rid', checkAuth, RolesController.roleUpdate);
router.delete('/:rid', checkAuth, RolesController.roleDelete);

module.exports = router;