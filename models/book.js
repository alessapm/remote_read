const db = require('../config/database');

let controller = {};

controller.findAll = () => {
  return db.query(`SELECT * FROM posts ORDER BY id ASC`);
};

controller.create = (book) => {
  return db.query(`INSERT INTO posts (title, author, img_url, book_description, rating) VALUES ($1, $2, $3, $4, $5)`,
    [book.title, book.author, book.img_url, book.book_description, book.rating]);
};

module.exports = controller;
