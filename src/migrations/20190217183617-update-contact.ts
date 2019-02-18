import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: DataTypes) => {
    return Promise.all([
      queryInterface.addColumn('Contacts', 'city', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Contacts', 'state', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('Contacts', 'zip', {
        type: Sequelize.STRING
      })
    ]).catch((err) => {
      console.log(err);
    });
  },
  down: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('Contacts', 'city'),
      queryInterface.removeColumn('Contacts', 'state'),
      queryInterface.removeColumn('Contacts', 'zip')
    ])
    .catch(err => console.log(err));
  }
};
