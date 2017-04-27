// YOU ARE IN SUBCOMMENTS MODEL

const db = require('../config/database');

const subcommentsController = {};

subcommentsController.findAllById = (id) => {
  return db.manyOrNone(`SELECT * FROM subcomments WHERE post_id = $1 ORDER BY id ASC`, [id]);
};

subcommentsController.create = (sub) => {
  return db.query(`INSERT INTO subcomments (comment_id, post_id, user_id, user_username, reply) VALUES ($1, $2, $3, $4, $5)`,
    [sub.comment_id, sub.post_id, sub.user_id, sub.user_username, sub.reply]);
}

subcommentsController.destroy = (id) => {
  return db.one(`DELETE FROM subcomments WHERE id = $1 returning post_id`, [id]);
};


module.exports = subcommentsController;
