const router = require("express").Router();
const { User } = require('../db/models');

router.get("/", (req, res) => {
  res.render("registration");
});

router.post("/", async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const user = await User.create
  }
})


module.exports = router
