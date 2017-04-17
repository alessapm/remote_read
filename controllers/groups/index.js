// YOU ARE IN GROUPS

const express = require('express');
const router = express.Router();

const controller = require('./controller.js');

const AuthService = require('../../services/auth');

router.get('/', AuthService.restrict,  controller.show);
router.get('/new', AuthService.restrict, controller.new);
router.post('/', controller.create);
router.get('/:group_id', controller.showGroup);


//you need to create a group, add yourself to a group,
//add a post to a group, remove yourself from a group










module.exports = router;
