
//insert db here

let controller = {};

controller.findAll = () => {
  return db.query(`SELECT * FROM posts ORDER BY id ASC`);
};
