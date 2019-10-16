'use strict';
const data = require('../data/room');

module.exports = {
  up: (queryInterface) => {
      return queryInterface.bulkInsert('ROOM', data);
  },

  down: (queryInterface) => {
      return queryInterface.bulkDelete('ROOM', null, {});
  }
};
