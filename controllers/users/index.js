const express = require('express');
const router = express.Router();

const controller = require('./controller.js');

const AuthService = require('../../services/auth');

router.get('/new', controller.new);

router.get('/login', controller.login);

router.post('/', controller.create);
router.post('/login', controller.process_login);
router.post('/logout', controller.logout);

router.post('/:user_id/groups/:group_id', controller.joinGroup);
router.delete('/:user_id/groups/:group_id', controller.leaveGroup);
// router.get('/:id', AuthService.restrict, controller.show);






module.exports = router;
