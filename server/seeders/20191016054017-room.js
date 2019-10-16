'use strict';
const roomData = require('../dummy/room');

module.exports = {
  up: (queryInterface) => {
      return queryInterface.bulkInsert('ROOM', roomData);
  },

  down: (queryInterface) => {
      return queryInterface.bulkDelete('ROOM', null, {});
  }
};
