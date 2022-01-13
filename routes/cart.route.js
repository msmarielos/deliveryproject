const router = require("express").Router();
const { User } = require("../db/models");
const { Order} = require("../db/models");

router.get('/:id', (req, res) => {
  const currentUser = User.findByPk(req.params.id, {raw: true});

  const cartUser = Cart.create({
    user_id: currentUser.id,
    dish_id: currentDish.id
  })

