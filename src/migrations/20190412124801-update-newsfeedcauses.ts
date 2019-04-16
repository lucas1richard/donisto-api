import { QueryInterface, DataTypes } from 'sequelize';

module.exports = {
  up: (queryInterface: QueryInterface, Sequelize: DataTypes) => {
    return Promise.all([
      queryInterface.addColumn('newsfeedcauses', 'cause_uuid', {
        type: Sequelize.STRING
      }),
      queryInterface.addColumn('newsfeedcauses', 'newsfeed_uuid', {
        type: Sequelize.STRING
      }),
    ]).catch((err) => {
      console.log(err);
    });
  },
  down: (queryInterface: QueryInterface) => {
    return Promise.all([
      queryInterface.removeColumn('contacts', 'facebook_id')
    ])
    .catch(err => console.log(err));
  }
};
