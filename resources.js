const express =require('express');
const router = express.Router();

router.use('/books', require('./controllers/books'));
router.use('/comments', require('./controllers/comments'));
router.use('/subcomments', require('./controllers/subcomments'));

router.use('/users', require('./controllers/users'));

module.exports = router;
