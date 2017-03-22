const Group = require('../../models/group');

const controller = {};

controller.getGroupsByUserId = (req, res) => {
  Group.getGroupsByUserId(req.params.user_id)
  .then((ids) => {
    Group.getGroupInfoById(ids.group_id)
    .then((group) => {
      res.render ('dashboard/dashboard', {groups: group})
    })

  })
  .catch(err => console.log('error in getGroupsByUserId: ', err));
}





module.exports = controller;
