

const router = require("express").Router();

router.get("/", (req, res) => {
  // console.log(req.session.user.id);
  req.session.destroy()
  res.redirect('/')
});

module.exports = router
