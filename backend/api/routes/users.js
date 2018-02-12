const express = require('express');
const router = express.Router();

const checkAuth = require('../middleware/auth');
const checkRoleUser = require('../middleware/role-user');

const UsersController = require('../controllers/users');

router.get('/', checkAuth, checkRoleUser, UsersController.userIndex);
router.get('/user/:uid', checkAuth, checkRoleUser, UsersController.userRetrieve);
router.get('/profile', checkAuth, checkRoleUser, UsersController.userProfile);
router.post('/register', checkAuth, checkRoleUser, UsersController.userCreate);
router.post('/login', UsersController.userLogin);
router.post('/login/refresh', UsersController.userRefresh);
router.post('/check', checkAuth, checkRoleUser, UsersController.userCheck);
router.delete('/:uid', checkAuth, checkRoleUser, UsersController.userDelete);
router.patch('/:uid', checkAuth, checkRoleUser, UsersController.userUpdate);

module.exports = router;