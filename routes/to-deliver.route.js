const router = require("express").Router();
const { User } = require("../db/models");
const { Order } = require("../db/models");
const { Cart } = require("../db/models");

router.get("/", async(req, res) => {
    const ordersByClient = await Cart.findAll({
        where: {
          client_id: req.session.user.id
        },
        include: [Order, User],
      },
      { raw: true })
    ;

    res.render("showOrders", {
      ordersByClient,
      isAuthorized: req.session.isAuthorized,
    });
  });

module.exports = router;
