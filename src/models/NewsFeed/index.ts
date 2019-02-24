import Sequelize from 'sequelize';
import sequelize from 'config/database/conn';
import attributes from './attributes';
import NewsFeedAttributes from './types/Attributes';
import { NewsFeedInstance } from './types/NewsFeedInstance';

interface INewsFeedMethods {
}

interface INewsFeed extends Sequelize.Model<NewsFeedInstance, NewsFeedAttributes>, INewsFeedMethods {}

const NewsFeed = sequelize.define('newsfeed', attributes, {
}) as INewsFeed;

export default NewsFeed;
