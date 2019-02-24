import NewsFeedKeys from '../types/NewsFeedKeys';
import { NewsFeedInstance } from '../types/NewsFeedInstance';
interface ICredentials {
    [NewsFeedKeys.EMAIL]: string;
    [NewsFeedKeys.PASSWORD]: string;
}
export interface IFindByPassword {
    (credentials: ICredentials): Promise<NewsFeedInstance>;
}
/**
 * Get the user from the password
 */
declare const findByPassword: IFindByPassword;
export default findByPassword;
