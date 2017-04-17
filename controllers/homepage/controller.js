let controller = {};


controller.show = (req, res) => {
  console.log(req.body.user)
  res.render('homepage');
  console.log('HOME- req.session.user', req.session.user)
}

module.exports = controller;
