import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import ContactAttributes from './types/Attributes';

const Contacts = sequelize.define('Donors', attributes) as Sequelize.Model<any, ContactAttributes>;

export default Contacts;
