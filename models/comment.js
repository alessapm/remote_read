const db = require('../config/database');

const commentsController = {};

commentsController.findAllById = (id) => {
  return db.manyOrNone(`SELECT * FROM comments WHERE post_id = $1`, [id])
}

module.exports = commentsController;
