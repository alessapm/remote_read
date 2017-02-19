const db = require('../config/database');

const markdown = require('markdown').markdown;
const toMarkdown = require('to-markdown');

const commentsController = {};

commentsController.findAllById = (id) => {
  return db.manyOrNone(`SELECT * FROM comments WHERE post_id = $1 ORDER BY likes DESC`, [id]);
};

commentsController.create = (comment, review) => {

  return db.query(`INSERT INTO comments (post_id, username, rating, review) VALUES ($1, $2, $3, $4)`,
    [comment.post_id, comment.username, comment.rating, review]);
};

commentsController.updateRating = (id) => {
  return db.manyOrNone(`SELECT AVG(comments.rating) FROM posts INNER JOIN comments ON post_id = posts.id WHERE posts.id = $1`,
    [id]);
};

commentsController.updateComments = (id) => {
  return db.manyOrNone(`UPDATE posts SET num_comments = num_comments +1 WHERE id = $1`, [id]);
}

commentsController.destroy = (id) => {
  return db.one(`DELETE FROM comments WHERE id = $1 returning post_id`, [id]);
};

commentsController.like = (id) => {
  console.log('in comments Controller id= ', id)
  return db.none(`UPDATE comments SET likes = likes + 1 WHERE id = $1`, [id]);
}

module.exports = commentsController;
