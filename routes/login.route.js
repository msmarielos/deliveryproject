const router = require("express").Router();
const { User } = require("../db/models");
const bcrypt = require("bcrypt");

router.get("/", (req, res) => {
  res.render("login");
});

router.post("/", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({
    where: { email: email },
  });
  if (user && (await bcrypt.compare(password, user.password))) {
    req.session.user = user;
    req.session.isAuthorized = true;
    res.redirect("/");
    // alert("Успешный вход!");
  } else {
    res.redirect("/");
    // alert("неуспешный вход!");
  }
});

module.exports = router;
