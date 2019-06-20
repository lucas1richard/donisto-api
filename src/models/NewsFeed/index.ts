import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import NewsFeedAttributes from './types/Attributes';
import { NewsFeedInstance } from './types/NewsFeedInstance';

interface INewsFeedMethods {
}

interface INewsFeed extends Sequelize.Model<NewsFeedInstance, NewsFeedAttributes>, INewsFeedMethods {}

export type INewsFeedModel = typeof Sequelize.Model & {
  new (values?: object, options?: Sequelize.BuildOptions): NewsFeedInstance;
};

const NewsFeed = <INewsFeedModel>sequelize.define('newsfeed', attributes, {
});

export default NewsFeed;
