const express = require('express');
const router = express.Router();

const UserController = require('../controllers/usersController');

router.post('/signup', UserController.signupUser);
router.post('/signin', UserController.siginUser);

module.exports = router;