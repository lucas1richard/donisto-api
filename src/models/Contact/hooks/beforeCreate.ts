import * as crypto from 'crypto';
import ContactAttributes from '../types/Attributes';
import ContactKeys from '../types/ContactKeys';

export const genRandomString = function(length: number) {
  return crypto.randomBytes(Math.ceil(length / 2))
    .toString('hex') /** convert to hexadecimal format */
    .slice(0, length);   /** return required number of characters */
};

export const generatePassSalt = (password: string) => {
  const salt = genRandomString(16);
  const hash = crypto.createHmac('sha512', salt);
  hash.update(password);
  const value = hash.digest('hex');
  return {
    [ContactKeys.PASSWORD]: value,
    [ContactKeys.SALT]: salt
  };
};

export default function beforeCreate(user: ContactAttributes) {
  const { password, salt } = generatePassSalt(user[ContactKeys.PASSWORD]);
  user[ContactKeys.PASSWORD] = password;
  user[ContactKeys.SALT] = salt;
  return user;
}
