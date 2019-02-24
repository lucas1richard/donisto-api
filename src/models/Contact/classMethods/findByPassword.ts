import * as crypto from 'crypto';
import Sequelize from 'sequelize';
import ContactKeys from '../types/ContactKeys';
import { ContactInstance } from '../types/ContactInstance';
import Organizations from 'models/Organization';
const { Op } = Sequelize;

interface ICredentials {
  [ContactKeys.EMAIL]: string;
  [ContactKeys.PASSWORD]: string;
}

export interface IFindByPassword {
  (credentials: ICredentials): Promise<ContactInstance>;
}

/**
 * Get the user from the password
 */
const findByPassword: IFindByPassword = async function (credentials) {
  // get the salt
  const contactInstance = await this.scope('').findOne({
    where: {
      [ContactKeys.EMAIL]: {
        [Op.iLike]: credentials.email
      }
    }
  });

  const { salt } = contactInstance;
  const hash = crypto.createHmac('sha512', salt);
  hash.update(credentials.password);
  const value = hash.digest('hex');

  return this
    .findOne({
      where: {
        [ContactKeys.EMAIL]: {
          [Op.iLike]: credentials.email
        },
        [ContactKeys.PASSWORD]: value
      },
      include: [{
        model: Organizations
      }]
    });
};

export default findByPassword;