//controller.index, create, new, show, edit, update, destroy

//YOU ARE IN BOOKS
const Book = require('../../models/book');
const Comment = require('../../models/comment');
const Sub = require('../../models/subcomment');

let controller = {};

controller.index = (req, res) => {
  console.log('********** req.session: ', req.session)
  Book.findAll()
  .then(data => res.render('books/index', { books: data, session: req.session }))
  .catch(err => console.log('error: ', err));
};

controller.new = (req, res) => {
  console.log('req.params.group_id: ', req.params.group_id);
  console.log('^^req.session.user: ', req.session.user);
  res.render('books/new', {group_id: req.params.group_id, user_id: req.session.user.id, session: req.session });

};

controller.create = (req, res) => {

  Book.create(req.body.books)
  .then(() => res.redirect('/groups/' + req.body.books.group_id))
  .catch(err => console.log('error is ', err));
};

controller.show = (req, res) => {

  Book.findById(req.params.id)
  .then((data) => {

    Comment.findAllById(req.params.id)
     .then(thesecomments => {
      // console.log('hitting the then with these comments, thesecomments: ', thesecomments);
        //!!!thesecomments is an array of two objects, not a single object
        Sub.findAllById(req.params.id)
          .then(subcomments => {
            console.log('LOOK HERE subcomments comes back as: ', subcomments)
            thesecomments.forEach((comment) => {
              comment.subcomments = subcomments.filter(sub => sub.comment_id == comment.id);
            });

            console.log('these comments: ', thesecomments);
            console.log('req.session.user: ', req.session.user);
            res.render('books/show', { books: data, comments: thesecomments, user_id: req.session.user.id, session: req.session})
          })
    })
  })

  .catch(err => console.log('error is in controller.show ', err));
};

controller.edit = (req, res) => {
  Book.findById(req.params.id)
  .then(data => res.render('books/edit',{ books: data, session: req.session } ))
  .catch(err => console.log('err: ', err));
};

controller.update = (req, res) => {
  console.log('req.body.books: ', req.body.books)
  Book.update(req.body.books, req.params.book_id)
  .then( data => res.redirect('/groups/' + req.body.books.group_id))
  .catch(err => console.log('error: ', err));
};

controller.destroy = (req, res) => {
  console.log('in destroy, req.params.group_id: ', req.params.group_id)
  Book.destroy(req.params.book_id)
  .then(data => res.redirect('/groups/' + req.params.group_id))
  .catch(err => console.log('error: ', err));
};


module.exports = controller;
