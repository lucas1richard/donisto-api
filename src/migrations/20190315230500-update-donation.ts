import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: DataTypes) => {
    return Promise.all([
      queryInterface.addColumn('donations', 'is_anonymous', {
        type: Sequelize.BOOLEAN,
        defaultValue: false,
        allowNull: true,
      }),
      queryInterface.addColumn('donations', 'message', {
        type: Sequelize.TEXT,
        allowNull: true,
      }),
    ]).catch((err) => {
      console.log(err);
    });
  },
  down: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('donations', 'is_anonymous'),
      queryInterface.removeColumn('donations', 'message'),
    ])
    .catch(err => console.log(err));
  }
};
