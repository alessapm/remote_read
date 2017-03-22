const express = require('express');
const router = express.Router();

const controller = require('./controller.js');

const AuthService = require('../../services/auth');

router.get('/:user_id', AuthService.restrict, controller.getGroupsByUserId);



module.exports = router;
