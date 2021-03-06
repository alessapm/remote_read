//YOU ARE IN SUBCOMMENTS
const express = require('express');
const router = express.Router();

const controller = require('./controller');

router.post('/', controller.create);
router.delete('/:id', controller.destroy);


module.exports = router;
