//YOU ARE IN COMMENTS

const Comment = require('../../models/comment');


let controller = {};

// controller.index = (req, res) => {

// };

controller.create = (req, res) => {
  Comment.create(req.body.comments, req.params.id)
  .then(() => res.redirect('/books/'+req.params.id))
  .catch((err)=> console.log("error: ", err));
};

controller.new = (req, res) => {};

controller.show = (req, res) => {};

controller.edit = (req, res) => {};

controller.update = (req, res) => {};

controller.destroy = (req, res) => {};


module.exports = controller;
