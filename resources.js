const express =require('express');
const router = express.Router();

router.use('/books', require('./controllers/books'));
router.use('/comments', require('./controllers/comments'));
router.use('/subcomments', require('./controllers/subcomments'));

router.use('/users', require('./controllers/users'));
router.use('/groups', require('./controllers/groups'));
router.use('/', require('./controllers/homepage'))
router.use('/dashboard', require('./controllers/dashboard'));

module.exports = router;
