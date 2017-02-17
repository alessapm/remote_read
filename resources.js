const express =require('express');
const router = express.Router();

router.use('/books', require('./controllers/books'));
router.use('/comment', require('./controllers/comments'));

module.exports = router;
