import Sequelize from 'sequelize';
import { NewsFeedCausesInstance } from './types/NewsFeedCausesInstance';
export declare type INewsFeedCausesModel = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): NewsFeedCausesInstance;
};
declare const NewsFeedCauses: INewsFeedCausesModel;
export default NewsFeedCauses;
