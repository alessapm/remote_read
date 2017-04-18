// YOU ARE IN GROUPS CONTROLLER

const Group = require('../../models/group');
const Book = require('../../models/book');

const bcrypt = require('bcrypt');

const controller = {};

controller.new = (req, res) => {
  res.render('groups/new', { user_id: req.session.user.id, session: req.session});
};

controller.create = (req, res) => {
  console.log('create req.body.group: ', req.body.group)
  Group.create(req.body.group)
  .then(() => {
    console.log('group created');
    res.redirect(`/dashboard/${req.session.user.id}`);
  })
  .catch((err) => console.log('error: ', err))
};

controller.show = (req, res) => {
  Group.findAll()
  .then((data) => {
    res.render('groups/show', { groups: data, user: req.session.user, session: req.session })
    console.log('SHOW ALL GROUPS- req.session.user', req.session.user)
  })
  .catch((err) => console.log('error: ', err))
};

controller.showGroup = (req, res) => {
  Book.findBooksByGroupId(req.params.group_id)
  .then((data) => {
    res.render ('groups/showGroup', { books: data, group_id: req.params.group_id, session: req.session });

     console.log('SHOW THIS GROUP- req.session.user', req.session.user)
  })
  .catch(err => console.log('error in showGroup: ', err));
}



module.exports = controller;
