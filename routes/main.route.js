const router = require("express").Router();
const { Order } = require("../db/models");

router.get("/", async (req, res) => {
  const menu = await Order.findAll({ raw: true });
  console.log(menu);
  res.render("menu", { menu });
});

module.exports = router;
