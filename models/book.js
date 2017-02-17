const db = require('../config/database');

let controller = {};

controller.findAll = () => {
  return db.query(`SELECT * FROM posts ORDER BY id ASC`);
};

controller.create = (book) => {
  return db.query(`INSERT INTO posts (title, author, img_url, book_description, rating) VALUES ($1, $2, $3, $4, $5)`,
    [book.title, book.author, book.img_url, book.book_description, book.rating]);
};

controller.findById = (id) => {
  return db.one(`SELECT * FROM posts WHERE id = $1`, [id]);
};

controller.update = (book, id) => {
  return db.none(`UPDATE posts SET title = $1, author = $2, img_url = $3, book_description = $4, rating = $5 WHERE id = $6`, [book.title, book.author, book.img_url, book.book_description, book.rating, id]);
};

controller.destroy = (id) => {
  return db.none(`DELETE FROM posts WHERE id = $1`, [id]);
};

module.exports = controller;
