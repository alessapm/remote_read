// YOU ARE IN SUBCOMMENTS controller.js

const Subcomment = require('../../models/subcomment');

let controller = {};

controller.create = (req, res) => {
  Subcomment.create(req.body.sub)
  .then(() => res.redirect('/books/'+req.body.sub.post_id))
  .catch((err) => console.log('error in subcomment controller.create is: ', err));
}

controller.destroy = (req, res) => {

};
