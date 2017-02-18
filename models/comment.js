const db = require('../config/database');

const markdown = require('markdown').markdown;
const toMarkdown = require('to-markdown');

const commentsController = {};

commentsController.findAllById = (id) => {
  return db.manyOrNone(`SELECT * FROM comments WHERE post_id = $1`, [id])
};

commentsController.create = (comment, review) => {
  // console.log("HELLO")
  // console.log(comment)

  return db.query(`INSERT INTO comments (post_id, username, rating, review) VALUES ($1, $2, $3, $4)`,
    [comment.post_id, comment.username, comment.rating, review]);
};

commentsController.destroy = (id) => {
  return db.one(`DELETE FROM comments WHERE id = $1 returning post_id`, [id]);
}

module.exports = commentsController;
