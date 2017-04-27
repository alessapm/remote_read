const db = require('../config/database');

const markdown = require('markdown').markdown;
const toMarkdown = require('to-markdown');

const commentsController = {};

commentsController.findAllById = (id) => {
  return db.manyOrNone(`SELECT * FROM comments WHERE post_id = $1 ORDER BY likes DESC`, [id]);
};

commentsController.create = (comment, review) => {

  return db.query(`INSERT INTO comments (post_id, user_id, user_username, rating, review) VALUES ($1, $2, $3, $4, $5)`,
    [comment.post_id, comment.user_id, comment.user_username, comment.rating, review]);
};

commentsController.updateRating = (id) => {
  return db.manyOrNone(`SELECT AVG(comments.rating) FROM posts INNER JOIN comments ON post_id = posts.id WHERE posts.id = $1`,
    [id]);
};



commentsController.updateComments = (id) => {
  return db.manyOrNone(`UPDATE posts SET num_comments = num_comments +1 WHERE id = $1`, [id]);
}

commentsController.deleteComment = (id) => {

  return db.none(`UPDATE posts SET num_comments = num_comments - 1 WHERE id = $1`, [id]);
}

commentsController.destroy = (id) => {
  return db.one(`DELETE FROM subcomments WHERE comment_id = $1;
    DELETE FROM comments WHERE id = $1 returning post_id`, [id]);
};

commentsController.like = (id) => {

  return db.none(`UPDATE comments SET likes = likes + 1 WHERE id = $1`, [id]);
}





module.exports = commentsController;
















