//YOU ARE IN COMMENTS controller.js

const Comment = require('../../models/comment');
const marked = require('marked');



let controller = {};


controller.create = (req, res) => {
  let reviewHTML = marked(req.body.comments.review);
  // console.log(reviewHTML);

  Comment.create(req.body.comments, reviewHTML)
  .then(() => Comment.updateRating(req.body.comments.post_id)
    .then(() => Comment.updateComments(req.body.comments.post_id)
      .then(() => res.redirect('/books/'+req.body.comments.post_id))))
  .catch((err)=> console.log("error: ", err));
};


controller.destroy = (req, res) => {

  Comment.destroy(req.params.id)
  .then(() => Comment.deleteComment(req.query.post_id)
    .then(() => {
      res.redirect('/books/'+req.query.post_id);
    })
  )
  .catch(err => console.log('error: ', err));


};

controller.like = (req, res) => {
  // console.log('hiiiiiie ', req.body, req.params)
  Comment.like(req.params.id)
  .then((data) => {
    console.log(data);
    res.redirect('/books/'+req.params.post_id)

  })
};

module.exports = controller;
//YOU ARE IN COMMENTS controller.js
