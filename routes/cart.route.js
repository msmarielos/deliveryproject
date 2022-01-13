const router = require("express").Router();
const { User } = require("../db/models");
const { Order } = require("../db/models");
const { Cart } = require("../db/models");

router.get("/", (req, res) => {
  res.render("menu");
});

router.post("/:id", async (req, res) => {
  //находим текущего пользоватлея через секвалайз,где id достается из параметриз запроса
  const currentUser = await User.findByPk(req.session.user.id, { raw: true });
  //находим выбранное блюдо через секвалайз,где id достается из параметриз запроса
  const choosenDish = await Order.findByPk(req.params.id, { raw: true });
  // console.log(currentUser);
  //добавляем в БД
  const existingCart = await Cart.findOne({
    where: { 
      client_id: currentUser.id,
      dish_id: choosenDish.id,
    }
  });

  if (!existingCart) {
    const cartUser = await Cart.create({
      //заполняем поле таблицы
      client_id: currentUser.id,
      dish_id: choosenDish.id,
      counter: 1,
    });

    await cartUser.save();
  } else {
    existingCart.counter += 1;
    await existingCart.save();
  }
  
  res.status(200).json();
});

module.exports = router;
 