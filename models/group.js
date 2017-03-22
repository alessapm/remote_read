const db = require('../config/database');

const Group = {};

Group.create = (group) => {
  return db.none(`INSERT INTO groups (group_name)
    VALUES ($1)`, [group.group_name])
};

Group.findAll = () => {
  return db.manyOrNone(`SELECT * FROM groups`)
}

Group.getGroupsByUserId = (user_id) => {
  return db.manyOrNone(`SELECT groups.id groups.name FROM groups
    INNER JOIN groups_users ON groups_users.group_id = groups.id
    INNER JOIN users ON groups_users.user_id = users.id
    WHERE users.id = $1`, [user_id])
}



module.exports = Group;
