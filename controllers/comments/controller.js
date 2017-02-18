//YOU ARE IN COMMENTS

const Comment = require('../../models/comment');
const marked = require('marked');



let controller = {};

// controller.index = (req, res) => {

// };

controller.create = (req, res) => {
  let reviewHTML = marked(req.body.comments.review);
  console.log(reviewHTML);

  Comment.create(req.body.comments, reviewHTML)
  .then(() => res.redirect('/books/'+req.body.comments.post_id))
  .catch((err)=> console.log("error: ", err));
};


controller.destroy = (req, res) => {
  Comment.destroy(req.params.id)
  .then((data) => {

    res.redirect('/books/'+data.post_id)
  })
};


module.exports = controller;
