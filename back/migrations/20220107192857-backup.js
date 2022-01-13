'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('orders', 'SellerId', {
      type: Sequelize.STRING(200),
      allowNull:true,
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('orders', 'SellerId');
  }
};
