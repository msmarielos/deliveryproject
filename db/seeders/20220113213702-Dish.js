'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Orders', [{
     dish: 'Кебаб судьбы',
     start_price: 500,
     discount_price: 250,
     location: 'spb',
     photo_link: 'https://e2.edimdoma.ru/data/recipes/0013/3103/133103-ed4_wide.jpg?1628767319',
     createdAt: new Date(),
      updatedAt: new Date(),
     },
     {
      dish: 'Индейка "по-Питерски"',
      start_price: 600,
      discount_price: 300,
      location: 'spb',
      photo_link: 'http://moekopchenie.ru/wp-content/uploads/2018/08/vvod-rassola-v-tushku-s-pomoshchyu-shprica.jpg',
      createdAt: new Date(),
      updatedAt: new Date(),
      },
      {
        dish: 'Бургер Разорви хлебало',
        start_price: 250,
        discount_price: 125,
        location: 'spb',
        photo_link: 'https://sappetitom.ru/upload/iblock/be3/burger_doma_step22.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
        },
        {
          dish: 'Просто цезарь',
          start_price: 300,
          discount_price: 150,
          location: 'spb',
          photo_link: 'https://www.gastronom.ru/binfiles/images/20191113/b50e9f2a.jpg',
          createdAt: new Date(),
          updatedAt: new Date(),
          }], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Orders', null, {});
  }
};
