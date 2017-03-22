const Group = require('../../models/group');

const bcrypt = require('bcrypt');

const controller = {};

controller.new = (req, res) => {
  res.render('groups/new');
};

controller.create = (req, res) => {
  Group.create(req.body.group)
  .then(() => {
    console.log('group created')
  })
  .catch((err) => console.log('error: ', err))
};

controller.show = (req, res) => {
  Group.findAll()
  .then((data) => {
    res.render('groups/show', { groups: data })
  })
  .catch((err) => console.log('error: ', err))
};

controller.showGroup = (req, res) => {
  // Books.findBooksByGroupId(req.params.id)
  // .then((data) => {
  //   res.render ('users/show', { books: data })
  // })
  // .catch(err => console.log('error in findBooks: ', err));
}



module.exports = controller;
