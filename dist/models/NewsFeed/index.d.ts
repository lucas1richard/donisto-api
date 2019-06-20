import Sequelize from 'sequelize';
import { NewsFeedInstance } from './types/NewsFeedInstance';
export declare type INewsFeedModel = typeof Sequelize.Model & {
    new (values?: object, options?: Sequelize.BuildOptions): NewsFeedInstance;
};
declare const NewsFeed: INewsFeedModel;
export default NewsFeed;
