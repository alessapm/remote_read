//YOU ARE IN COMMENTS

const express = require('express');
const router = express.Router();

const controller = require('./controller');

// // router.get('/', controller.index);
// router.get ('/new', controller.new);
// // router.get('/:id', controller.show);
// router.get('/:id/edit', controller.edit);

router.post('/', controller.create);
// router.put('/:id', controller.update);

router.delete('/:id', controller.destroy);
router.put('/like/:post_id/:id', controller.like);

module.exports = router;
