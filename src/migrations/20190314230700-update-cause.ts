import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: DataTypes) => {
    return Promise.all([
      queryInterface.addColumn('causes', 'suggested_donation_amount', {
        type: Sequelize.DECIMAL,
        allowNull: true,
      })
    ]).catch((err) => {
      console.log(err);
    });
  },
  down: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('causes', 'suggested_donation_amount')
    ])
    .catch(err => console.log(err));
  }
};
