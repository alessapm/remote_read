
//YOU ARE IN BOOKS
const express = require('express');
const router = express.Router();

const controller = require('./controller');
const commentController = require('../comments/controller')
const subController = require('../subcomments/controller')

router.get('/', controller.index);
router.get ('/new/:group_id', controller.new);
router.get('/:id', controller.show);
router.get('/:id/edit', controller.edit);

router.post('/', controller.create);
router.put('/:id', controller.update);
router.post('/:id', commentController.create);
// router.post('/:id/comment', subController.create);

router.delete('/:id', controller.destroy);


module.exports = router;
