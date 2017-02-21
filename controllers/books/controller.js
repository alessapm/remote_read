//controller.index, create, new, show, edit, update, destroy

//YOU ARE IN BOOKS
const Book = require('../../models/book');
const Comment = require('../../models/comment');
const Sub = require('../../models/subcomment');

let controller = {};

controller.index = (req, res) => {
  Book.findAll()
  .then(data => res.render('books/index', { books: data }))
  .catch(err => console.log('error: ', err));
};

controller.new = (req, res) => {
  res.render('books/new');
};

controller.create = (req, res) => {
  // console.log(req.body)
  Book.create(req.body.books)
  .then(() => res.redirect('/books'))
  .catch(err => console.log('error is ', err));
};

controller.show = (req, res) => {

  Book.findById(req.params.id)
  .then((data) => {
    // console.log("data: ", data);
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
            console.log('*******');
            console.log('these comments: ', thesecomments);
            res.render('books/show', { books: data, comments: thesecomments})
          })
    })
  })

  .catch(err => console.log('error is in controller.show ', err));
};

controller.edit = (req, res) => {
  Book.findById(req.params.id)
  .then(data => res.render('books/edit',{ books: data } ))
  .catch(err => console.log('err: ', err));
};

controller.update = (req, res) => {
  Book.update(req.body.books, req.params.id)
  .then( data => res.redirect('/books'))
  .catch(err => console.log('error: ', err));
};

controller.destroy = (req, res) => {
  Book.destroy(req.params.id)
  .then(data => res.redirect('/books'))
  .catch(err => console.log('error: ', err));
};


module.exports = controller;
