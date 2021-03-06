// You are in USERS controller.js

const User = require('../../models/user.js');
const Books = require('../../models/book.js');
const Group = require('../../models/group.js');

const bcrypt = require('bcrypt');

const controller = {};

controller.new = (req, res) => {
  res.render('users/new');
}

controller.login = (req, res) => {
  const error = {};

  // if (req.query.error){
  //   error.message = 'Your email or password is incorrect. Please login again.'
  // };

  res.render('users/login', { message: error.message, session: req.session })
};

controller.process_login = (req, res) => {
  User.findByEmail(req.body.user.email)
  .then((user) => {
    if(user) {
      const isAuthed = bcrypt.compareSync(req.body.user.password, user.password_digest);
        if (isAuthed) {
          req.session.isAuthenticated = true;
          delete user.password_digest;
          req.session.user = user;  //now we can use req.session to get information about our loggedin user on other pages
          res.redirect(`/dashboard/${user.id}`);
        } else {
          res.redirect('/users/login?error=true');
        }
    } else {
      res.redirect('/users/new?error=true');
    }
  })
};

controller.logout = (req, res) => {
  req.session.user = null;
  req.session.isAuthenticated = false;
  res.redirect('/');
}

controller.create = (req, res) => {
  User.create(req.body.user)
  .then((data) => {

    res.redirect('/users/login')
  })
  .catch((err) => console.log('error: ', err))
};


controller.joinGroup = (req, res) => {
  Group.joinGroup(req.params.group_id, req.params.user_id)
  .then(() => {
    res.redirect(`/groups/${req.params.group_id}`)
  })
  .catch(err => console.log('err: ', err))
}

controller.leaveGroup = (req, res) => {
  Group.leaveGroup(req.params.group_id, req.params.user_id)
  .then(() => {
    res.redirect(`/dashboard/${req.params.user_id}`)
  })
  .catch(err => console.log('leave group err: ', err))
}

// controller.show = (req, res) => {
//   Group.findGroupsByUser(req.params.id)
//   .then((data) => {
//     res.render('users/dashboard', {groups: data})
//   })
//   .catch((err) => console.log('errr : ', err))
// }

module.exports = controller;
