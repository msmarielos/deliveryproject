const router = require("express").Router();
const { User } = require("../db/models");
const { Order } = require("../db/models");
const { Cart } = require("../db/models");

router.get("/", async(req, res) => {

  const menu = await Order.findAll({ raw: true });

  const menu_id = menu.map((dish) => dish.id);
  console.log(menu)

  const ordersByClient = await Cart.findAll({
      where: {
        client_id: req.session.user.id
      },
      include: [Order],
    },
    { raw: true })
  ;

  console.log(ordersByClient.Order)

  res.render("showCart", {
    ordersByClient,
    menu,
    isAuthorized: req.session.isAuthorized,
  });
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

router.post("/client/:id", async (req, res) => {
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
    existingCart.counter -= 1;
    await existingCart.save();
  }
  
  res.status(200).json();
});

module.exports = router;
 