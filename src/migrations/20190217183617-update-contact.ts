import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: DataTypes) => {
    return Promise.all([
      queryInterface.addColumn('contacts', 'city', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('contacts', 'state', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('contacts', 'zip', {
        type: Sequelize.STRING
      })
    ]).catch((err) => {
      console.log(err);
    });
  },
  down: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('contacts', 'city'),
      queryInterface.removeColumn('contacts', 'state'),
      queryInterface.removeColumn('contacts', 'zip')
    ])
    .catch(err => console.log(err));
  }
};
