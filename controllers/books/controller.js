//controller.index, create, new, show, edit, update, destroy

//YOU ARE IN BOOKS
const Book = require('../../models/book');

let controller = {};

controller.index = (req, res) => {
  Book.findAll()
  .then(data => res.render('books/index', { books: data }))
  .catch(err => console.log('error: ', err));
};

controller.create = (req, res) => {};

controller.new = (req, res) => {};

controller.show = (req, res) => {};

controller.edit = (req, res) => {};

controller.update = (req, res) => {};

controller.destroy = (req, res) => {};


module.exports = controller;
