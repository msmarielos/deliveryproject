const router = require("express").Router();
const { Delivery_man } = require('../db/models');
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.render("loginDel");
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const man = await Delivery_man.findOne({
    where: { email: email },
  });
  if (man && (await bcrypt.compare(password, man.password))) {
    req.session.user = man;
    req.session.isAuthorized = true;
    res.redirect("/todeliver");
  } else {
    res.redirect("/");
  }
});

module.exports = router;