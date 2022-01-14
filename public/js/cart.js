//нашли все кнопки по селектору
const addToCart = document.querySelectorAll(".js-add-to-cart");
//на кнопки вешаем слушателей,  в переменную кидаем id блюда(кнопка с аттрибутом-data.id)

addToCart?.forEach((button) => {
  button.addEventListener("click", async (e) => {
    e.preventDefault();

    const dishId = button.dataset.id;
    // console.log(dishId);
    //генерируем путь интерполяцией строк: /cart(корзина) + id выбранного блюда
    const action = `cart/${dishId}`;
    //фечом идем по пути указнному для того чтобы передать id блюда на сервак(роут - там вся логика, чтобы обратить к БД)
    const response = await fetch(action, {
      method: "POST",
    });
  });
});

const deleteFromCart = document.querySelectorAll(".js-delete-from-cart");
//на кнопки вешаем слушателей,  в переменную кидаем id блюда(кнопка с аттрибутом-data.id)
deleteFromCart?.forEach((button) => {
  button.addEventListener("click", async (e) => {
    e.preventDefault();

    const dishId = button.dataset.id;
    // console.log(dishId);
    //генерируем путь интерполяцией строк: /cart(корзина) + id выбранного блюда
    const action = `cart/client/${dishId}`;
    //фечом идем по пути указнному для того чтобы передать id блюда на сервак(роут - там вся логика, чтобы обратить к БД)
    const response = await fetch(action, {
      method: "POST",
    });
  });
});
