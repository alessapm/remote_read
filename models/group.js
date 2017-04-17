const db = require('../config/database');

const Group = {};

Group.create = (group) => {
  return db.none(`INSERT INTO groups (group_name, group_description, created_by)
    VALUES ($1, $2, $3)`, [group.group_name, group.group_description, group.created_by])
};

Group.findAll = () => {
  return db.manyOrNone(`SELECT * FROM groups`)
};

Group.getGroupsByUserId = (user_id) => {
  return db.manyOrNone(`SELECT groups.id, groups.group_name FROM groups
    INNER JOIN groups_users ON groups_users.group_id = groups.id
    INNER JOIN users ON groups_users.user_id = users.id
    WHERE users.id = $1`, [user_id])
};

Group.joinGroup = (group_id, user_id) => {
  return db.none(`INSERT INTO groups_users (group_id, user_id)
    VALUES ($1, $2)`, [group_id, user_id])
};

Group.leaveGroup = (group_id, user_id) => {
    return db.none(`DELETE FROM groups_users WHERE group_id = $1 AND user_id = $2`,
     [group_id, user_id])
}


module.exports = Group;
