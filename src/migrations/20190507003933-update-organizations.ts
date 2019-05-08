import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: DataTypes) => {
    return Promise.all([
      queryInterface.addColumn('organizations', 'city', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('organizations', 'state', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('organizations', 'mission', {
        type: Sequelize.TEXT
      }),
      queryInterface.addColumn('organizations', 'zip', {
        type: Sequelize.TEXT
      }),
    ]).catch((err) => {
      console.log(err);
    });
  },
  down: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('organizations', 'city'),
      queryInterface.removeColumn('organizations', 'state'),
      queryInterface.removeColumn('organizations', 'mission'),
      queryInterface.removeColumn('organizations', 'zip'),
    ])
    .catch(err => console.log(err));
  }
};
