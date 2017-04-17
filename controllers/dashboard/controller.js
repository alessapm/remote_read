const Group = require('../../models/group');

const controller = {};

controller.getGroupsByUserId = (req, res) => {
  Group.getGroupsByUserId(req.params.user_id)
    .then((data) => {
      res.render ('dashboard/dashboard', {groups: data, user_id: req.session.user.id});
      console.log('req.session.user', req.session.user);

      console.log('898989 data: ', data)
    })
  .catch(err => console.log('error in getGroupsByUserId: ', err));

}





module.exports = controller;
