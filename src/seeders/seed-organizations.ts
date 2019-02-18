import { QueryInterface, DataTypes } from 'sequelize';
import ContactKeys from 'models/Contact/types/ContactKeys';

module.exports = {
  up(queryInterface: QueryInterface, sequelize: DataTypes) {
    return queryInterface.bulkInsert('Contacts', [{
      [ContactKeys.UUID]: sequelize.UUIDV4(),
      [ContactKeys.FIRST_NAME]: 'Firstone',
      [ContactKeys.LAST_NAME]: 'Lastone',
      [ContactKeys.EMAIL]: 'emailone@tst.tst'
    }]);
  },

  down() {

  }
};