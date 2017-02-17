//controller.index, create, new, show, edit, update, destroy

//YOU ARE IN BOOKS
const Book = require('../../models/book');

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
  console.log(req.body)
  Book.create(req.body.books)
  .then(() => res.redirect('/books'))
  .catch(err => console.log('error is ', err));
};

controller.show = (req, res) => {};

controller.edit = (req, res) => {};

controller.update = (req, res) => {};

controller.destroy = (req, res) => {};


module.exports = controller;
