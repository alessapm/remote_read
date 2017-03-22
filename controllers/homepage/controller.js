let controller = {};


controller.show = (req, res) => {
  console.log(req.body.user)
  res.render('homepage');

}

module.exports = controller;
