import ContactAttributes from '../types/Attributes';
import ContactKeys from '../types/ContactKeys';
export declare const genRandomString: (length: number) => string;
export declare const generatePassSalt: (password: string) => {
    [ContactKeys.PASSWORD]: string;
    [ContactKeys.SALT]: string;
};
export default function beforeCreate(user: ContactAttributes): ContactAttributes;
