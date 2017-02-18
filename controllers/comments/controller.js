//YOU ARE IN COMMENTS

const Comment = require('../../models/comment');


let controller = {};

// controller.index = (req, res) => {

// };

controller.create = (req, res) => {
  Comment.create(req.body.comments)
  .then(() => res.redirect('/books/'+req.body.comments.post_id))
  .catch((err)=> console.log("error: ", err));
};

controller.new = (req, res) => {};

controller.show = (req, res) => {};

controller.edit = (req, res) => {};

controller.update = (req, res) => {};

controller.destroy = (req, res) => {
  Comment.destroy(req.params.id)
  .then((data) => {

    res.redirect('/books/'+data.post_id)
  })
};


module.exports = controller;
