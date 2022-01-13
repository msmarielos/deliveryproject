const router = require("express").Router();

router.get("/", (req, res) => {
  // console.log(req.session.user.id);
  
  res.end()
});

module.exports = router
