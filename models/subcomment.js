// YOU ARE IN SUBCOMMENTS MODEL

const db = require('../config/database');

const subcommentsController = {};

subcommentsController.findAllById = (id) => {
  return db.manyOrNone(`SELECT * FROM subcomments WHERE comment_id = $1 ORDER BY id ASC`, [id]);
};

subcommentsController.create = (sub) => {
  return db.query(`INSERT INTO subcomments (comment_id, post_id, username, reply) VALUES ($1, $2, $3, $4)`,
    [sub.comment_id, sub.post_id, sub.username, sub.reply]);
}


module.exports = subcommentsController;