'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Boeing 737',
        capacity: 180,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Airbus A320',
        capacity: 160,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Boeing 777',
        capacity: 396,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Airbus A380',
        capacity: 850,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Embraer E190',
        capacity: 100,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Bombardier CRJ900',
        capacity: 76,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Boeing 747',
        capacity: 416,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        modelNumber: 'Comac C919',
        capacity: 174,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airplanes', null, {});
  }
};
