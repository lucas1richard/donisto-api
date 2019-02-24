import NewsFeedAttributes from '../types/Attributes';
import NewsFeedKeys from '../types/NewsFeedKeys';
export declare const genRandomString: (length: number) => string;
export declare const generatePassSalt: (password: string) => {
    [NewsFeedKeys.PASSWORD]: string;
    [NewsFeedKeys.SALT]: string;
};
export default function beforeCreate(user: NewsFeedAttributes): NewsFeedAttributes;
