'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'John Doe',
        cpf: '12345678900', 
        password: '123456',
        balance: 10000,
      },
      {
        name: 'Robert Doe 2',
        cpf: '12345678901',
        password: '1111111',
        balance: 15000,
      },
      {
        name: 'Popeye Doe 3',
        cpf: '12345678902',
        password: '654321',
        balance: 20000,
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
