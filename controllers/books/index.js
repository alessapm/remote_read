
//YOU ARE IN BOOKS
const express = require('express');
const router = express.Router();

const controller = require('./controller');
const commentController = require('../comments/controller')

router.get('/', controller.index);
router.get ('/new', controller.new);
router.get('/:id', controller.show);
router.get('/:id/edit', controller.edit);

router.post('/', controller.create);
router.put('/:id', controller.update);
router.post('/:id', commentController.create)

router.delete('/:id', controller.destroy);

module.exports = router;
